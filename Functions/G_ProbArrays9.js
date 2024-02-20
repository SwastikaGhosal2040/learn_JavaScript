//Predict the output:
//Deleting the element from the array 

arr = [1,2,3,4,5,6]

console.log(arr)

delete arr[2]

console.log(arr)

/**
 * Output:
 * [ 1, 2, 3, 4, 5, 6 ]
 * [ 1, 2, <1 empty item>, 4, 5, 6 ]
 */