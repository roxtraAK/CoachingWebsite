const express = require("express");
const bodyParser = require("body-parser");
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:admin@localhost:5432/Todo");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/coaching", async (req, res) => {
  const { firstname, lastname, email, phonenumber } = req.body;

  try {
    await pool.query(
      "INSERT INTO users (firstname, lastname, email, phonenumber) VALUES ($1, $2, $3, $4)",
      [firstname, lastname, email, phonenumber]
    );

    res.status(201).json({ message: "Benutzer erfolgreich hinzugefügt" });
  } catch (error) {
    console.error("Datenbankfehler:", error);
    res.status(500).json({ error: "Fehler beim Speichern" });
  }
});
