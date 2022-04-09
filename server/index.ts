import express, { Express, Request, Response} from "express";
import {config} from "dotenv";

config();
const app:Express=express();
const PORT : number | string = process.env.PORT || 8080;

app.use("/",(req:Request,res:Response)=>res.json({message:'“Goodbye, world”'}));
app.use("/hellow/:id",(req:Request,res:Response)=>res.status(200).send(`Hola ${req.params.id?req.params.id:"anonimo"}`));


app.listen(PORT,()=>console.log(`listening on http://localhost:${PORT}`));
