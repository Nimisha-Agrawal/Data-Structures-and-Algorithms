function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var array = input_arr[0].split(" ").map(Number)
    var obj = {}

    for(var i = 0; i < array.length; i++)
    {
        if(array[i]%2 != 0)
        {
            var count = 1
            for(var j = i+1; j < Infinity; j++)
            {
                if(array[i] == array[j])
                {
                    count += 1
                }
                else
                {
                    break
                }
            }
            obj[i] = count
            i = j
        }
    }
    var no = 0
    for(var i = 0; i < array.length; i++)
    {
        if(array[i]%2 == 0)
        {
            no += 1
        }
    }
    if(no == array.length)
    {
        console.log(0)
    }
    else
    {
        var max = obj["0"]
        for( i in obj)
        {
            if( max < obj[i])
            {
                max = obj[i]
            }
        }
        console.log(max)
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






