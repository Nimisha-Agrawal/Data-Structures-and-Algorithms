function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var no_rotation = Number(input_arr[1])
    var string = input_arr[0].split("")
    var lower_case = "abcdefghijklmnopqrstuvwxyz"
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = "01234567890"
    for(var i = 0; i < string.length; i++)
    {
        for(var j = 0; j < lower_case.length; j++)
        {
            if(string[i] == lower_case[j])
            {
                if(j+no_rotation >= 26)
                {
                    string[i] = lower_case[(j+no_rotation)%26]
                }
                else
                {
                    string[i] = lower_case[j+no_rotation]
                }
                break;
            }
            else if(string[i] == upper_case[j])
            {
                if(j+no_rotation >= 26)
                {
                    string[i] = upper_case[(j+no_rotation)%26]
                }
                else
                {
                    string[i] = upper_case[j+no_rotation]
                }
                break;
            }
        }
        for(var k = 0; k < numbers.length; k++)
        {
            if(string[i] == Number(numbers[k]))
            {
                if(k+no_rotation > 9)
                {
                    string[i] = numbers[(Number(numbers[k]) + no_rotation)%10]
                }
                else
                {
                    string[i] = numbers[Number(numbers[k]) + no_rotation]
                }
                break;
            }
        }
    }
    string = string.join("")
    console.log(string)
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






