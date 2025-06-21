const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

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
        user: 'jkaurdhillon51@gmail.com',
        pass: 'zzsd jjga hinj ohzw' 
      }
    });

    const mailOptions = {
      from: 'jkaurdhillon51@gmail.com',
      to: 'jkaurdhillon51@gmail.com',
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
