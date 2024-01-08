//continue in for loop
//predict output:
for(i=1;i<5;i++)
{
    if(i==3)
    {
        continue;
    }
    console.log("Please have food")
}

/*
i=1, 1<5, ->Please have food
i=2, 2<5, ->Please have food
i=3, if(i==3) continue;->skip
i=4, 4<5, ->Please have food
i=5, 5<5, ->condition false...loop ends

Output:
Please have food
Please have food
Please have food

*/ 