function abbrevName(name){
  let nameArray = name.split(' ') // aevery word into array
   let initials =  nameArray[0][0].toUpperCase() + '.'+ nameArray[1][0].toUpperCase()  //1st[0] bracket notation = 1st element  & 1st index of 
  // element aka letter of WORD 
   //use concatenation to add .
   
   return initials
       console.log(initials)

  }
 //ex("Sam Harris"), "S.H");