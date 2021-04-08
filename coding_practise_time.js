// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, days] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number)
    let total_time = array.reduce((acc, i) => acc + i)
    
    let low = 0
    let high = total_time
    let time;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(possibility_check(mid, days, array)){
            time = mid
            high = mid - 1 
        }
        else{
            low = mid + 1
        }
    }
    console.log(time)

    function possibility_check(time, days, array){
        let count = 0
        for(let i = 0; i < array.length; i++){
            let time_taken = 0
            let flag = false
            while(time_taken + array[i] <= time){
                flag = true
                time_taken += array[i]
                // console.log(time_taken + " " + time)
                i = i + 1
            }
            if(flag){
                i = i - 1
            }
            // console.log(i)
            count++
        }
        if(count <= days){
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

runProgram(`52 17
9542 10181 11764 26836 11414 11803 1374 26005 26268 17266 32353 17841 533 26079 16336 29061 28539 1864 27142 26058 24371 25289 9922 21527 28680 16727 27446 11431 8664 29091 8282 30045 24717 30529 9606 4613 15183 13578 24896 25053 7161 5823 21587 22100 4809 32239 25377 26385 2651 30234 18745 1847`)




