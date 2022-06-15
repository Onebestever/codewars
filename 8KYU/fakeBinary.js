
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBin(x){
  let arrayString =x.split('') //turn into array
  for(let i = 0; i<arrayString.length;i++){ // run a loop through all indexes
    if(arrayString[i] <5){ //if index is less than 5 = to 0
       arrayString[i] = 0
    }else{
       arrayString[i] = 1  // else if index is equal to or more than 5 = to 1
    }
  }
  console.log(arrayString) 
  return arrayString.join('') //turn array back  into string


}

/*
P STRING
R mutatated string replace with 0 for >5 && 1 for <=5
E 5385593107843568' => '01011110001100111');
P
loop through array = x.length
2 if statements
if x[i] =< 5 turn into 1
if x[i] <5 turn into 0
then return newString
*/
