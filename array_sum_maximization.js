// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 2; i < input_arr.length; i = i+2){
        let array = input_arr[i].trim().split(" ").map(Number).sort((a,b) => a - b)
        
        let max = 0
        for(let k = 0; k < array.length; k++){
            let answer = 0
            let index = k
            for(let j = 0; j < array.length ; j++){
                if(j < index){
                    answer += (-1 * array[j]) 
                }
                else{
                    answer += (array.length - j) * array[index]
                    break
                }
            }
            if(max < answer){
                max = answer
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

runProgram(`2
1
1 2 3
5
1 6 7 1 5`)