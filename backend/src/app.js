const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/index.js')

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json())

app.use("/", router);

app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "page not found" } });
});

module.exports = app;