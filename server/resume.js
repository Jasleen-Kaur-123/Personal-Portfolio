const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load environment variables


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Serve PDF from public folder
app.use('/resume', express.static(path.join(__dirname, 'public')));

// ✅ Email notification route
app.post('/resume-download', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '📥 Resume Downloaded',
      text: 'Someone downloaded your resume from your portfolio.'
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
