// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let k = 2; k < input_arr.length; k = k + 2){
        let banana = input_arr[k].trim().split(" ").map(Number)

        let i = 0
        let j = banana.length - 1 
        let rick = 0
        let rick_time = 0
        let richard = 0
        let richard_time = 0
        let rick_flag = false
        let richard_flag = false
        while(richard + rick < banana.length){
            // console.log(rick_time , richard_time)
            if(rick_time == 0 || rick_flag){
                rick_time += banana[i] * (1/2)
                // console.log(rick_time , "rick_time")
            }
            if(richard_time == 0 || richard_flag){
                // console.log(j , prev_j)
                richard_time += banana[j]
                // console.log(richard_time , "richard_time")
            }
            if(rick_time <= richard_time){
                rick++
                rick_flag = true
                richard_flag = false
                i++
            }
            else{
                richard++
                // console.log(j)
                richard_flag = true
                rick_flag = false
                j--
            }
        }

        console.log(`${rick} ${richard}`)
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

runProgram(`1
2
1 2`)




