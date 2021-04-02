// Time Complexity => O(k*n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i = i + 2){
        let [_, k] = input_arr[i].trim().split(" ").map(Number)
        let array = input_arr[i+1].trim().split(" ").map(Number)
        let flag = false

        for(let j = 0; j < array.length; j++){
            let low = array[j]
            let low_index = j
            let limit = k > array.length - 1 ? array.length - 1: k
            for(let l = j+1; (l-j) <= limit; l++){
                if(low > array[l]){
                    low = array[l]
                    low_index = l
                }
            }
            if(low_index == j){
                continue
            }
            else{
                for(let m = low_index; m > j ; m--){
                    [array[m], array[m-1]] = [array[m-1], array[m]]
                }
                if((low_index - j) < k){
                  	k = k - (low_index - j)
                	continue
                }
              	else{
                    flag = true
                    console.log(array.join(" ").trim())
                	break
                }
            }
        }
        if(!flag){
            console.log(array.join(" "))
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
41 467
6334 26500 19169 15724 11478 29358 26962 24464 5705 28145 23281 16827 9961 491 2995 11942 4827 5436 32391 14604 3902 153 292 12382 17421 18716 19718 19895 5447 21726 14771 11538 1869 19912 25667 26299 17035 9894 28703 23811 31322`)