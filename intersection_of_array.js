function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array1 = input_arr[1].split(" ").map(function(e){ return Number(e)})
    var array2 = input_arr[2].split(" ").map(function(e){ return Number(e)})
    var common_no = array1.forEach(
        function(e)
        {
            array2.forEach(
                function(f)
                {
                    if(e == f)
                    {
                        console.log(e)
                    }
                }
            )
        }
    ) 
    common_no  
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






