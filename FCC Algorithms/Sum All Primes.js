/*Sum All PrimesPassed
A prime number is a whole number greater than 1 with exactly 
two divisors: 1 and itself. For example, 2 is a prime number because 
it is only divisible by 1 and 2. In contrast, 
4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers 
that are less than or equal to num.
*/
function isPrime(n) {

  // if the remainder n divided by all numbers between 2 and n is different to 0 n is prime
  for (let i = 2; i < n; i++) {

    //return false if n is not prime
    if (n % i == 0) {

      return false

    }

  }

  //return true is n is prime
  return n > 1 ? true : false

}


function sumPrimes(n) {

  //Base case (there is not prime numbers before 2)
  if (n < 2) {

    return 0

  }
  //check if n is prime
  // if n is prime reutrn n + callback "sumPrimes(n-1)"
  //if n is not prime just return the callback
  //sustract 1 to n in the callback to evaluate and sum all numbers between n and 2
  return isPrime(n) ? sumPrimes(n - 1) + n : sumPrimes(n - 1)

}
console.log(sumPrimes(10));