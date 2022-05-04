function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for(let i = 0; i < arr.length; i++){
    // create a for loop starts at 0 whose ending conditon is the length of the array
   // and its ++ to keep going
    if(arr[i] % 2 === 0){
      // if the array index is divisible by2 and has a remainder of 0
      even.push(arr[i] )
      // use the push method to add that index to a new array 'even'
    }else{
      odd.push(arr[i] )
      //else use the push method to add that index to a new array 'odd'
    }
  }
  
  return [odd,even];
  // end code and return all even / odd indexes of the OG array
  //to the correct array of even or odd
}