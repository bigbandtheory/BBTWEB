import {Promise} from "es6-promise";

export const sendMail = (from, to, subject, body ) => {
    const transporter = nodemailer.createTransport({
        service: 'zoho',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: 'akshayahuja@thebigbandtheory.net',
    };
    mailOptions.subject = 'Enquiry from:' + subject;
    mailOptions.text = body;
    return new Promise((res, rej) => {
        transporter.sendMail(mailOptions, function(error, info){

        });
    });
};