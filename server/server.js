require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const PORT = process.env.PORT
const mongoose =require('mongoose')

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to mongo: ", process.env.MONGO_URI);
    }
  );  

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/', require('./controllers/blogs'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(PORT, () =>{
  console.log('listening at port', PORT)
})
