require('dotenv').config()
import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();


app.get('/api/products', (req, res)=> {
  res.send(data.products);
});

const PORT = process.env.PORT || 5000

app.listen(process.env.PORT, ()=> {
  console.log(`Server run on ${PORT}`)
})

