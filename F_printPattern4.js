/*
Print the following pattern:
* * * * * 
* * * * 
* * * 
* * 
* 


*/


for(row=5;row>=1;row-=1)
{
  for(col=1;col<=row;col++){
  process.stdout.write("* ")
  }
  console.log()
}