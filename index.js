// --------- FXNALITY ---------
import express from "express";
// import cors from "cors";
import "dotenv/config";
// ---------- ROUTES ----------

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
// app.use(cors());
// app.use(express.json());

// ROUTES
app.use("/");

app.listen(PORT, () => {
  console.log(`Server is live @ ${PORT}
    Press CTRL + C to stop`);
});
