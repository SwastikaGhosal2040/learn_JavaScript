//Predict the output:
function sum(){
    console.log(arguments)
}

sum(5,6)
sum(5,6,7,8)

/**
 * Output:
 * [Arguments] { '0': 5, '1': 6 }
 * [Arguments] { '0': 5, '1': 6, '2': 7, '3': 8 }   
 */