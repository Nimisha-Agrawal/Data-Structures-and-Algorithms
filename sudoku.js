function runProgram(input){
    var input_arr = input.trim().split("\n")
    var matrix = input_arr.map(item => item.trim().split(" ").map(Number))

    function possible_value_generator(matrix, i, j){
        var all_values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

         //horizontal line check
        var horizontal_line = matrix[i]
        var horizontal_possible_values = all_values.filter(item => !horizontal_line.includes(item)) 

        //vertical line check
        var vertical_line = []
        for(var k = 0; k < matrix.length; k++){
            vertical_line.push(matrix[k][j])
        }
        var vertical_possible_values = all_values.filter(item => !vertical_line.includes(item))

        //3x3 matrix check
        var matrix_line = []
        if(i >=0 && i <=2 ){
            for(var k = 0; k <= 2; k++){
                if(j >= 0 && j <=2){
                    for(var l = 0; l <= 2; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 3 && j <=5){
                    for(var l = 3; l <= 5; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 6 && j <=8){
                    for(var l = 6; l <= 8; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
            }   
        }
        else if(i >= 3 && i <= 5){
            for(var k = 3; k <= 5; k++){
                if(j >= 0 && j <=2){
                    for(var l = 0; l <= 2; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 3 && j <=5){
                    for(var l = 3; l <= 5; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 6 && j <=8){
                    for(var l = 6; l <= 8; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
            }
        }
        else if(i >=6 && i <=8){
            for(var k = 6; k <= 8; k++){
                if(j >= 0 && j <=2){
                    for(var l = 0; l <= 2; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 3 && j <=5){
                    for(var l = 3; l <= 5; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
                else if(j >= 6 && j <=8){
                    for(var l = 6; l <= 8; l++){
                        matrix_line.push(matrix[k][l])
                    }
                }
            }
        }
        var matrix_possible_values = all_values.filter(item => !matrix_line.includes(item))

        // position check
        var position_possible_values = all_values.filter(item => {
            return (horizontal_possible_values.includes(item) && vertical_possible_values.includes(item) && matrix_possible_values.includes(item))
        })

        // console.log(position_possible_values)
        return position_possible_values
    }

    function sudoku_solver(matrix, row, column){
        var possible_values = possible_value_generator(matrix, row, column)
        if(possible_values.length == 0){
            return false
        }
        
    }

    sudoku_solver(matrix, 0, 0)

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

runProgram(`0 4 0 0 0 0 1 7 9 
0 0 2 0 0 8 0 5 4 
0 0 6 0 0 5 0 0 8 
0 8 0 0 7 0 9 1 0 
0 5 0 0 9 0 0 3 0 
0 1 9 0 6 0 0 4 0 
3 0 0 4 0 0 7 0 0 
5 7 0 1 0 0 2 0 0 
9 2 8 0 0 0 0 6 0`)




