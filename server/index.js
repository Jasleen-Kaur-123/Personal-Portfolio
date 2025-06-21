const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Root@123', 
  database: 'personalportfoliodb',
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL DB');
});

// POST API for form submission
app.post('/contact', (req, res) => {
  const { name, phone_number, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, Email, and Message are required' });
  }

  const sql = `INSERT INTO contact_messages (name, phone_number, email, message) VALUES (?, ?, ?, ?)`;

  db.query(sql, [name, phone_number, email, message], (err, result) => {
    if (err) {
      console.error('❌ Error inserting data:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json({ message: '✅ Message submitted successfully' });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
