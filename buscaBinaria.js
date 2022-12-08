/*

Faça um programa para encontrar um valor em um vetor
Use algoritmo:
- sequencial
- busca binária
Faça testes aumentando o tamanho do vetor e verifique o tempo de execução

*/

var vetor = []
var busca = 2;
var achou;

//percorrer o vetor
var x, y;

x = 0;
y = 0;

for (i = 0; i <= 900000; i++ ){
  if(i % 2 == 0){
    vetor[y] = i;
    y = y + 1;
  }
}
console.time('#while');

while(vetor[x] != busca){
  achou = vetor[x];
  x = x + 1;
}

console.timeEnd('#while');