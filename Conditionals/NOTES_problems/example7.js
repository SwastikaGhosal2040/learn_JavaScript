//predict the output:
var num = 20
//condition 03: Zero is neither an odd number nor an even number
if(num == 0)
{
    console.log("Zero is neither an odd number nor an even number");
}
//condition 01: Any number that is completely divisible [remainder must be 0 ] by 2 then it is an even number.
else if(num % 2 == 0)
{
    console.log("The number given is an even number");
}
//condition 02: Any number that is not completely divisible [remainder must be 0] by 2 then it is an odd number.
else
{
    console.log("The number given is an odd number");
}