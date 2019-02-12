const express = require('express');

const cart = [
    {
        name:"cereal",
        price: 4.99,
        id: 23
    },
    {
        name:"milk",
        price: 2.99,
        id:142
    },
    {
        name:"ice cream",
        price: 5.99,
        id: 303
    }
];
const purchsed = [];

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(req,res){
    res.send('<h1>Welcome</h1>');
});

app.get('/cart',function(req,res){
    res.json(cart);
});

app.get('/cart/:id',function(req,res){
    const itemId = req.params.id;
    console.log(itemId,cart[0].id);
    let selected = cart.filter(item=>item.id === Number(itemId));
    res.json(selected);
});

app.listen(3030,()=>console.log(`Serving fool at port 3030`));