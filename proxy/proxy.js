import express from "express";
import axios from "axios";

const router = express.Router();

// create a proxy router for Ai generation
router.post("/chat", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        // Forward the request to the Python backend
        const response = await axios.post("http://localhost:5001/api/generate", { prompt });

        // Return the Python backend's response
        res.json(response.data);
    } catch (error) {
        console.error("Error communicating with Python backend:", error.message);
        res.status(500).json({ error: "Failed to process the request" });
    }
});

export default router;
