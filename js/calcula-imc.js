
var titulo = (document.querySelector(".titulo"));





var paciente = document.querySelectorAll('.paciente');



for(var i = 0; i < paciente.length; i++)
{

    var tdPeso = paciente[i].querySelector('.info-peso');
    var tdAltura = paciente[i].querySelector('.info-altura');


    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    
    
    var tdImc = paciente[i].querySelector(".info-imc");


    
    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);

    if(!pesoValido)
    {
        tdImc.textContent = "Peso Invalido";
        pesoValido = false;
        paciente[i].classList.add("paciente-invalido");
        
    }

    if(!alturaValida){
        tdImc.textContent = "Altura Invalida";
        alturaValida = false;
        paciente[i].classList.add("paciente-invalido");
    } 


    if (pesoValido && alturaValida)
    {
        var imc = calculaImc(altura , altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura)
{
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2)
}


function validaPeso(peso)
{
    if(peso >= 0 && peso < 1000)
    {
        return true;
    }else
    {
        return false
    }
}

function validaAltura(altura)
{
    if(altura >= 0 && altura <= 3.0)
    {
        return true;
    }else
    {
        return false;
    }
}


