import 'dotenv/config';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const angularDistPath = path.join(__dirname, '../../frontend/dist/frontend/browser');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(angularDistPath));

app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: "Hello world"
  });
});

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
