function runProgram(input){
    input = Number(input)
    let line = new Array(input).fill(0)
    let line_combo = []
    for(let i = 0; i < line.length; i++){
        let new_line = [...line]
        new_line[i] = 1
        line_combo.push(new_line)
    }
    let possible_combo = combinations(line_combo)
    possible_combo = possible_combo.filter(item => {
        return validation(item)
    })
    console.log(possible_combo.length)

    function validation(matrix){
        // console.log(matrix)
        for(let i = 0; i < matrix.length; i++){
            let j = matrix[i].indexOf(1)
            // console.log(j , "i = ", i)
            if(!q_coincide(i, j, matrix)){
                continue
            }
            else{
                return false
            }
        }
        return true
    }

    function q_coincide(row, column, board){
        for(let i = 0; i < board.length; i++){
            if(i !== column){
                // row check
                if(board[row][i] == 1){
                    // console.log("row")
                    return true
                }
            }

            if(i !== row){
                // column check
                if(board[i][column] == 1){
                    // console.log("column")
                    return true
                }

            }
        }

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board.length; j++){
                if(i !== row && j !== column){
                    if(i+j == row + column && board[i][j] == 1){
                        // console.log(board)
                        // console.log("diagonal")
                        return true
                    }
                    if(i-j == row - column && board[i][j] == 1){
                        // console.log("diagonal")
                        return true
                    }
                }
            }
        }

        // console.log(board)
        return false
    }

    function combinations(array){
        if(array.length === 0){
            return [[]]
        }
        let first_char = array[0]
        let rest_char = array.slice(1)

        let without_first = combinations(rest_char)
        let all_combinations = []

        without_first.forEach(item => {
            for(let i = 0; i <= item.length; i++){
                let with_first = [...item.slice(0,i), first_char, ...item.slice(i)]
                all_combinations.push(with_first)
            }
        })

        // console.log(all_combinations)
        return all_combinations
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

runProgram(`4`)




