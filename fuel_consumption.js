function runProgram(input){
   var input_arr = input.split(" ")
   var one_km = Number(input_arr[0])
   var distance = Number(input_arr[1])
   var one_lit = 1/one_km
   if( (distance/one_lit) > 50 )
   {
       console.log("Enough")
   }
   else
   {
        console.log("Go On")
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
