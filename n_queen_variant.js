function runProgram(input){
    input = Number(input)
    var board = []
    for(var i = 0; i < input; i++){
        board.push([])
        for(var j = 0; j < input; j++){
            board[i][j] = 0
        }
    }

    function q_coincide(row, column){
        for(var i = 0; i < input; i++){
            // row check
            if(board[row][i] == 1){
                return true
            }

            // column check
            if(board[i][column] == 1){
                return true
            }
        }

        for(var i = 0; i < input; i++){
            for(var j = 0; j < input; j++){
                if(i+j == row + column && board[i][j] == 1){
                    // console.log(board)
                    return true
                }
                if(i-j == row - column && board[i][j] == 1){
                    return true
                }
            }
        }

        // console.log(board)
        return false
    }

    function q_possibility(row, column){
        // console.log(row + " " + column)
        if(row == input){
            console.log(board)
            return 
        }
        else{
            for(let j = 0; j < input; j++){
                // console.log(row + " " + j)
                // console.log(q_coincide(1,1))
                if(!q_coincide(row, j)){
                    board[row][j] = 1
                    // console.log(board)
                    q_possibility(row + 1, 0)
                }
            }
        }
    }

    q_possibility(0, 0)
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`4`)




