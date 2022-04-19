import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

const port = process.env.PORT || 5070;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Started: http://localhost:${port}`);
})
