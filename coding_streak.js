function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var test_cases = Number(input_arr[0])
    input_arr.shift()
    var continuous_string = ""
    var daily_streak = []
    
    for(var i = 0; i < input_arr.length; i++)
    {
        daily_streak .push(check_continuity(input_arr[i]))
        continuous_string += input_arr[i]
    }
    var daily_high = daily_streak[0]
    for(var i = 0; i < daily_streak.length; i++)
    {
        if(daily_high < daily_streak[i])
        {
            daily_high = daily_streak[i]
        }
    }
    console.log(daily_high + " " + check_continuity(continuous_string))

    function check_continuity(string)
    {
        var count_array = []
        for(var i = 0; i < string.length; i++)
        {
            if(string[i] == "C")
            {
                var count = 1
                for(var j = i+1; j < string.length; j++)
                {
                    if(string[i] == string[j])
                    {
                        count++
                        continue
                    }
                    else
                    {
                        break
                    }
                }
                count_array.push(count)
                i = j
            }
        }

        var high = count_array[0]
        for(var i = 0; i < count_array.length; i++)
        {
            if(high < count_array[i])
            {
                high = count_array[i]
            }
        }

        return high
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






