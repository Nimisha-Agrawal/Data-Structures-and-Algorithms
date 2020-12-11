function runProgram(input){
   var input_arr = input.trim().split(/[\r\n]+/)
   var matches = Number(input_arr[0])
   var bat1 = input_arr[1].split(" ")
   var bat2 = input_arr[2].split(" ")
   var bat1_tot = 0
   var bat2_tot = 0
   for(var i = 0; i < matches ; i++)
   {
       bat1[i] = Number(bat1[i])
       bat2[i] = Number(bat2[i])
   }
   for( var j= 0; j < matches ; j++)
   {
       bat1_tot += bat1[j]
       bat2_tot += bat2[j]
   }
   var bat1_avg = bat1_tot/matches
   var bat2_avg = bat2_tot/matches
   if(bat1_avg >= bat2_avg && bat1_avg%2 ==0)
   {
       console.log(Math.ceil(bat1_avg))
   }
   else if(bat2_avg > bat1_avg && bat2_avg%2 ==0)
   {
       console.log(Math.ceil(bat2_avg))
   }
   else
   {
    console.log(-1)
   }

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});