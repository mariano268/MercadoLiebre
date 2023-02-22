const express = require('express');
const path = require('path')
const app = express();

app.listen (3000, () => { console.log ("Levantando un servidor con Express en puerto 3000")} );

const publicPath = path.join(__dirname, "/MercadoLiebre/public")

app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'MercadoLiebre/views/home.html'))
})