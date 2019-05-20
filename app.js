const express = require('express');

const app = express();
const port = process.env.PORT ||3000;
app.get('/',(req,res)=>{
res.send(" I am Nour Hallo to my web sit");
});
app.listen(port,()=>{
    console.log('App listeing no Port ${port}!');
    
});