function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var first_arr = input_arr[0].split(" ")
    var second_arr = input_arr[1].split(" ")
    var num = Number(first_arr[1])
    var count = 0
    for(var i = 0; i < second_arr.length; i++)
    {
        second_arr[i] = Number(second_arr[i])
        var search = num - second_arr[i]
        for(var j = 0 ; j < second_arr.length; j++)
        {
            if(i != j)
            {
                if(search == second_arr[j])
                {
                    count += 1;
                }
            }
        }
    }
    var final_count = count/2
    console.log(final_count)
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





