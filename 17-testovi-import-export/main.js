// uhvatiti iz editora

export function findLongestWordLength(text) {
  const nizBrojeva = text.split(' ')
    .map(rec => rec.length)
  return Math.max(...nizBrojeva)
}
