//server.js
const express = require("express");
const favicon = require("express-favicon");
const request = require('request-promise-native')
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/", async (req, res) => {
  //paso los datos de categoria a la api
  let categoria = req.query.categoria;
  const uri = `https://api.nytimes.com/svc/topstories/v2/${categoria}.json?api-key=bxGlWsCJOETPGjfULoUPDvt3RBclFgCn`;
  //llamo a la api del diario
  const api_res = await request(uri)
    .catch(err => {
      //log de errores
      console.log('el servidor no responde')
      console.log(err)
    });
    //devuelvo un json a mi cliente
    res.send(api_res);
});

app.listen(port);
