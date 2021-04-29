// Time Complexity => O(m*n)
// Space Complexity => O(m*n)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i++){
        let [rows, columns] = input_arr[i].trim().split(" ").map(Number)
        
        let matrix1 = []
        for(let j = i + 1; j <= i + rows; j++){
            let row = input_arr[j].trim().split("")
            matrix1.push(row)
        }
        let matrix2 = []
        for(let j = 0; j < matrix1[0].length; j++){
            let row = []
            for(let k = 0; k < matrix1.length; k++){
                row.push(matrix1[k][j])
            }
            matrix2.push(row)
        }
        let count = isa_count(matrix1) + isa_count(matrix2)
        console.log(count)
        i = i + rows
    }

    function isa_count(matrix){
        // console.log(matrix)
        let count = 0
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] == 'i' && j + 2 < matrix[i].length){
                    let string = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2]
                    if(string == "isa"){
                        count++
                    }
                }
            }
        }

        return count
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
3 3
isa
sia
ais
5 3
isa
sia
ais
ssa
aai`)



