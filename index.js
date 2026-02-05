const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("🚀 Node.js app is running!");
});

// Health check route (useful for CI/CD & load balancers)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
