//validação form

const form = document.getElementById('form');
const spans  = document.querySelectorAll('.span-required');
const campos = document.querySelectorAll('.required');

function setError(index){
    campos[index].style.border = '3px solid #f00';
    spans[index].style.display = 'block'
}

function removeError(index){
    campos[index].style.border = '1px solid #000';
    spans[index].style.display = 'none'
}

function nameValidate(){
    const campo0 = campos[0].value.trim();
    if(campo0.length < 3){
        setError(0);
    }
    else{
        removeError(0);
    }
}

function emailValidate(){

    if(campos[1].value.indexOf("@") == -1 || campos[1].value.indexOf(".") == -1 || (campos[1].value.indexOf("@") - campos[1].value.indexOf(".")) == 1){
        setError(1);
    }
    else{
        removeError(1);
    }
}

function cpflValidate(){
    var numeroDecasas = campos[2].value.trim();

    if(numeroDecasas.length == 14){
        removeError(2);
    }
    else if(numeroDecasas.length >= 15){
        document.getElementById("txt_cpf").value = document.getElementById("txt_cpf").value.substring(0, document.getElementById("txt_cpf").value.length -1);
        document.getElementById("txt_cpf").value = document.getElementById("txt_cpf").value ;
        removeError(2);
    }
    else{
        setError(2);
    }
}

function cepValidate(){
    var numeroDecasas = campos[3].value.trim();

    if(numeroDecasas.length == 9){
        removeError(3);
    }
    else if(numeroDecasas.length >= 10){
        document.getElementById("txt_cep").value = document.getElementById("txt_cep").value.substring(0, document.getElementById("txt_cep").value.length -1);
        document.getElementById("txt_cep").value = document.getElementById("txt_cep").value ;
        removeError(3);
    }
    else{
        setError(3);
    }
    //13165-000
}

function somenteLetras(e){
    var tecla = (window.event)?event.keyCode:e.which;
    var input = document.getElementById("txt_nome").value;
    
    if (tecla > 47 && tecla < 58) {
        input = input.substring(0, input.length -1);
        document.getElementById("txt_nome").value = input;
        setError(0);
        return;
    }
    else{
        return;
    } 
}

function somenteNumeros(e){
    var tecla = (window.event)?event.keyCode:e.which;
        var input = document.getElementById("txt_cpf").value;
        
        if (tecla > 47 && tecla < 58) {
            if(input.length == 3){
                document.getElementById("txt_cpf").value += ".";
            }
            else if(input.length == 7){
                document.getElementById("txt_cpf").value += ".";
            }
            else if(input.length == 11){
                document.getElementById("txt_cpf").value += "-";
            }
            else{
                return;
            }
        }
        else{
            input = input.substring(0, input.length -1);
            document.getElementById("txt_cpf").value = input;
            return;
        } 
}

function somenteNumeros2(e){
    var tecla = (window.event)?event.keyCode:e.which;
        var input = document.getElementById("txt_cep").value;
        
        if (tecla > 47 && tecla < 58) {
            if(input.length == 5){
                document.getElementById("txt_cep").value += "-";
            }
            else{
                return;
            }
        }
        else{
            input = input.substring(0, input.length -1);
            document.getElementById("txt_cep").value = input;
            return;
        } 
}

//123.456.789-09

//onkeydown="somenteNumeros()"