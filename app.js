// external import
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
// swagger documentation
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoute = require('./route/authRoute');
const helpRoute = require('./route/helpRoute');
const donateRoute = require('./route/donateRoute');
const paymentRoute = require('./route/paymentRoute');

// internal import
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');

// app object
const app = express();
dotenv.config();
app.use(cors());

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
  
  

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// parse application/json
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json());

// Swagger Options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: '1.0.0',
            title: 'Student Aid API',
            description: 'Student Aid API Information',
            contact: {
                name: 'Habibur Rahman Sobuj',
                email: 'sobujhd@gmail.com',
            },
            servers: ['https://student-aid-main.herokuapp.com/'],
        },
    },
    // ['.routes/*.js']
    apis: ['./route/*.js'],
};
//   swagger route
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// DATABASE CONNECTION
mongoose
    .connect(
        process.env.NODE_ENV === 'development'
            ? process.env.MONGODB_CONNECTION_STRING_LOCAL
            : 'mongodb+srv://hr-sobuj:xs2ShkDKTB3FdUZ@student-aid.54e0b2i.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // eslint-disable-next-line prettier/prettier
        },
    )
    .then(() => console.log('Database Connected.'))
    .catch((err) => {
        console.log(err);
    });

// PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// set static files
app.use(express.static(path.join(__dirname, 'public')));

// routing setup
app.use('/auth', authRoute);
app.use('/help', helpRoute);
app.use('/donate', donateRoute);
app.use('/payment', paymentRoute);

// 404 not found handling
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

// listing
app.listen(process.env.PORT, () => {
    console.log(
        `app is listening on the port ${process.env.PORT} and the url is http://localhost:${process.env.PORT}`,
    );
});
