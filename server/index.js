const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const sequelize = require('./db');
const notesRoutes = require('./routes/notesRoutes');
const rateLimiter = require('./middleware/rateLimiter');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json());
app.use(rateLimiter)

app.use('/api/notes', notesRoutes)

function start() {
    try {
        sequelize.sync().then(result=>console.log(result)).catch(err=> console.log(err));
        app.listen(5000, () => {
            console.log('server is running')
        });
    } catch(e) {
        console.log(e);
    }
};

start();