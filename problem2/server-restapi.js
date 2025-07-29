import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import shortUrlRoutes from './routes/shorturl.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', shortUrlRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.HOST}`);
  });
}).catch(err => console.error('MongoDB connection error:', err));
