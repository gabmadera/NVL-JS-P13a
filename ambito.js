var num = Math.floor(Math.random() * 100 + 1)
var x = 2
function test_prime(n)
{

  if (n===1)
  {
    return "Primo";
  }
  else if(n === 2)
  {
    return "Primo";
  }else
  {
    for(x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return "No Primo";
      }
    }
    return "Primo";
  }
}
document.write(test_prime(num));
alert(num);
