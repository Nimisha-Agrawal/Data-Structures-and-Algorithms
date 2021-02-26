function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var array = input_arr.map((e) => e.split(" "))
    for(var i = 0; i < array.length; i++)
    {
        array.sort()
        array[i][1] = Number(array[i][1])
    }
    var obj = {}
    for(var i= 0; i < array.length; i++)
    {
        if(obj[array[i][1]] == undefined)
        {
            obj[array[i][1]] = [array[i][0]]
        }
        else
        {
            obj[array[i][1]].push(array[i][0])
        }
    }
    var sorted_array = []
    for(i in obj)
    {
        sorted_array.push(obj[i])
    }
    sorted_array = sorted_array.reverse()
    var count = 0
    for(var i = 0; i < sorted_array.length; i++)
    {
        count += 1
        for(var j = 0; j < sorted_array[i].length; j++)
        {
            console.log(`${count} ${sorted_array[i][j]}`)
        }
        count += j-1
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






