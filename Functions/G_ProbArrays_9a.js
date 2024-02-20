//Predict the output:
/**
 * How to iterate a loop
 * 
 * for loop
 */

arr = [1,2,3,4,5,6]

console.log(arr)

delete arr[2]

console.log(arr)

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

/**
 * Output:
 * [ 1, 2, 3, 4, 5, 6 ]
 * [ 1, 2, <1 empty item>, 4, 5, 6 ]
 * 1
 * 2
 * undefined
 * 4
 * 5
 * 6
 */