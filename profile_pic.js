function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var original = input_arr[0].split(" ")
    var upload = input_arr[1].split(" ")
    var o_length = Number(original[0])
    var o_width = Number(original[1]) 
    var u_length = Number(upload[0])
    var u_width = Number(upload[1])
    if(u_length > o_length && u_width > o_width)
    {
        console.log("Upload")
    }
    else if( u_length < o_length)
    {
        console.log("Increase Length")
    }
    else if(u_width < o_width)
    {
        console.log("Increase Width")
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



