import {config} from 'dotenv';
import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();
app.use(cors())

console.log(data.products);

app.get('/api/products', (req, res)=> {
  console.log(data)
  res.send(data.products);
});

const PORT = process.env.PORT || 5000

app.listen(process.env.PORT, ()=> {
  console.log(`Server run on ${PORT}`)
})

