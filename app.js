const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MANDZX - Logo Maker</title>
<style>
body{margin:0;font-family:sans-serif;background:#000;color:#fff;display:flex;flex-direction:column;align-items:center;min-height:100vh;padding:20px}
h1{font-size:32px;background:linear-gradient(90deg,#00ff88,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:20px}
.box{background:#111;border:1px solid #333;border-radius:16px;padding:20px;width:100%;max-width:400px}
input{width:100%;padding:12px;border-radius:8px;border:1px solid #333;background:#000;color:#fff;margin:10px 0;box-sizing:border-box}
button{width:100%;padding:14px;background:#00ff88;color:#000;border:none;border-radius:8px;font-weight:bold;font-size:16px;margin-top:10px}
#preview{width:100%;height:200px;background:#0a0a0a;border:1px dashed #333;border-radius:12px;display:flex;align-items:center;justify-content:center;margin:15px 0;font-size:48px;font-weight:900}
.logo-text{font-size:36px;font-weight:900;letter-spacing:4px}
</style></head>
<body>
<h1>MANDZX</h1>
<div class="box">
<div id="preview"><span class="logo-text" id="logoPrev">LOGO</span></div>
<input id="txt" placeholder="Anarana logo..." value="MANDZX" oninput="document.getElementById('logoPrev').innerText=this.value||'LOGO'">
<button onclick="download()">Télécharger Logo</button>
<p style="font-size:12px;color:#666;text-align:center;margin-top:10px">Mobile Logo Maker - By Olivier</p>
</div>
<script>
function download(){
  const c=document.createElement('canvas');c.width=1024;c.height=1024;
  const ctx=c.getContext('2d');ctx.fillStyle='#000';ctx.fillRect(0,0,1024,1024);
  ctx.fillStyle='#fff';ctx.font='900 120px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(document.getElementById('txt').value||'LOGO',512,512);
  const a=document.createElement('a');a.download='mandzx-logo.png';a.href=c.toDataURL();a.click();
}
</script>
</body>
</html>
  `);
});

app.listen(port, () => console.log('MANDZX Live on '+port));
