function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreE = score < 60 && score >= 0

  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  } else if (scoreB) {
    scoreFinal = 'B'
  } else if (scoreC) {
    scoreFinal = 'C'
  } else if (scoreD) {
    scoreFinal = 'D'
  } else if (scoreE) {
    scoreFinal = 'E'
  } else {
    scoreFinal = 'Nota Inválida'
  }

  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(90))
console.log(getScore(80))
console.log(getScore(70))
console.log(getScore(60))
console.log(getScore(50))
console.log(getScore(-1))
