function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var no_groups = Number(input_arr[0])
    input_arr.shift()
    var array = input_arr[0].split(" ").map(Number)
    var total_tax = 0
    
    for(var i = 0; i < array.length; i++)
    {
        for(var j = i+1; j < array.length; j++)
        {
            if(array[j] > array[i])
            {
                var swap = array[i]
                array[i] = array[j]
                array[j] = swap
            }
        }
    }

    for(var i = 0; i < no_groups ; i++)
    {
        total_tax += array[i]
    }

    console.log(total_tax)
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






