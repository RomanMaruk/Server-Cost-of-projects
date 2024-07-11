import express from 'express';
import { route as categoryRoute } from './routes/main-categories.route';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.use('/api/v1', categoryRoute);

app.listen(PORT, () => {
  console.log(`Port lisent on port ${PORT}`);
});
