const express = require('express');
const app = express();

app.listen (3000, () => { console.log ("Levantando un servidor con Express en puerto 3000")} );

const publicPath = path.join(__dirname, "/public")
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
})