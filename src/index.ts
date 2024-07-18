import express from 'express';
import { route as categoryRoute } from './routes/main-categories.route';
import { config } from 'dotenv';
import { connectDB } from './db/connect';

config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.use('/api/v1', categoryRoute);

const start = async () => {
  await connectDB(process.env.MONGO_URI as string);
  app.listen(PORT, () => {
    console.log(`Port lisent on port ${PORT}`);
  });
};

start();
