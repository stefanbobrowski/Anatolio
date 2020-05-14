// import nodemailer from "nodemailer";
// import nodemailer from "nodemailer";
const router = require("express").Router();
const nodemailer = require("nodemailer");

const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: "stefanbobrowski1@gmail.com",
    pass: "UpperBRS15",
  },
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.route("/send").post((req, res) => {
  const to = req.body.to;
  const from = req.body.from;
  const subject = req.body.subject;
  const message = req.body.message;

  const mail = {
    from: from,
    to: to,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json("fail");
    } else {
      res.json("success");
    }
  });
});

module.exports = router;
