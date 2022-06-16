const express = require('express');
var path = require('path')
const app = express();

app.listen(3000, ()=> {
    console.log('Started listening to port 3000')
})

app.get('/', (req,res)=> {
    res.sendFile('index.html', { root: path.join(__dirname, '../front-end') });
})