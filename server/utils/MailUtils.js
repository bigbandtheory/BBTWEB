import {Promise} from "es6-promise";

export const sendMail = async (from, to, subject, body ) => {
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
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                reject(error);
            }
            resolve(info);
        });
    });
};