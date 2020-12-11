function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var elements = input_arr[1].split(" ")
    var no = Number(input_arr[0])
    var odd_sum = 0
    var even_sum = 0
    for(var i = 0; i < no; i++)
    {
        elements[i] = Number(elements[i])
    }
    for(var j =0 ; j < no; j++)
    {
        if(elements[j]%2 == 0)
        {
            even_sum += elements[j]
        }
        else
        {
            odd_sum += elements[j]
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

