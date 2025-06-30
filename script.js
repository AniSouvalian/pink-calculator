function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function appendFunction(func) {
  document.getElementById('display').value += func;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function calculateResult() {
  try {
    let expr = document.getElementById('display').value;
    const open = (expr.match(/\(/g) || []).length;
    const close = (expr.match(/\)/g) || []).length;
    expr += ')'.repeat(open - close);
    const result = eval(expr);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
