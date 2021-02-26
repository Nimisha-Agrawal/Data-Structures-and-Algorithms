function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ")
    var num_array = array.map(function(e)
    {
        return Number(e)
    })
    var odd_sum = 0
    var even_sum = 0

    for( var i = 0 ; i < num_array.length; i++)
    {
        if(num_array[i]%2 != 0)
        {
            odd_sum += num_array[i]
        }
        else
        {
            even_sum += num_array[i]
        }
    }
    if(odd_sum > even_sum)
    {
        console.log("Odd")
    }
    else
    {
        console.log("Even")
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






