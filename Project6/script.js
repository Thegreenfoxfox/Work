"use strict"

let num =20;
function showFirstMessage(text) {
   console.log(text); 
   

}
showFirstMessage("Hello World!");
console.log(num);

function calc(a,b) {
   return (a+b);//здесь функция заканчивается, следующий код будет мертвым и уже никогда не выполнится.

   
}
console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

function ret(){
   let num= 50;


   //
   return num;
}

const anotherNum =ret();
console