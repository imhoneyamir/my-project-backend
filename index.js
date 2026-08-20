const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Root route (Fixes "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend running smoothly' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));