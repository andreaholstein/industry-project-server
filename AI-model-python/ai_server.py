from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer

app = Flask(__name__)

# Load DistilGPT-2 Model and Tokenizer
model_name = "distilgpt2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# Set the padding token
tokenizer.pad_token = tokenizer.eos_token

@app.route("/api/generate", methods=["POST"])
def generate():
    data = request.json
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400

    # Tokenize input with padding and attention mask
    inputs = tokenizer(prompt, return_tensors="pt", padding=True, truncation=True)
    
    # Generate text with pad_token_id and attention mask
    outputs = model.generate(
        inputs["input_ids"],
        attention_mask=inputs["attention_mask"],
        max_length=100,
        pad_token_id=tokenizer.pad_token_id,
        num_return_sequences=1,
        repetition_penalty=1.2   # Penalizes repeated tokens
    )

    # Decode the generated tokens
    raw_response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Clean up the response by removing excessive newline characters
    clean_response = raw_response.replace("\n", " ").strip()

    return jsonify({"response": clean_response})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
