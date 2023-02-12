const express = require('express');

const app = express();

app.get("/Kapil",(res,req)=>{
    res.send("Hey Kpail,Program worked");
}).listen(3001);