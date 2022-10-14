console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`
    
);
listaDeDestinos.push(`Curitiba`);//adicionar com push empurrar
console.log("Destinos possíveis:");

//console.log(salvador, saoPaulo, rioDeJaneiro);

listaDeDestinos.splice(1, 1)//remover da lista com splice start começa e quantos


console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);//posicao 1 do rio de janeiro

console.log(listaDeDestinos[1], listaDeDestinos[0]);//posicao 1 do rio de janeiro e salvador

