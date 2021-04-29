// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [to_sum_up, _] = input_arr[0].trim().split(" ").map(Number)
    let denominations = input_arr[1].trim().split(" ").map(Number)

    let matrix = []
    for(let i = 0; i < denominations.length; i++){
        matrix.push([])
        for(let j = 0; j < to_sum_up + 1; j++){
            if(j == 0){
                matrix[i].push(1)
            }
            else{
                matrix[i].push(0)
            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i == 0 && j % denominations[i] == 0){
                matrix[i][j] = 1
            }
            if(i > 0 && j != 0){
                matrix[i][j] += matrix[i - 1][j]
                if(j - denominations[i] >= 0){
                    matrix[i][j] += matrix[i][j - denominations[i]]
                }
            }
        }
    }
    console.log(matrix[matrix.length - 1][to_sum_up])
    
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

runProgram(`4 3
1 2 3`)



