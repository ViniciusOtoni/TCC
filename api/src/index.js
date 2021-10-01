import db from "./db.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(exress.json())


app.listen( process.env.PORT, (x) => console.log(`Server up at port ${process.env.PORT}`));
