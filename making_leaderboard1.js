function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var array = input_arr.map(e => {
        return e.split(" ")
    })
    array.sort()
    for(var i = 0; i < array.length; i++)
    {
        array[i][1] = Number(array[i][1])
    }


    for(var i = 0; i < array.length-1; i++)
    {
        for(var j = 0; j < array.length-i-1; j++)
        {
            if(array[j][1] < array[j+1][1])
            {
                var swap = array[j]
                array[j] = array[j+1]
                array[j+1] = swap
            }
        }
    }
    
    for(var i = 0, k = 1;  i < array.length; i++, k++)
    {   
        console.log(k + " " + array[i][0])
        for(var j = i+1; j < array.length; j++)
        {
            if(array[i][1] == array[j][1])
            {
                console.log(k + " " + array[j][0])
            }
            else
            {
                break;
            }
        }
        k = j
        i = j-1
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






