import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import { eventNames } from 'cluster';
const nodemailer = require('nodemailer');
const app = express();

// Port variable
const PORT = 5000;

// Connect body parser to express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Send Email
app.post('/send', (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      auth: {
          user: process.env.USERNAME, // generated ethereal user
          pass: process.env.PASSWORD  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: req.email, // sender address
        to: 'amjedcha@gmail.com', // list of receivers
        subject: req.title, // Subject line
        text: req.body // plain text body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.status(200).send("Email sent!")
    });
    });
  


app.listen(PORT, () => {
    console.log(chalk.green(`Started listening to port ${PORT}`));
});