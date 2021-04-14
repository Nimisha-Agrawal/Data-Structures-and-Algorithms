// Time Complexity => O(3^(w*h))
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i++){
        let [rows, column] = input_arr[i].trim().split(" ").map(Number)
        let matrix = []
        for(let j = i+1; j <= i + rows; j++){
            matrix.push(input_arr[j].trim().split(" ").map(Number))
        }
        max_coverage(matrix)

        i = i + rows
    }


    function max_coverage(matrix){
        let answer = all_possible_ways()
        function all_possible_ways(){
            let high = -Infinity
            
            for(let i = 0; i < matrix[0].length; i++){
                possible_ways(matrix, 0, i, 0)
            }

            return high

            function possible_ways(matrix, row_no, column_no, sum){
                if(row_no < matrix.length){
                    sum += matrix[row_no][column_no]

                    if(row_no + 1 < matrix.length){
                        possible_ways(matrix, row_no + 1, column_no, sum)
                        if(column_no + 1 < matrix[row_no].length){
                            possible_ways(matrix, row_no + 1, column_no + 1, sum) 
                        }
                        if(column_no - 1 >= 0){
                            possible_ways(matrix, row_no + 1, column_no - 1, sum) 
                        }
                    }
                    else{
                        if(high < sum){
                            high = sum
                        }
                        return 
                    }
                }
            }
        }
        console.log(answer)
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
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`)




