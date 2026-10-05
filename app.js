const express = require('express');
const app = express();
app.get('*', async (req,res)=>{
  try{
    const r = await fetch('http://78.154.133.110:3001'+req.url);
    const t = await r.text();
    res.set('Access-Control-Allow-Origin','*');
    res.send(t);
  }catch(e){ res.send('MANDZX LOGO SERVER LIVE - IP 78.154.133.110:3001'); }
});
app.listen(process.env.PORT||10000);
