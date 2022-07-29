/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
  x = x.map(nums =>{ // map through the array use Number method on all elements to turn them into a number
    return Number(nums)
  })
    return x.reduce((a,b) =>{ // use reduce method to sum all the numbers then return
       return a+b
    })
  }