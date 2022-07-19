/*
DESCRIPTION:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


*/

function maps(x){
  return x.map(el =>{
    console.log(x)
    return el*2
  })
  }
  
  /*
  function maps(x){
  let doubles = x.map(el =>{
    return el*2   <----------nreturnsnew array with doubled elements
  })
  return doubles <----- rturns array of dobules
  }
  */ 