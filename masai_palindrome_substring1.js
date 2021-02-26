function runProgram(input){
    var high = 0
    if(input.length == 1)
    {
        console.log(1)
    }
    else
    {
        for(var i = 0; i < input.length; i++)
        {
            for(var j = i+1; j < input.length; j++)
            {
                var sub_string = input.slice(i,j+1).trim() 
                if(palindrome_check(sub_string))
                {
                        if(high < sub_string.length)
                        {
                            high = sub_string.length
                        }
                }
            }
        }   
        console.log(high)
    }
    
    function palindrome_check(string)
    {   
        var limit = Math.floor(string.length/2)
        for(var i = 0; i < limit; i++)
        {
            if(string[i] == string[string.length-1-i])
            {
                continue
            }
            else
            {
                return false
            }
        }
        return true
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






