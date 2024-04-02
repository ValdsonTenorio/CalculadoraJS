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

document.addEventListener('keydown', function(tecla){

    switch(tecla.keyCode){
        case 8: clean();
        break;
        case 49: insert(1);
        break;
        case 50: insert(2);
        break;
        case 51: insert(3);
        break;
        case 52: insert(4);
        break;
        case 53: insert(5);
        break;
        case 54: insert(6);
        break;
        case 55: insert(7);
        break;
        case 56: insert(8);
        break;
        case 57: insert(9);
        break;
        case 48: insert(0);
        break;
        case 189 || 109: insert('-');
        break;
        case 107: insert('+');
        break;
        case 193 || 111: insert('/');
        break;
        case 56: insert('*');
        break;
        case 190: insert('.');
        break;
        case 187: calcular();
        break;


    }

})
