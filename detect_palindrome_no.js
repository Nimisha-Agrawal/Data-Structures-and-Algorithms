function runProgram(input){
   var mid = Math.floor(input.length/2)
   var flag = true
   for(var i = 0, j = (input.length-1) ; i < mid; i++, j--)
   {
       if(input[i] == input[j])
       {
           continue;
       }
       else
       {
           flag = false
       }
   }
   if(flag)
   {
       console.log("Yes")
   }
   else
   {
       console.log("No")
   }
}
runProgram("11221")






