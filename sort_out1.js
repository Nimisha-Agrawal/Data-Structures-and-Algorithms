function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var array = input_arr[0].trim().split(" ").map(Number)
    var array_index  = array.map(e => {
        return array.indexOf(e)
    })

    for(var i = 0; i < array.length-1; i++)
    {
        for(var j = 0; j < array.length-1-i; j++)
        {
            if(array[j] > array[j+1] )
            {
                var swap = array[j]
                array[j] = array[j+1]
                array[j+1] = swap

                var swap1 = array_index[j]
                array_index[j] = array_index[j+1]
                array_index[j+1] = swap1
            }
        }   
    }
    var index_string = array_index.join(" ")
    console.log(index_string.trim())
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






