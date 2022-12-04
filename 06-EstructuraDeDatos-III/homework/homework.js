"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El arbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/


function BinarySearchTree(value) {
  this.value = value
  this.right = null
  this.left = null
}
BinarySearchTree.prototype.insert = function(value){
  // let arbol = new BinarySearchTree(), //La variable arbol pasa a ser un objeto nuevo de la clase
  if(value > this.value){ //Si el valor recibido por parametro es mayor al valor de la clase
    if(this.right == null){ //Y si this.right es nulo
    this.right = new BinarySearchTree(value) //This.right pasara a tener el valor definido por parametro
    }
    else{ 
    this.right.insert(value) //Sino se cumple el segundo if se recursa la funcion
    }
  }
  else if(value < this.value){ //Si el valor recibido por parametro es menor al del arbol
    if(this.left == null){  //Y this.left es nulo
    this.left = new BinarySearchTree(value)  //This.left toma el valor recibido por parametro
    }else{  
      this.left.insert(value) //Sino se recursa la funcion
    }
  }
}
BinarySearchTree.prototype.contains = function(key){
  if(this.value === key){//Si el parametro que buscamos se encuentra en el primer nodo,lo retornamos
    return true
  }
  if(this.left){ //Si this.left no esta vacio
    if(this.left.contains(key)){return true //Le preguntamos si lo contiene aplicando recursividad, si lo contiene retorna true, sino se ejecuta hasta que this.left sea igual a nulo y ya no entra mas al if
  }
}
  if(this.right){ //Si this.right no esta vacio
    if(this.right.contains(key)){return true //Hacemos lo mismo que con left
    }
  }
  return false //Sino se cumplen ninguno de los if, retorna false
}
   
BinarySearchTree.prototype.size = function(){
  let contador = 1 //Inicializo un contador
  if(this.left) contador += this.left.size() //Si hay un nodo a la izquierda el contador se suma por cada nodo q haya en su izq
  if(this.right) contador += this.right.size() //Si hay un nodo a la derecha el contador ""   ""    ""
  return contador
}
BinarySearchTree.prototype.depthFirstForEach = function(cb,order = "in-order"){
  switch(order){
    case "in-order":{
      if(this.left) this.left.depthFirstForEach(cb,order);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb,order);
      break;
    }
    case "pre-order":{
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb,order);
      if(this.right) this.right.depthFirstForEach(cb,order);
      break;
    }
    case "post-order":{
      if(this.left) this.left.depthFirstForEach(cb,order);
      if(this.right) this.right.depthFirstForEach(cb,order);
      cb(this.value);
      break;
    }
    }
  }

BinarySearchTree.prototype.breadthFirstForEach = function(){}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
