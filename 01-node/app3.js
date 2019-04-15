// 192.168.0.107:8080
const http = require('http')
const fs = require('fs')
const express = require('express')
const { getRandomName } = require('./helpers.js')

const app = express()

let sadrzaj 
let imena

fs.readFile('imena.txt', 'utf8', function(err, data) {
	sadrzaj = data
	imena = sadrzaj.split(", ")
})

app.get('/', function(req, res) {
	res.send('Dobrodosli na Random Name API.')
})

app.get('/sva-imena', (req, res) => res.send(sadrzaj))

app.get('/random', (req, res) => {
	res.send(getRandomName(imena))
})

app.listen(8080, function() {
	console.log('Server je krenuo.')
})
