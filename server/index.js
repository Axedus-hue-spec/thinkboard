import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import sequelize from './db.js';
import notesRoutes from './routes/notesRoutes.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const __dirname = path.resolve()

if (process.env.NODE_ENV !== 'production') {
    app.use(cors({
        origin: 'http://localhost:5173'
    }));
};


app.use(express.json());
app.use(rateLimiter)

app.use('/api/notes', notesRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'))
    });
}


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