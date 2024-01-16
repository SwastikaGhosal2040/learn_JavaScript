//predict the output:
num = 10
if(num % 2 == 0)
{
    console.log("Number is divisible by 2")
}
else if (num % 3 == 0)
{
    console.log("Number is divisible by 3") 
}
else if (num % 5 == 0)
{
    console.log("Number is divisible by 5")
}
else
{
    console.log("Number can't be divided by 2 or 3 or 5")
}

/**
 * As the if condition is true, the whole else if sections are ignored
 * Output:
 * Number is divisible by 2
 */