/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

function squareSum(numbers){
  let bigNumbersSum = 0
  let bigNumbers = numbers.map(number => number*number)
  console.log(bigNumbers)
  for (let i = 0; i< bigNumbers.length;i++){
    bigNumbersSum+= bigNumbers[i]
      console.log(bigNumbersSum)
  }
  return bigNumbersSum
}