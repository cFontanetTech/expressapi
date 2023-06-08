import expres from "express";
import {postPizza} from './client.js';
import {getPizzas} from './client.js';
import {getPizza} from './client.js';
import {putPizza} from './client.js';
import {deletePizza} from './client.js';

const pizzas = [{
    name: 'carbonara',
},{
    name: 'quesos',
}]

const app = expres();

app.use(expres.json())

app.post('/pizzas',(req,res)=>{
    res.status(201).json(req.body)
})

app.get('/pizzas', (req,res) => {
    res.status(200).json(pizzas)
})

app.get('/pizzas/:id', (req,res) => {
    const {id} = req.params
    res.status(200).json(pizzas[id])
})

app.put('/pizzas/:id',(req,res)=>{
    const {id} = req.params
    pizzas[id] = req.body
    res.status(200).end('')
})

app.delete('/pizzas/:id',(req,res)=>{
    const {id} = req.params
    //pizzas.delete[id]
    pizzas.splice(id, 1);
    res.status(200).end('')
})
//get id & arrat +  put + delete

const server = app.listen(8080);

await postPizza();
await getPizzas();
await putPizza(0);
await getPizza(0);
await deletePizza(1);
await getPizzas();