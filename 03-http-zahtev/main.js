console.log(1);

fetch('http://192.168.0.104:8080/random')
  .then(odgovor => odgovor.text())
  .then(podatak => {
    console.log(podatak)
    console.log(2);
  })

console.log(3);