//predict the output:
function return_greet_fn(){
    return function(){
        console.log("Hello Students")
    }
}

return_greet_fn()

/**
 * Output:
 * Nothing is printed
 */