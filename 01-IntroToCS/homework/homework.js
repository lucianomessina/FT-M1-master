'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let nuevoArray = []
  let acumulador = 0
   let esArray = num.split("")
   let invertido = esArray.reverse()
   for(var i = 0; i < invertido.length;i++){
    acumulador += invertido[i] * Math.pow(2,[i])
  }
  return acumulador
  }


function DecimalABinario(num) {
  // tu codigo aca
// DECIMAL:10   =  BINARIO:1010
let nuevoNumero = []
do{
 nuevoNumero.push(num % 2)
 num = num / 2 
}
while(num > 1)
   for(var i = 0; i < nuevoNumero.length;i++){
    nuevoNumero[i] = Math.floor(nuevoNumero[i])
    if(nuevoNumero[0] == 0){
      nuevoNumero.unshift('1')
    }
   }
   let otroNumero = nuevoNumero.join("")
 return otroNumero
  }

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}