import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import cors from 'cors';

require('dotenv').config()

const app = express();

// Port variable
const PORT = 5000;

// Connect body parser to express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors())


// Send Email
app.post('/send', (req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: process.env.EMAIL,
        from: req.body.email,
        subject: req.body.title,
        text: req.body.body,

    };
    sgMail.send(msg).then(res => console.log('Message sent!')).catch(err => console.log(err));

});



app.listen(PORT, () => {
    console.log(chalk.green(`Started listening to port ${PORT}`));
});