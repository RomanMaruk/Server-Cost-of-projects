import express from 'express';
import { route as categoryRoute } from './routes/main-categories.route';
import { config } from 'dotenv';

config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.use('/api/v1', categoryRoute);

app.listen(PORT, () => {
  console.log(`Port lisent on port ${PORT}`);
});
