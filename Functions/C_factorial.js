/**
 * 5! = 5 * 4 * 3 * 2 * 1
 * 0! = 1
 * 1! = 1
 */

//WAP to find the factorial of a number

function fact(num){
    if(num==0 || num==1){
        return 1
    }
    result = 1

    for(i=1;i<=num;i++){
        result = result * i
    }
    return result
}

console.log(fact(5))

/**
 * Output:
 * 120
 */