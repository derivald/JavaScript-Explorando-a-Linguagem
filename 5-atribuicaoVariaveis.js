
console.log("Trabalhando com atribuição de variáveis");



//let nome = "Ricardo"; //let permite mudar, variar 
const primeiroNome = "Ricardo"; //let permite mudar, variar 
const sobrenome = "Bugan";//const não permite mudar, variar

console.log(primeiroNome + sobrenome);
console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);

console.log(`meu nome é `,primeiroNome, sobrenome);
console.log("meu nome é ",primeiroNome, sobrenome);



console.log(`meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;
console.log(`meu nome é ${primeiroNome}`);


console.log(nomeCompleto);
//
let contador = 0;
contador = contador++; //contador = contador + 1

let idade; // declarando variavel
idade = 26; // atribuindo valor
idade = idade + 1;
console.log(idade);