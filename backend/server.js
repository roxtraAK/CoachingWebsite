import express from "express";
import nodemailer from "nodemailer";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
const pgp = pgPromise();
var db = pgp(
  `postgres://postgres:${process.env.POSTGRES_PASSWORD}@localhost:5432/postgres`
);
const app = express();
import cors from "cors";
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

const twilioClient = twilio(
  process.env.TWILLIO_SID,
  process.env.TWILLIO_AUTH_TOKEN
);

app.post("/coaching", async (req, res) => {
  try {
    const { firstname, lastname, email, phonenumber } = req.body;

    if (
      firstname === undefined ||
      lastname === undefined ||
      email === undefined ||
      phonenumber === undefined
    ) {
      return res.status(400).json({ error: "Fehlende Parameter" });
    }

    await db.none(
      'INSERT INTO public."Coaching" (firstname, lastname, email, phonenumber) VALUES ($1, $2, $3, $4)',
      [firstname, lastname, email, phonenumber]
    );

    await mailer.sendMail({
      from: process.env.MAIL,
      to: email,
      subject: "Coaching Anfrage",
      text:
        "Hi " +
        firstname +
        ",\n\nVielen Dank für deine Anfrage. Ich werde mich in Kürze bei dir melden.\n\nMit freundlichen Grüßen,\nFabio Willmann",
    });

    await twilioClient.messages.create({
      body:
        "Hi " +
        firstname +
        ",\n\nVielen Dank für deine Anfrage. Ich werde mich in Kürze bei dir melden.\n\nMit freundlichen Grüßen,\nFabio Willmann",
      from: process.env.TWILLIO_NUMBER,
      to: phonenumber,
    });
    res.status(200).send("SMS gesendet");
  } catch (error) {
    console.error("Fehler:", error);
    res
      .status(500)
      .json({ error: "Fehler beim Speichern oder Senden der E-Mail" });
  }
});

app.post("/personaltraining", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const { bookedDate, firstname, lastname, email, phonenumber, product } =
      req.body;

    if (
      bookedDate === undefined ||
      firstname === undefined ||
      lastname === undefined ||
      email === undefined ||
      phonenumber === undefined ||
      product === undefined
    ) {
      return res.status(400).json({ error: "Fehlende Parameter" });
    }

    await db.none(
      'INSERT INTO public."Personaltraining" ("bookedDate", firstname, lastname, email, phonenumber, product) VALUES ($1, $2, $3, $4, $5, $6)',
      [bookedDate, firstname, lastname, email, phonenumber, product]
    );
    res.status(200).send("Personaltraining gebucht");
  } catch (error) {
    console.error("Fehler:", error);
    res.status(500).json({ error: "Fehler beim Buchen des Personaltrainings" });
  }
});

app.get("/personaltraining", async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: "Ein Datum muss angegeben werden." });
  }

  try {
    const result = await db.any(
      `SELECT "bookedDate" FROM public."Personaltraining"
       WHERE DATE("bookedDate") = DATE($1)`,
      [new Date(date)]
    );

    console.log("Gebuchte Termine:", result); // Debugging
    res.status(200).json(result.map((row) => row.bookedDate));
  } catch (error) {
    console.error("Fehler beim Abrufen der gebuchten Termine:", error);
    res
      .status(500)
      .json({ error: "Fehler beim Abrufen der gebuchten Termine" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
