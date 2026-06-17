/**
 * Vanguard Defence Academy — minimal backend
 * ------------------------------------------
 * Serves the static frontend from /public and exposes one endpoint,
 * POST /api/register, which logs enrollment submissions to the
 * console and appends them to data/registrations.json.
 *
 * No database, no auth — intentionally lightweight for a demo build.
 */

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const PUBLIC_DIR = path.join(__dirname, "public");
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "registrations.json");

app.use(express.json());
app.use(express.static(PUBLIC_DIR));

function readRegistrations() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return raw.trim() ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Could not read registrations.json, starting fresh.", err);
    return [];
  }
}

function writeRegistrations(records) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2));
}

app.post("/api/register", (req, res) => {
  const { fullName, phone, email, city, program, message } = req.body || {};

  if (!fullName || !phone || !email || !city || !program) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  const entry = {
    id: Date.now(),
    fullName,
    phone,
    email,
    city,
    program,
    message: message || "",
    submittedAt: new Date().toISOString()
  };

  console.log("New enrollment submission:", entry);

  const records = readRegistrations();
  records.push(entry);
  writeRegistrations(records);

  res.status(201).json({ ok: true });
});

// Friendly fallback for unknown API routes
app.use("/api", (req, res) => {
  res.status(404).json({ ok: false, error: "Not found." });
});

app.listen(PORT, () => {
  console.log(`Vanguard Defence Academy demo running at http://localhost:${PORT}`);
});
