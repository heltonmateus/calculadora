function insert(num){

    var numero = document.getElementById('exibirNumeros').innerHTML;
    document.getElementById('exibirNumeros').innerHTML = numero + num;
}

function clean(){

    document.getElementById('exibirNumeros').innerHTML = ""
}

function apagar(){

    var resultado = document.getElementById('exibirNumeros').innerHTML;
    document.getElementById('exibirNumeros').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){

    var resultado = document.getElementById('exibirNumeros').innerHTML;

    if (resultado){
        document.getElementById('exibirNumeros').innerHTML = eval(resultado)
    } 
    else{

        document.getElementById('exibirNumeros').innerHTML = "Inserir Numeros"

    }


}