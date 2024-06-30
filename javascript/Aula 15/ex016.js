let num = [5, 8, 3]
num[3] = 6 // adc o 6 a lista
num.push(7) // adc o  a lista
num.sort() // deixa os elementos em ordem crescente

console.log(`Existe ${num.length} elesmentos nessa array`) /*quanto elementos há na lista


for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}*/


for (let pos in num) { //modo simplificado
    console.log(num[pos])
}
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)
