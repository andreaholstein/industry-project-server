// --------- FXNALITY ---------
import express from "express";
// import cors from "cors";
import "dotenv/config";
import proxy from "./proxy/proxy.js";
// ---------- ROUTES ----------

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
// app.use(cors());
app.use(express.json());

// ROUTES
// app.use("/");

// apply chatbot route with middleware
app.use("/api", (req, res, next) => {

  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.originalUrl}`);
  next();

}, proxy);

app.listen(PORT, () => {
  console.log(`Server is live @ ${PORT}
    Press CTRL + C to stop`);
});
