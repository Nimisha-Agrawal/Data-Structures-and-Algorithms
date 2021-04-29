// Time Complexity => O(n*m)
// Space Complexity => O(n*m)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, rupees] = input_arr[0].trim().split(" ").map(Number)
    let friends_budg = input_arr[1].trim().split(" ").map(Number).sort((a,b) => a - b)

    let matrix = []
    for(let i = 0; i < friends_budg.length; i++){
        matrix.push([])
        for(let j = 0; j < rupees + 1; j++){
            if(j == 0){
                matrix[i].push(true)
            }
            else{
                matrix[i].push(false)
            }
        }
    }

    // console.log(matrix)
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i == 0 && j === friends_budg[i]){
                matrix[i][j] = true
            }
            else if(i > 0 && (matrix[i - 1][j] == true || matrix[i - 1][j - friends_budg[i]] == true) ){
                matrix[i][j] = true
            }
        }
    }

    if(matrix[matrix.length - 1][rupees] == true){
        console.log("Party")
    }
    else{
        console.log("No Party")
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

// runProgram(`6 9
// 3 34 4 12 5 2`)
// runProgram(`10 80
// 43 59 25 35 30 51 52 32 36 10`)


