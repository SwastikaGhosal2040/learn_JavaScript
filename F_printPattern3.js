/*
Print the pattern:
* 
* * 
* * * 
* * * * 
* * * * * 

*/


for(row=1;row<=5;row++)
{
  for(col=1;col<=row;col++){
  process.stdout.write("* ")
  }
  console.log()
}