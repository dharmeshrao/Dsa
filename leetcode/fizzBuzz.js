var fizzBuzz = function (n) {
    let res = []
  for (let i = 1; i <= n; i++) {
      if(i % 3 == 0 && i % 5 == 0)res.push('FizzBuzz')
      if(i % 3 == 0 && i % 5 !== 0)res.push('Fizz')
      if(i % 5 == 0 && i % 5 !== 0)res.push('Buzz')
  }
  return res;
};

fizzBuzz(4);
