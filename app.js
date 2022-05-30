import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 4100;
import 'dotenv/config'

app.set('view engine', '.ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })