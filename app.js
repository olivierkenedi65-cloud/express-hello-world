const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req,res)=>{
res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;background:#000;color:#fff;font-family:Arial;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh}h1{font-size:18vw;font-weight:900;line-height:0.9;letter-spacing:-5px;text-align:center;margin:0;background:linear-gradient(#fff,#888);-webkit-background-clip:text;-webkit-text-fill-color:transparent}button{margin-top:30px;padding:15px 40px;border-radius:50px;border:0;background:#fff;color:#000;font-weight:900;font-size:18px}</style></head><body><h1>MANDZX<br>LOGO</h1><button onclick="alert('Telecharger - MANDZX v1')">TELECHARGER</button></body></html>`);
});

app.listen(PORT,()=>console.log('Live'));
