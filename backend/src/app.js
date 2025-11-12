import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Hello from Express inside a Dev Container! Ariana was here!" });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.get("/ariana", (req, res) => {
  res.status(200).send("Hello Ariana!");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});