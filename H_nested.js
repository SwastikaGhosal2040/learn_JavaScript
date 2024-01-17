//Predict output:
for(i=1;i<=3;i++)
{
    console.log("i= "+ i)
    for(j=1;j<3;j++)
    {
        console.log("Inside j, value of j = "+ j)
        break
    }
}

/**
 * Output:
 * i= 1
   Inside j, value of j = 1
   i= 2
   Inside j, value of j = 1
   i= 3
   Inside j, value of j = 1
 */