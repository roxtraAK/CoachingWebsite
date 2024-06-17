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

// has to be configured
app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM your_table_name");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data from database");
  }
});
