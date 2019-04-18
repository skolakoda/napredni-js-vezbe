// 192.168.0.107:8080
const fs = require('fs')
const express = require('express')
// destruktuiranje - vadi svojstvo iz objekta
const { getRandomName } = require('./helpers.js')
const dodajIme = require('./routes/dodajIme')

const app = express()
// konfigurisemo aplikaciju da prepozna novi format
// urlencoded sluzi za slanje podataka preko html formi
app.use(express.urlencoded({ extended: true }))

/* RUTE */

app.get('/', function(req, res) {
	res.send('Dobrodosli na Random Name API.')
})

app.get('/sva-imena', (req, res) => {
  const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
  res.send(sadrzaj)
})

app.get('/random', (req, res) => {
	res.send(getRandomName(imena))
})

app.post('/dodaj-ime', dodajIme)

/* START SERVER */

app.listen(8080, function() {
	console.log('Server je krenuo.')
})
