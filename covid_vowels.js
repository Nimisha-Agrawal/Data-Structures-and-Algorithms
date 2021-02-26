function runProgram(input){
    input = input.trim()
    var count = 0
    for(var i = 0; i < input.length; i++)
    {
        var sub_string = ""
        for(var j = i; j < input.length; j++)
        {
            sub_string += input[j]
            if(sub_string.length >= 4)
            {
                var obj = {
                    a : 0,
                    i : 0,
                    o : 0,
                    u : 0
                }
                for(var k = 0; k < sub_string.length; k++)
                {
                    if(obj[sub_string[k]] == undefined)
                    {
                        continue
                    }
                    else
                    {
                        obj[sub_string[k]] += 1
                    }
                }
                if(obj.a > 0 && obj.i > 0 && obj.o > 0 && obj.u > 0)
                {
                    count++
                }
            }
        }
    }
    console.log(count)
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






