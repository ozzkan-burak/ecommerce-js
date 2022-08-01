const express = require("express");
const data= require('./data.js');
const app = express();

app.get("/api/products", (req,res)=>{
  res.send(data.products);
});

PORT = 5000;

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});