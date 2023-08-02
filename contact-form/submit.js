const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Use Nodemailer to send the email
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Outlook, etc.
    auth: {
      user: 'portfolioformscalem@gmail.com', // Your email address
      pass: 'knatkfadqkkkwxes', // Your email password or an application-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: 'portfolioformscalem@gmail.com', // Replace this with your email address where you want to receive the messages
    subject: subject,
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
