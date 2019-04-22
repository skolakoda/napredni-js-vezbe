const fs = require('fs')
// destruktuiranje - vadi svojstvo iz objekta
const { getRandomName } = require('../helpers.js')

const random = (req, res) => {
	const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
	const imena = sadrzaj.split(", ")
  res.send(getRandomName(imena))
}

module.exports = random