function runProgram(input){
    var array = input.trim().split(" ")
    var k_times = Number(array[1])
    var to_concat = array[0]

    if(to_concat.length == 1){
        console.log(1)
    }
    else{
        var j = 0
        var sum = 0
        while(j < to_concat.length){
            sum += Number(to_concat[j])
            j++
        }
        sum = (k_times * sum).toString()

        function sum_till_ones(p){
            var i = 0;
            var super_digit = 0
            while(i < p.length){
                super_digit += Number(p[i])
                i++
            }

            if(p.length == 1){
                console.log(super_digit)
                return 
            }
            else{
                sum_till_ones(super_digit.toString())
            }
        }

        sum_till_ones(sum)
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

runProgram(`148 3`)




