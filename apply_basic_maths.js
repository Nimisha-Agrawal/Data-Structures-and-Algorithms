function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ")
    var sum = 0
    for( var i = 0; i < array.length; i++)
    {
        array[i] = Number(array[i])
        sum += array[i]
    }
    if(sum%7 == 0)
    {
        var flag = false
        for(var i = 7; i < Infinity; i=i+7)
        {
            for(var j = 0; j < array.length; j++ )
            {
                if(array[j] == i)
                {
                    console.log(j)
                    flag = true
                    break;
                }
            }
            if(flag)
            {
                break;
            }
        }
    }
    else if(sum%7 != 0)
    {
        var remainder = sum%7
        var flag = false
        for(var i = remainder; i < 100000; i=i+7)
        {
            for(var j = 0; j < array.length; j++)
            {
                if(array[j] == i)
                {
                    console.log(j)
                    flag = true
                    break;
                }
            }
            if(flag)
            {
                break;
            }
        }
        if(!flag)
        {
            console.log(-1)
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






