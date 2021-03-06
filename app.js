require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

//Extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

//Swagger
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');

const connectDB = require('./db/connect');
const authMiddleware = require('./middleware/authentication');
const auth_router = require('./routes/auth');
const jobs_router = require('./routes/jobs');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.set('trust proxy', 1);
app.use(rateLimiter({ windowMs: 60 * 1000, max: 60 }));
app.use([helmet(), cors(), xss()]);

// extra packages
app.get('/', (req, res) => {
    res.send('<h2>Welcome to the jobs API service.</h1><a href="/api-docs">View the API documentation</a>');
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use('/api/v1/auth', auth_router);
app.use('/api/v1/jobs', authMiddleware, jobs_router);
// routes
app.get('/', (req, res) => {
    res.send('jobs api');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();