function runProgram(input){
    var input_arr = input.trim().split(" ")
    var [string, k_times] = input_arr
    var number = 0

    if(string.length == 1){
        console.log(1)
        return
    }

    for(var i = 0; i < string.length; i++){
        number += Number(string[i])
    }
    number = number * Number(k_times)

    function super_digit(number){
        if(number > 9){
            var string = 0
            while(number > 0){
                string += (number%10)
                number = Math.floor(number/10)
            }
            super_digit(string)
        }
        else{
            console.log(number)
            return
        }
    }

    super_digit(number)
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

runProgram(`148 3`)




