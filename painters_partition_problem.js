// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i = i + 2){
        let [boards, painters] = input_arr[i].trim().split(" ").map(Number)
        let board_height = input_arr[i+1].trim().split(" ").map(Number).sort((a,b) => a - b)
        let all = board_height.reduce((acc, i) => acc + i)

        let low = 0
        let high = all
        let min_time;
        while(low <= high){
            let mid = Math.floor(low + ((high - low) / 2))
            // console.log(mid)
            if(possibility_check(mid, board_height, painters, all)){
                min_time = mid
                high = mid -1
            }
            else{
                low = mid + 1
            }
        }
        console.log(min_time)
    }

    function possibility_check(time_assum, board_height, painters, all){
        let painter_count = 0
        let total = 0
        for(let i = 0; i < board_height.length; i++){
            let time_taken = 0
            let flag = false
            while(board_height[i] && time_taken + board_height[i] <= time_assum){
                flag = true
                time_taken += board_height[i]
                i++
            }
            if(flag){
                i = i -1
            }
            total += time_taken
            painter_count++
        }
        if(painter_count <= painters && total == all){
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

runProgram(`2
2 2
1 10
4 10
1 8 11 3`)




