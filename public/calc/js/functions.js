function calc(value) {
   document.getElementById('display').value += value;
}


function clearDisplay() {
   document.getElementById('display').value = '';
}


function calcResult() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}