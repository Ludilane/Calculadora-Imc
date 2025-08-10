const calcular = document.getElementById("calcular");


function calcularIMC(){
const peso =parseFloat(document.getElementById("peso").value.replace(",","."));
const altura = parseFloat(document.getElementById("altura").value.replace (",","."));
const resultado = document.getElementById("resultado");
// const imcInput = document.getElementById("imc");




const imc= peso/(altura*altura);
resultado.textContent= `Seu imc é ${imc.toFixed(2)}`;
// imcInput.value = imc.toFixed(2); 
}
function validacao(){
const peso =(document.getElementById("peso").value);
const altura = (document.getElementById("altura").value);
const resultado = document.getElementById("resultado");
if(peso===""&& altura===""){
    resultado.textContent="Preencha os campos de peso e altura";
}

}
calcular.addEventListener("click", calcularIMC);
calcular.addEventListener("click", validacao);
