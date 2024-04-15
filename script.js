function insert(numero){
    let n = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = n + numero;
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);
}
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
const buttontype = {
    "Backspace": (ctrl, shift , alt) => {
        ctrl ? clean() : back()},
    "1" : () => insert(1),
    "2" : () => insert(2),
    "3" : () => insert(3),
    "4" : () => insert(4),
    "5" : () => insert(5),
    "6" : () => insert(6),
    "7" : () => insert(7),
    "8" : () => insert(8),
    "9" : () => insert(9),
    "0" : () => insert(0),
    "-" : () => insert('-'),
    "+" : () => insert('+'),
    "/" : () => insert('/'),
    "*" : () => insert('*'),
    "=" : () => calcular('='),
    "." : () => insert('.'),
};



document.addEventListener('keydown', function(tecla){
    buttontype[`${tecla.key}`](tecla.ctrl, tecla.shift, tecla.alt);

})
