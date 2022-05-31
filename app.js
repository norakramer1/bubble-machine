import express from 'express'
const app = express();


import fetch from 'node-fetch';

const response = await fetch('https://bubble-machine-api-dummy.herokuapp.com/rest/session/1');
const data = await response.json();


const port = 4100;
import 'dotenv/config'


app.set('view engine', '.ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(data);
  res.render('home.ejs', { 'data' : data });
    // res.render('home')
    // res.json(data); 
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })