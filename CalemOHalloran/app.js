const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000; // You can change this to any available port you prefer

// Middleware to parse incoming request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST route to handle the form submission
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'calemohalloran99@gmail.com', // Your email address
      pass: 'Monopoly20', // Your email password (You might want to use environment variables here for security)
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: 'calemohalloran99@gmail.com', // Your email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong. Please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Thank you for contacting us. We will get back to you soon.');
    }
  });
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
