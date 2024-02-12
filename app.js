const express = require('express');
const app = express();
const port = 5000;

app.listen(port, ()=>{
    console.log(`app listen to the port ${port}`)
})


app.get('/checkTest', (req, res)=>{
    res.send("I am successfull TARA MAA!!!!!!!!!!")
})
app.get('/checkTest1', (req, res)=>{
    res.send("I am successfull TARA MAA")
})
app.get('/my-final-check', (req, res)=>{
    res.send("I am successfull TARA MAA as always")
})
app.get('/', (req, res)=>{
    res.send("page loaded hmmm successfully check check!!!!!!!!")
})