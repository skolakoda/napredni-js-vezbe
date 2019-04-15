// 192.168.0.107:8080

const http = require('http')
const fs = require('fs')
const { getRandomName } = require('./helpers.js')

const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
const imena = sadrzaj.split(", ")

http
	.createServer(function(req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'})
		res.write(getRandomName(imena))
		res.end()
	})
	.listen(8080)
