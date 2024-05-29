import { log } from "console"
import express from "express"
const  app = express()

const PORT = 4000

app.get("/" , (req ,res ,next)=>{
    res.send("Hello world")
})

app.listen(PORT , ()=>{
    console.log(`server Running on Port ${PORT}`);
})