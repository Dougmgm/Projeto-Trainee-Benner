
let nome = prompt('Qual é o seu nome?');
let altura = prompt('Qual é a sua altura?');
let peso =  prompt('Qual é o seu peso?');

const imc = (altura, peso)=>{
    const imcCalculo = parseInt(peso) / (altura**2);
    console.log('Seu nome é...: '+ nome);
    console.log('Sua altura é...: ' + altura);
    console.log('Seu peso é...:' + peso)
    console.log('Logo seu IMC é de...: ' + imcCalculo);

}

imc(altura, peso);


                                        