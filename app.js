const express = require('express');
const path = require('path')
const app = express();

const port = process.env.PORT || 3001;

app.listen (port, () => console.log ("Servidor corriendo en el puerto ${port}") );

const publicPath = path.join(__dirname, "/MercadoLiebre/public")

app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'MercadoLiebre/views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'MercadoLiebre/views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'MercadoLiebre/views/login.html'))
})