function padIt(str,n){
  while(n > 0 ){
    //while n is greater tha 0
    if(n%2 === 0){
         str=str+'*'
       // made * into a string + * on the left  make sure thats where it shows up 
    }else{str='*'+str}
   
  

     //made into a string on the right  & use + operator on the left
    n--
    // make n-- to make n decrease towards 0 si it will stop & not be infinite
  }
   return str 
}
  