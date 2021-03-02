const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.options("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.sendStatus(200);
});
app.use(express.static("client/public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

// //handle 404
// app.use((req, res) => {
//   res.send("404: Page not Found", 404);
// });

// //handle 500
// app.use((error, req, res, next) => {
//   res.send("500: Internal Server Error", 500);
// });

app.post("/api/form", (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3> Contact Details </h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;
    //console.log(htmlEmail)
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, //587,
      secure: true, // true for 465, false for other ports,
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
      auth: {
        user: "monicaacha2103@gmail.com",
        pass: "***********",
      },
    });
    console.log(transporter);
    let mailOptions = {
      from: "test@testaccount.com",
      to: "monicaacha2103@gmail.com", // list of receivers
      subject: "New Message", // Subject line
      text: req.body.message, // plain text body
      html: htmlEmail, // html body
    };
    // console.log(mailOptions)
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log(`Message sent: ${info}`);
      console.log(`Message URL: ${nodemailer.getTestMessageUrl(info)}`);
    });
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
