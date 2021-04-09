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
        if(C == N){
            console.log(0)
            continue
        }

        let all_possible_positions = subsets_C(C, array)

        let low = 0
        let high = all_possible_positions.length -1
        let max_diff = 0
        while(low <= high){
            let mid = Math.floor(low + ((high - low) / 2))
            let value = possibility_check(all_possible_positions, mid, C)
            if(value[0]){
                max_diff = value[1]
                low = mid + 1
            }
            else{
                high = mid - 1
            }
        }

        console.log(max_diff)
        
        i = i + N
    }

    function subsets_C(C, array){
        let subsets = [[]]
        let subsets_C_length = []
        for(let i = 0; i < array.length; i++){
            subsets.forEach((item) => {
                subsets.push([...item, array[i]])
                if([...item, array[i]].length == C){
                    subsets_C_length.push([...item, array[i]])
                }
            })
        }
        subsets_C_length.sort((a, b) => {
            let i = 0
            while(i < a.length && a[i] == b[i]){
                i++
            }
            return a[i] - b[i]
        })
        return subsets_C_length
    }

    function possibility_check(all_possible_positions, j, C){
        let low_diff = Infinity
        let count = 1
        for(let k = 0; k < all_possible_positions[j].length - 1; k++){
            let diff = all_possible_positions[j][k + 1] - all_possible_positions[j][k]
            // console.log(diff)
            if(diff > 1){
                count++
                if(low_diff > diff){
                    low_diff = diff
                }
                continue
            }
            else{
                return [false]
            }
        }
        // console.log("count", count, "C", C)
        if(count == C){
            // console.log(all_possible_positions[j])
            return [true, low_diff]
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




