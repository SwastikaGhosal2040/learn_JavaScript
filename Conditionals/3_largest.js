a = 10
b = 15
c = 12

//I need to find the greatest of all the numbers

if(a >= b)
{
    if(a >= c)
    {
        console.log(a," is the largest no. among ",a ,b ,c)
    }
    else
    {
        console.log(c," is the largest no. among ",a ,b ,c)
    }
}
else
{
    if(b > c)
    {
        console.log(b," is the largest no. among ",a ,b ,c)
    }
    else
    {
        console.log(c," is the largest no. among ",a ,b ,c)
    }
}