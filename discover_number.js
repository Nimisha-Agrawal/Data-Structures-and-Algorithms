// Time Complexity => O(Max(nlogn, qlogn))
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number).sort((a, b) => a - b)

    let to_find = []
    for(let i = 2; i < input_arr.length; i++){
        to_find.push(Number(input_arr[i]))
    }

    for(let i = 0; i < to_find.length; i++){
        let to_find_no = to_find[i]
        let low = 0
        let high = array.length -1 
        let flag = false
        while(low <= high){
            let mid = Math.floor(low + ((high - low)/ 2))
            if(array[mid] == to_find_no){
                flag = true
                console.log("YES")
                break
            }
            else if(to_find_no < array[mid]){
                high = mid - 1
            }
            else{
                low = mid + 1
            }
        }
        if(!flag){
            console.log("NO")
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

runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`)




