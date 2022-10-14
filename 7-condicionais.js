console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true

console.log("Destinos possíveis:");
console.log(listaDeDestinos);


// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem ");
    listaDeDestinos.splice(2, 1); //remover da lista com splice start começa e quantos
} else {
    console.log("Não é maior de Idade e não posso  vender");
}

console.log("Embarque: \n\n");

if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Voce não pode embarcar");
}

console.log(listaDeDestinos);