import express from 'express';
import bodyParser from 'body-parser';
import cartRoutes from './src/routes/cartRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import 'dotenv/config';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

app
  .use(cors())
  .use(helmet())
  .use(morgan("dev"))
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
