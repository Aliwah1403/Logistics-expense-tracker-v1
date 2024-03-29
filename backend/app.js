const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { db } = require("./db/db");
const admin = require("firebase-admin");
// const serviceAccount = require("./config/logistics-expense-tracker-firebase-adminsdk-r0h7n-d0b19ca46d.json");

// firebase admin
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// let db = admin.firestore();

const app = express();

dotenv.config();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

server();
