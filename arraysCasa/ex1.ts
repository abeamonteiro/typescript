/* EXERCÍCIO 1
Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e 
deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.*/
import readlinesync = require("readline-sync");

const listaCores: Array<String> = new Array<String>()
for (let i=0;i<=4;i++){
    listaCores[i]= readlinesync.question("\nDigite uma cor: ")
}
console.log(listaCores.length)

    if (listaCores.length == 5){   
    console.log("\n As cores escolhidas foram: ", listaCores),
    console.log("\n A lista ordenada é: ", listaCores.sort())
    }else{
        console.log("A quantidade de cores digitadas está incorreta!")
    }



