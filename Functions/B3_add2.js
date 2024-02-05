//predict the output:
function sum(a,b){
    console.log("Inside the sum function")
    a + b
}
console.log(sum(5,6))

/**
 * Output:
 * Inside the sum function
 * undefined
 */

/**
 * Explanation:
 * As return statement is not there, the function sum is not returning anything. So undefined is printed.
 */