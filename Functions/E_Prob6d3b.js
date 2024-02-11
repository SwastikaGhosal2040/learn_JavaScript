function return_greet_fn(){
    return function(){
        console.log("Hello Students")
    }
}
func1()()()
function func1(){
    console.log("Hello from outer")
    return function func2(){
        console.log("Hello from inner")
        return function func3(){
            console.log("Hello from inner most")
        }
    }
}
func1()()()

Output:
Hello from outer
Hello from inner
Hello from inner most
Hello from outer
Hello from inner
Hello from inner most
