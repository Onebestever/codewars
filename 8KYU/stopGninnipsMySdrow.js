// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
  let newString = string.split(' ')
//   console.log(newString)
  for(i= 0; i < newString.length; i++){
    if(newString[i].length >= 5){
     newString[i] = newString[i].split('').reverse().join('')
  }
    }
  return newString.join(' ')
}

//   console.log( string.split('').reverse().join(''))


//split with quotations seperates and makes every element
//into a seperate string in an array
//reversed the order
//then joined with quotation marks to 
//turn array of letters into a single string
