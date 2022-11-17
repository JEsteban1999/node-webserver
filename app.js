require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

// Hola

const app = express();
const port = process.env.PORT;

// Handlebars

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.render('home',{
        nombre: 'Juan Esteban Narváez',
        titulo: 'Curso de node'
    });
})

app.get('/generic',(req, res) => {
    res.render('generic',{
        nombre: 'Juan Esteban Narváez',
        titulo: 'Curso de node'
    })
})

app.get('/elements',(req, res) => {
    res.render('elements',{
        nombre: 'Juan Esteban Narváez',
        titulo: 'Curso de node'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})