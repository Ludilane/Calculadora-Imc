const calcular = document.getElementById("calcular");
 let imc=0; //imc e inicializado como 0
const resultado = document.getElementById("resultado");//O elemento html resultado é puxado para o js para ser usdo em outras funções

function calcularIMC(){
const peso =parseFloat(document.getElementById("peso").value.replace(",","."));
const altura = parseFloat(document.getElementById("altura").value.replace (",","."));
// const imcInput = document.getElementById("imc");
 
if(!peso || !altura){//se peso ou altura forem inválidos (0, NaN, null, undefined ou string vazia)
    resultado.textContent="Preencha os campos de peso e altura";
    return;
} return  peso/(altura*altura);
 
}
function classificacao(imc){// o valor de imc e passado por parametro para a função classificação,recebendo o valor calculado na função calcularIMC
   
 
if(imc <= 18.5 ){
    return "Seu IMC indica que você está abaixo do peso ideal.";
}else if (imc >=18.6 && imc <=24.9){
    return "Seu imc indica que você está com o peso ideal.";
}else if (imc >=25 && imc <=29.9){
    return "Seu imc indica que você está com sobrepeso.";
}else if ( imc >=30 && imc <=34.9){
    return "Seu imc indica que você está com obesidade grau 1.";
}else if (imc >=35 && imc <=39.9){
    return "Seu imc indica que você está com obesidade grau 2.";

}else if (imc >=40){
    return "Seu imc indica que você está com obesidade grau 3.";
}}
calcular.addEventListener("click",() =>// aqui e disparado o evento de click no botão calcular
    {
        const imc = calcularIMC();
       if (imc!==null){
        resultado.textContent= `Seu IMC é ${imc.toFixed(2)} — ${classificacao(imc)}`;
       }
    });

