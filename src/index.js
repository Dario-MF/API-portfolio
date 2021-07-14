const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRouter = require('./routes/routes');
require('colors');

const app = express();
dotenv.config();

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// API route
app.use('/api', apiRouter);

// APP route
app.use(express.static(path.join(__dirname, 'public')));


// Server init
(async () => {
    try {
        await app.listen(app.get('port'));
        console.log(`Server up in port:  ${app.get('port')}`.green);
    } catch (error) {
        console.log('Server down'.red, error);
    };
})();