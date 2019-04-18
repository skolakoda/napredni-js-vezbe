// 192.168.0.107:8080
const fs = require('fs')
const express = require('express')
// destruktuiranje - vadi svojstvo iz objekta
const { getRandomName } = require('./helpers.js')

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

app.post('/dodaj-ime', (req, res) => {
	const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
	const imena = sadrzaj.split(", ")
	const { ime } = req.body
	// proverava da li ime vec postoji
	if (imena.includes(ime)) {
		res.send('Hvala ali ime vec postoji.')
	} else {
		// ako ne postoji, dodaje ga u fajl
		fs.appendFile('imena.txt', ', ' + ime, () => {
			res.send('Hvala na azuriranju baze imena.')	
		})
	}
})

/* START SERVER */

app.listen(8080, function() {
	console.log('Server je krenuo.')
})
