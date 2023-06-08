import expres from "express";
import {postPizza} from './client.js'

const app = expres();

app.use(expres.json())

app.post('/pizzas',(req,res)=>{
    res.status(201).json(req.body)
})

const server = app.listen(8080);

postPizza();