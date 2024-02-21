//Predict the output:
arr = [3,4,2,1,5]
function sum_arr(arr){
    sum = 0
    for(i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}

console.log(sum_arr([3,4,2,1,5]))

/**
 * Output:
 * 15
 */
