/*

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
 */

function digitize(n) {
  // let newN = Array.from(String(n), Number);
  //   newN.map(num => Number)
    
    
    let stringN = String(n)
    let stringArray = stringN.split('')
    let reverseArray = stringArray.reverse()
    let newArray = reverseArray.map(item => (Number(item)))
          return newArray                        
  console.log(newArray);
  }
  
  // const number = 1234;
  
  // const arr = String(number)
  //   .split('')
  //   .map(str => Number(str));
  
  
  /*
  P number
  R n => array in reversed order
  E 123456 => [6,5,4,3,2,1]
  P
  turn n => array using split()
  use reverse & map on array
  n.map()
  .reverse
  // const map1 = array1.map(x => x * 2);
  8?
  */