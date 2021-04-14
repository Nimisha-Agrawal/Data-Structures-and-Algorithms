// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i++){
        let [N, C] = input_arr[i].trim().split(" ").map(Number)

        let array = []
        for(let j = i+1; j <= i + N; j++){
            array.push(Number(input_arr[j]))
        } 
        array.sort((a,b) => a - b)
        // console.log(array)

        let low = 1
        let high = array[array.length -1] - array[0]
        let max_diff;
        while(low <= high){
            let mid = Math.floor(low + ((high - low) / 2))
            if(possibility_check(mid, array, C)){
                max_diff = mid
                low = mid + 1
            }
            else{
                high = mid - 1
            }
        }
        console.log(max_diff)
        
        
        i = i + N
    }

    function possibility_check(diff_assumption, array, C){
        let person_position_index = 0
        let person_count = 1
        for(let i = 1; i < array.length; i++){
            // console.log(array[i] - array[person_position_index])
            if(array[i] - array[person_position_index] >= diff_assumption){
                person_count++
                person_position_index = i
            }
        }
        if(person_count >= C){
            return true
        }
        else{
            return false
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
5 5
1
2
8
4
9`)