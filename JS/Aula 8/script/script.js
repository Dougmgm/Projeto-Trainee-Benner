//Template String

let str = `Qualquer conteudo`;

let str2 = `Uma outra string ${str}`; //No console estará contido str2 com a str original

console.log(str2);

//Arrays

const frutas = ['Uva', 'Banana', 'Laranja', 'Melancia'];  // 4 elementos, logo o tamanho é 4
console.log(frutas.length) // Mostra o tamanho do Array

console.log(frutas[2]); // chamando a função frutas na posição 2 que corresponde a laranja

//Concatenação com TS no Array

let euGosto = `Eu gosto de ${frutas[3]}` //especificando qual array e qual valor estará inserido
console.log(euGosto) //chamando a função euGosto

//Combinando dados do Array em uma TS


(function(frutas){ //função autoexecutavel com parâmetro P
    
    let frutasPref = `Eu gosto de ${frutas[0]}, adoro ${frutas[3]}, sou indiferente a ${frutas[2]} e odeio ${frutas[1]}`;
    console.log(frutasPref);
    alert(frutasPref)
    document.write(frutasPref)

})(frutas) //usando dados da função