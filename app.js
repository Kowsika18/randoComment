const express = require('express')
const app = express()
const path = require('path')

app.use(express.static((__dirname + '/public')))
app.use(express.static((__dirname + '/script')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/login.html'));
})

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname + '/signin.html'));
})

app.get('/forgotpassword', (req, res) => {
  res.sendFile(path.join(__dirname + '/forgot.html'));
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname + '/dashboard.html'));
})



app.listen(5050, (err) => {
  console.log(err);
})