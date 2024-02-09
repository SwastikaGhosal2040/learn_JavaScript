//predict the output:
function return_greet_fn(){
    return function(){
        console.log("Hello Students")
    }
}

function func1(){
    console.log("Hello from outer")
    return function(){
        console.log("Hello from inner")
        return function(){
            console.log("Hello from inner most")
        }
    }
}

func1()

/**
 * Outer:
 * Hello from outer
 */