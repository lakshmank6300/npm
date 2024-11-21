const express = require('express');
const { process_params } = require('express/lib/router');
const app = express()
app.get('/', (req, res) => {
res.send("This is demo of express");
});
const products = [
{id:1, name:"iphone"},
{id:2, name:"samsung"},
{id:3, name:"oppo"},
]
app.get('/prod',(req,res) => {
res.json(products);
});
app.get('/product/:id',(req,res) => {
const newData = parseInt(req.params.id);
const item = products.find(i => i.id === newData);
res.json(item);
//res.json(products);
});
app.get('/productss',(req,res) => {
const newData = parseInt(req.query.id);
const item = products.find(i => i.id === newData);
console.log(item);
if(item)
res.json(item);
else
res.status(404).send("Item not found");
});
console.log("22A91A05C9");
app.listen(3000);