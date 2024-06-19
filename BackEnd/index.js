import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './Database/db.js';
import Snackin from './Routes/Snackin.js';
import authRoutes from './Routes/AuthRoute.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(Snackin);
app.use(authRoutes)

app.listen(process.env.APP_PORT, async () => {
    await testConnection();
    console.log(`\n🚥 Server is running at http://localhost:${process.env.APP_PORT}\n`);
});
