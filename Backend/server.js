const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const translateRoutes = require('./routes/translateRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Body parser for JSON strings
// server.js mein routes se upar add karein

app.use((req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();
});

// Routes integration
app.use('/api', translateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server blasting off on port ${PORT}`));