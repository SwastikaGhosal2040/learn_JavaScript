//predict the output:
function sum(){
    console.log(arguments)

    let sum = 0

    for(i=0; i<arguments.length; i++){
        sum = sum + arguments[i]
    }
    return sum

}

console.log(sum(5,6));
console.log(sum(5,6,7,8));

/**
 * Output:
 * [Arguments] { '0': 5, '1': 6 }
 * 11
 * [Arguments] { '0': 5, '1': 6, '2': 7, '3': 8 }
 * 26
 */