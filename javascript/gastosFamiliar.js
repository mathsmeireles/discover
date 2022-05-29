let family = {
  incomes: [2300, 3200, 500, 250.33],
  expenses: [320.55, 400, 1500, 380.3]
}

function sum(array) {
  let total = 0

  for (value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0
  let balanceText = 'negativo'

  if (itsOk) {
    balanceText = 'positivo'
  }

  console.log(`Saldo ${balanceText} igual a ${total.toFixed(2)}R$`)
}

calculateBalance()
