// index.js
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Use Nodemailer to send the email
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Outlook, etc.
    auth: {
      user: 'calemohalloran99@gmail.com', // Your email address
      pass: 'Monopoly20', // Your email password or an application-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: 'calemohalloran99@gmail.com', // Replace this with your email address where you want to receive the messages
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.send('Error');
    } else {
      console.log('Email sent:', info.response);
      res.send('Success');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
