function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_days = Number(input_arr[0])
    input_arr.shift()
    var max_C = 0
    var enitre_streak = ""
    
    for(var i = 0; i < no_days; i++)
    {
        var day_streak = input_arr[i]
        enitre_streak += input_arr[i]
        checkCodingStraek(day_streak)
    }
    var dayMax_C = max_C 
    checkCodingStraek(enitre_streak)
    var weekMax_C = max_C
    console.log(dayMax_C + " " + weekMax_C)

    function checkCodingStraek(param){
        for(var j = 0; j < param.length; j++)
        {
            if(param[j] == "C")
            {
                var C_count = 0
                for(var k = j; k < param.length; k++)
                {
                    if(param[j] == param[k])
                    {
                        C_count++
                    }
                    else
                    {
                        break
                    }
                }
                if(C_count > max_C)
                {
                    max_C = C_count
                }
                j = k-1
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

runProgram(`4
SSSSEEEECCCCEECCCC
CCCCCSSSSEEECCCCSS
SSSSSEEESSCCCCCCCS
EESSSSCCCCCCSSEEEE
`)




