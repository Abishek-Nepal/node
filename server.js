import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = 8080;

// const connection = async ()=>{}
app.get("/", (req, res)=>{
    res.json("working")
    console.log("working here..")
})

app.listen(port, ()=>{
    console.log("starting the server...");
})