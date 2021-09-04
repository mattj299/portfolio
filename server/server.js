import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// first arg defines connection data, second arg is an object that is going to be merged into every message object
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// verify connection configuration
transporter.verify((err, success) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is ready to take messages: ${success}`);
});

// route to send data to
app.post("/send", function (req, res) {
  const output = `
    <p>New contact request sent from your portfolio</p>
    <h3>Contact information</h3>

    <ul>
      <li>Name: ${req.body.formData.name}</li>
      <li>Email: ${req.body.formData.email}</li>
      <li>Phone number: ${
        req.body.formData.phone
          ? req.body.formData.phone
          : "No phone number was given."
      }</li>
    </ul>
   
    <h3>Message</h3>
    <p>${req.body.formData.message}</p>
    
  `;

  let mailOptions = {
    from: `${req.body.formData.email}`,
    to: process.env.EMAIL,
    subject: `Portfolio message from: ${req.body.formData.name}`,
    // alternative if html doesn't work
    text: `Name: ${req.body.formData.name}, Email: ${
      req.body.formData.email
    }, Message: ${req.body.formData.message}, Phone number: ${
      req.body.formData.phone
        ? req.body.formData.phone
        : "No phone number was given."
    }`,
    html: output,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);

      res.json({ status: "fail" });
    } else {
      console.log("Email sent successfully");
      res.json({ status: "success" });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Backend of portfolio.");
});
