const fs = require('fs')

const dodajIme = (req, res) => {
	const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
	const imena = sadrzaj.split(", ")
	const { ime } = req.body
	if (imena.includes(ime)) {
		res.send('Hvala ali ime vec postoji.')
	} else {
		fs.appendFile('imena.txt', ', ' + ime, () => {
			res.send('Hvala na azuriranju baze imena.')	
		})
	}
}

module.exports = dodajIme