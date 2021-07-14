const nodemailer = require('nodemailer');
const creds = require('../config');



const sendMail = async (name, email, telephone, subject, contentHTML) => {
    try {       
        const transporter = nodemailer.createTransport({
            pool: true,
            host: 'smtp-mail.outlook.com',
            secureConnection: false,
            port: 587,
            secure: false,
            auth: {
                user: creds.OUTLOOK_MAIL,
                pass: creds.OUTLOOK_PASSWORD
            },
            tls: {
                ciphers:'SSLv3',
                rejectUnauthorized: false
            }
        });     
        const mailOptions = {
            from: `${name} <${creds.OUTLOOK_MAIL}>`,
            to: creds.OUTLOOK_MAIL,
            subject:`${subject} | Nuevo mensaje.`,
            html: contentHTML
        };
        const result = await transporter.sendMail(mailOptions);
        return result;
        
    } catch (error) {
        return error
    }
}





module.exports = {
    sendMail
};