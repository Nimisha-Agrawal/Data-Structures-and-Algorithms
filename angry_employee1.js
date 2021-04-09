// Time Complexity => O(2^n)
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i++){
        let [N, C] = input_arr[i].trim().split(" ").map(Number)
        let array = []
        // console.log(i + N)
        for(let j = i+1; j <= i + N; j++){
            array.push(Number(input_arr[j]))
        } 
        array.sort((a,b) => a - b)
        // console.log(array)

        let all_possible_positions = combinations()(array, 0, [], C)
        console.log(all_possible_positions)
        
        i = i + N
    }
        
    function combinations(){
        let max_low_diff = -Infinity
        return function subsets_C(array, start_index, sub_array, C){
            if(start_index == array.length){
                if(sub_array.length == C){
                    let low_diff = Infinity
                    for(let k = 0; k < [...sub_array].length - 1; k++){
                        let diff = [...sub_array][k + 1] - [...sub_array][k]
                        if(low_diff > diff){
                            low_diff = diff
                        }
                    }
                    if(max_low_diff < low_diff){
                        max_low_diff = low_diff
                    }
                }
            } 
            else{
                sub_array.push(array[start_index])
                subsets_C(array, start_index+1, sub_array, C)
                sub_array.pop()
                subsets_C(array, start_index +1, sub_array, C)
                return max_low_diff
            }
        }
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
1
2
8
4
9`)