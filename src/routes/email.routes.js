const { Router } = require("express");
const nodemailer = require("nodemailer");

const router = Router();


router.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'tristian.bernhard92@ethereal.email',
        pass: 'e7Q8hfKkssuFZehbGp'
    }
});
  const html = `<h1>${message}</h1>`;

  await transporter.sendMail({
    from: "miempresa@gmail.com",
    to: email,
    subject: "Hola",
    html,
  });
  
  res.status(200).send("el email se envió");
});

module.exports = router;
