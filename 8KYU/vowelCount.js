function getCount(str) {
  let vowelCount = 0
 console.log(str)
 let vowels = [ "a", "e", "i", "o", "u"]
  let lowercaseArray = str.toLowerCase().split('')
   console.log(lowercaseArray)
   for(let i = 0; i < lowercaseArray.length; i++){
     if(vowels.includes(lowercaseArray[i])){
        vowelCount++
        }
   }
      return vowelCount++
 }
 
 
 
 
 /*PARAMTERS (STR)
 RETURN # COUNT OF VOWELS IN STRING
 EXAMPLES 'STRING' // VOWEL CUNT = 1
 PSUEDO CODE
 apply lowercase method onto the string
 spllit string into seperate letters
 loop through array to find vowels
 do a check if  the vowels array contains the element from the string array
 store a count variable at 0 
 count would go up everyime a vowel was found
 return count */