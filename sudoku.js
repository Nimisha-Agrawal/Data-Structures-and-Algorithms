function runProgram(input){
    let input_arr = input.trim().split("\n")
    let matrix = input_arr.map(item => item.trim().split(" ").map(Number))
    let to_fill = []

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] == 0){
                to_fill.push([i, j])
            }
        }
    }

    function possible_value_generator(matrix, i, j){
        let all_values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

         //horizontal line check
        let horizontal_line = matrix[i]
        let horizontal_possible_values = all_values.filter(item => !horizontal_line.includes(item)) 

        //vertical line check
        let vertical_line = []
        for(let k = 0; k < matrix.length; k++){
            vertical_line.push(matrix[k][j])
        }
        let vertical_possible_values = all_values.filter(item => !vertical_line.includes(item))

        //3x3 matrix check
        let matrix_line = []
        if(i >=0 && i <=2 ){
            for(let k = 0; k <= 2; k++){
                if(j >= 0 && j <=2){
                    for(let l = 0; l <= 2; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 3 && j <=5){
                    for(let l = 3; l <= 5; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 6 && j <=8){
                    for(let l = 6; l <= 8; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
            }   
        }
        else if(i >= 3 && i <= 5){
            for(let k = 3; k <= 5; k++){
                if(j >= 0 && j <=2){
                    for(let l = 0; l <= 2; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 3 && j <=5){
                    for(let l = 3; l <= 5; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 6 && j <=8){
                    for(let l = 6; l <= 8; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
            }
        }
        else if(i >=6 && i <=8){
            for(let k = 6; k <= 8; k++){
                if(j >= 0 && j <=2){
                    for(let l = 0; l <= 2; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 3 && j <=5){
                    for(let l = 3; l <= 5; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 6 && j <=8){
                    for(let l = 6; l <= 8; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
            }
        }
        let matrix_possible_values = all_values.filter(item => !matrix_line.includes(item))

        // position check
        let position_possible_values = all_values.filter(item => {
            return (horizontal_possible_values.includes(item) && vertical_possible_values.includes(item) && matrix_possible_values.includes(item))
        })

        // console.log(position_possible_values)
        return position_possible_values
    }

    let flag = false
    function sudoku_solver(matrix, to_fill, start){
        // console.log(start, to_fill.length)
        if(to_fill.length == start){
            for(let i = 0; i < matrix.length; i++){
                console.log(matrix[i].join(" ").trim()) 
            }
            flag = true
            return
        }

        let row = to_fill[start][0]
        let column = to_fill[start][1]
        let possible_values = possible_value_generator(matrix, row, column)

        for(let i = 0; i < possible_values.length; i++){
            matrix[row][column] = possible_values[i]
            sudoku_solver(matrix, to_fill, start + 1) 
            matrix[row][column] = 0
        }
    }

    sudoku_solver(matrix, to_fill, 0)
    if(!flag){
        console.log(-1)
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

runProgram(`0 0 5 3 0 0 0 0 0
8 0 0 0 0 0 0 2 0
0 7 0 0 1 0 5 0 0
4 0 0 0 0 5 3 0 0
0 1 0 0 7 0 0 0 6
0 0 3 2 0 0 0 8 0
0 6 0 5 0 0 0 0 9
0 0 4 0 0 0 0 3 0
0 0 0 0 0 9 7 0 0`)