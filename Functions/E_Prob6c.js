//predict the output:
function return_greet_fn(){
    return function(){
        console.log("Hello Students")
    }
}

console.log(return_greet_fn())

/**
 * Output:
 * [Function (anonymous)]
 */