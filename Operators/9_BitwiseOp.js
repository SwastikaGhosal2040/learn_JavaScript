a = 10
b =  6
/**
 * Bitwise Operator(AND)
 * a = 10 ->1010
 * b =  6 ->0110
 * a & b  ->0010 ->2
 */
console.log(a & b) //2
/**
 * Bitwise Operator(OR)
 * a = 10 ->1010
 * b =  6 ->0110
 * a | b  ->1110 ->14
 */
console.log(a | b) //14
/**
 * Bitwise Operator(XOR)[both same false]
 * a = 10 ->1010
 * b =  6 ->0110
 * a ^ b  ->1100 ->12
 */
console.log(a ^ b) //12
/**
 * Bitwise left shift
 * a = 10 ->  1010
 * a << 2 ->101000 ->40
 */
console.log(a << 2) //40
/**
 * Bitwise right shift
 * a = 10 ->1010
 * a >> 2 ->  10 ->2
 */
console.log(a >> 2) //2

console.log(~a) // -11
//~a = -(a+1)
/**
 * a = 10 
 * ~a = -(10+1) = -11
 *  
 */