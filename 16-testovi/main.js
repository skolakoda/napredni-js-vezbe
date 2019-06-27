function saberi(a, b) {
  if (typeof a != "number" || typeof b != "number")
    return NaN
  return a + b
}

function pomnozi(...args) {
  /*
  let rezultat = 1
  args.forEach(x => {
    rezultat = rezultat * x
  })
  return rezultat
  */
  return args.reduce((a, b) => a * b, 1)
}