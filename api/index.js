import express from "express";
import conectDB from "../db/index.js";

import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});
const app = express();

conectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log('====================================');
    console.log("MongoDb connection failed ->", error);
    console.log('====================================');
})