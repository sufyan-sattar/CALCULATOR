function clickMe(e) {
    document.getElementById('inp').value += e
}

function eq() {
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr() {
    document.getElementById('inp').value = ''
}

function del() {
    var a = document.getElementById('inp').value
    document.getElementById('inp').value = a.slice(0, -1)
}

function moduLous() {
    var inputField = document.getElementById('inp');
    var expression = inputField.value;
    var result = eval(expression) / 100;
    inputField.value = result;
}