function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var check_in = input_arr[1].split(" ") 
    var hand = input_arr[2].split(" ")
    for(var i = 0 ; i < check_in.length; i++)
    {
        check_in[i] = Number(check_in[i])
        hand[i] = Number(hand[i])
    }
    for (var j = 0; j < check_in.length ; j++)
    {
        if( check_in[j] <= 15 && hand[j] <= 7)
        {
            console.log("Boarding")
        }
        else
        {
            console.log("Stop")
        }
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