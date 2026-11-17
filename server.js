import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve static assets from project root
app.use(express.static(__dirname));

// Route root to Sandbox index
app.get('/', (req, res) => {
  res.redirect('/Sandbox/index.html');
});

// Fallback for 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'Sandbox', 'pages', '404.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`VibTools UI Sandbox server running at http://${HOST}:${PORT}`);
});
