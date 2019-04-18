function getRandomName(imena) {
	return imena[Math.floor(Math.random() * imena.length)]
}

function pozdrav() {
	return "Zdravo"
}

module.exports = {
	getRandomName,
	pozdrav,
}
