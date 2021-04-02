// Time Complexity => O(highest_element * n)
// Space Complexity => O(highest_element)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i = i +2){
        let [_, K] = input_arr[i].trim().split(" ").map(Number)
        let array = input_arr[i+1].trim().split(" ").map(Number)
        let inc_cost = 3
        let dec_cost = 5

        let max = -Infinity
        for(let j = 0; j < array.length; j++){
            if(array[j] > max){
                max = array[j]
            }
        }

        let min_cost = Infinity
        for(let j = 1; j <= max; j++){
            let cost_array = []
            for(let k = 0; k < array.length; k++){
                let cost_incured = 0
                if(array[k] < j){
                    cost_incured = inc_cost * (j - array[k])
                }
                else{
                    cost_incured = dec_cost * (array[k] - j)
                }
                cost_array.push(cost_incured)
            }
            cost_array.sort((a,b) => a-  b)
            let cost_for_K_numbers = 0
            for(let k = 0; k < K; k++){
                cost_for_K_numbers += cost_array[k]
            }
            if(cost_for_K_numbers < min_cost){
                min_cost = cost_for_K_numbers
            }
        }

        console.log(min_cost)
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
5 3
9 4 9 7 4`)