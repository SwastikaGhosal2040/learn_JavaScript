/**
 * Logical Operator
 * T or T -> T     T and  T -> T
 * F or T -> T     F and  T -> F
 * T or F -> T     T and  F -> F
 * F or F -> F     F and  F -> F
 * 
 */

console.log(true && false) //false
console.log(false && true) //false
console.log(false && false)//false
console.log(true && true) //true

console.log(false || true) //true
console.log(true || true)  //true