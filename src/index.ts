import express, { Request, Response } from 'express';
import { getRandomLocation } from './controllers/Location';
const cors = require('cors');

const PORT = 8000;
const DEBUG = "True"

const app = express();

app.use(cors());

const logRequestStart = (req: Request, res: Response, next:any) => {
  console.info(`REQUEST: ${req.method}, URL: ${req.originalUrl}`)
  res.on('finish', () => {
    console.info(
      `RESPONSE for ${req.originalUrl} STATUS: ${res.statusCode}, MESSAGE: ${res.statusMessage} ${ res.get('Content-Length') || 0}b sent`)
  })
  next()
}

if (DEBUG === "True") {
  app.use(logRequestStart)
}

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "HTTP server is working" });
});

app.post("/goal/generate", getRandomLocation)
// app.post("/goal/success", ) make some saving.

app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`);
});
