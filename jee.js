function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var first = input_arr[0].split(" ")
    var second = input_arr[1].split(" ")
    var first_tot = 0
    var second_tot = 0
    for(var i =0 ; i < first.length ; i++)
    {
        first[i] = Number(first[i])
        first_tot += first[i]
        second[i] = Number(second[i])
        second_tot += second[i]
    }
    if(first_tot > second_tot)
    {
        console.log("First")
    }
    else if (second_tot > first_tot)
    {
        console.log("Second")
    }
    else
    {
        if(first[2] > second[2])
        {
            console.log("First")
        }
        else if(second[2] > first[2])
        {
            console.log("Second")
        }
        else
        {
            if(first[0] > second[0])
            {
                console.log("First")
            }
            else if(second[0] > first[0])
            {
                console.log("Second")
            }
            else
            {
                console.log("Second")
            }
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


