const express = require('express');
const app  = express();

//app.set('port',3000);
let port = 3000;

//routes
app.get('/',(req, res)=>{
res.send('Prueba');
 
});

app.listen(port,()=>{
console.log('server on port', port)
});