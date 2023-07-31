const express = require('express');
const app = express();
const port = 3000; // Choose a port number for your server

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server route to handle form submissions (Step 6 in previous response)
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Implement the Nodemailer code (Step 4 in previous response) to send the email

  // Return a response to the client
  res.json({ success: true, message: 'Email sent successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const nodemailer = require('nodemailer');

// Function to send email using Nodemailer
const sendEmail = (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    // Replace with your email service configuration
    service: 'Gmail',
    auth: {
      user: 'calemohalloran99gmail.com', // Replace with your Gmail email address
      pass: 'Monopoly20', // Replace with your Gmail email password
    },
  });

  const mailOptions = {
    from: 'calemohalloran99gmail.com',
    to: 'calemohalloran99@gmail.com', // Replace with the recipient's email address
    subject: Website,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
