import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

(() => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)

  const db = mongoose.connection;
  db.once('open', () => console.log('DataBase connected.'));
  db.on('error', (error) => console.error(error));
})()
