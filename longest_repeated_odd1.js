function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ").map(Number)
    var counter_array = []
    var flag = false
    for(var i = 0; i < array.length; i++)
    {   
        if(array[i]%2 != 0)
        {
            flag = true
            var count = 1
            for(var j = i+1; j < array.length; j++)
            {
                if(array[i] == array[j])
                {
                    count++
                }
                else
                {
                    break
                }
            }
            counter_array.push(count)
            i = j-1
        }
    }
    if(!flag)
    {
        console.log(0)
    }
    else
    {
        var high = counter_array[0]
        for(var i = 1; i < counter_array.length; i++)
        {
            if(high < counter_array[i])
            {
                high = counter_array[i]
            }
        }
        console.log(high)
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






