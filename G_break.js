//break in for loop->terminate entire loop
for(i=1;i<5;i++)
{
    if(i==3)
    {
        break;
    }
    console.log("Please have food")
}

/*predict the output:
i=1, 1<5, ->Please have food
i=2, 2<5, ->Please have food
i=3, if(i==3) break;...end of loop.

Output:
Please have food
Please have food
*/