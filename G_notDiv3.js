//Print no.s from 1 to 10 which are not divisible by 3
//using continue statement
for(i=1; i<=10; i++)
{
  if(i % 3 == 0)
  {
    continue;
  }
  console.log(i)
}

/**
 * Output:
 * 1
   2
   4
   5
   7
   8
   10
 */