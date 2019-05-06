const forma = document.querySelector('form')
const input = document.getElementById('name')

forma.addEventListener('submit', e => {
  e.preventDefault()
  console.log(input.value)

  fetch('http://192.168.0.104:8080/dodaj-ime', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ime: input.value
    })
  })
    .then(res => res.text())
    .then(res => console.log(res))

})
