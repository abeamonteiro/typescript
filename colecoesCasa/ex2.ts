/* Escreva um programa para criar uma Collection Set do tipo number. 
 O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos 
 e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
 Mostre na tela todos os elementos da Collection Set.
Na construção do Algoritmo, utilize os seguintes conteúdos:
Entrada e Saída de dados
Collection Set */
import readlinesync = require("readline-sync");

const setNumeros: Set<number> = new Set<number>()
    for (let i=0;i<=9;i++){
     const numero = Number(readlinesync.question("\nDigite um numero que nao tenha sido informado antes: "))
     setNumeros.add(numero)
    }
    
console.log("\n Foram escolhidos ", setNumeros.size, "numeros!")
console.log("\n Os numeros escolhidos foram: ", setNumeros,".")