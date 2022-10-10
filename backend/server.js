import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();


app.use(cors());
app.get("/api/products", (req,res)=>{
  res.send(data.products);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});

