/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
  x = x.map(el =>{
   return  Number(el) // go through all elements and turn thrm into numbers us map method & Number
  })                 //make sure to RETURN
   return x.reduce((previousValue, currentValue) => { // return new x then apply reduce mthod
    return  previousValue * currentValue // prevVal & currentVal paramaters => multiply eachother
   })
    return x // dont need to return again but wanted to
   }
      