const { Router } = require('express');
const { sendMail } = require('../helpers/configMailer');
const router = Router();


router.post('/send-email', async (req,res) => {
    const { name, email, message, telephone, subject, } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
            <li>Telefono: ${telephone}</li>
            <li>Asunto: ${subject}</li>
        </ul>
        <hr>
        <p>Mensaje: ${message}</p>
    `;
    try {
        const respMail = await sendMail(name, email, telephone, subject, contentHTML);

        res.status(200).json({
            resp: respMail
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    };
});


module.exports = router;