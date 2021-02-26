function runProgram(input){

    function palindrome(string)
    {
        var mid = Math.floor(string.length/2)
        for(var i = 0, j = (string.length-1); i < mid; i++, j--)
        {
            if(string[i] != string[j])
            {
                return false;
            }
        }
        return true;
    }

    var array = []
    for(var i = 0; i < input.length; i++)
    {
        for(var j = i+1; j < input.length; j++)
        {
            var check = input.slice(i,j+1)
            var flag = palindrome(check)
            if(flag)
            {
                array.push(check)
            }
        }
    }
    if(array.length == 0)
    {
        console.log(1)
    }
    else
    {
        var max = array[0].length
        for(var i = 1 ; i < array.length; i++)
        {
            if(array[i].length > max)
            {
                max = array[i].length
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






