function countPositivesSumNegatives(input) {
  if(input === [] || input === null || input.length === 0){
    return []
  };
 // if(input === 0){
 //   return []
 // };
    let count = 0
   let sum = 0
   for(let i = 0; i <input.length;i++){
      if( input[i] > 0){
        count++
      };
     if(input[i]< 0){
       sum = sum+input[i]
     }
 
   };
     return [count,sum];
 }