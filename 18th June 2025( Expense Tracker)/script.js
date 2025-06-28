const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const transactionsList = document.getElementById('transactions');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please enter description and amount');
    return;
  }

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();
  form.reset();
}

function renderTransactions() {
  transactionsList.innerHTML = '';

  transactions.forEach(txn => {
    const sign = txn.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add(txn.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
      ${txn.text} <span>${sign}$${Math.abs(txn.amount)}</span>
      <button onclick="deleteTransaction(${txn.id})">❌</button>
    `;
    transactionsList.appendChild(item);
  });

  updateBalance();
}

function updateBalance() {
  const amounts = transactions.map(txn => txn.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const incomeAmt = amounts.filter(val => val > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
  const expenseAmt = amounts.filter(val => val < 0).reduce((acc, val) => acc + val, 0).toFixed(2);

  balance.innerText = `$${total}`;
  income.innerText = `+$${incomeAmt}`;
  expense.innerText = `-$${Math.abs(expenseAmt)}`;
}

function deleteTransaction(id) {
  transactions = transactions.filter(txn => txn.id !== id);
  updateLocalStorage();
  renderTransactions();
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

form.addEventListener('submit', addTransaction);
renderTransactions();
