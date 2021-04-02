// Time Complexity => O(n^2)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)
    array = sort(array)

    let sum = 0
    array.forEach((item, i )=> {
        sum += item * i
    })
    console.log(sum)

    function sort(array){
        for(let i = 0; i < array.length; i++){
            for(let j = i+1; j < array.length; j++){
                if(array[i] > array[j]){
                    [array[i], array[j]] = [array[j], array[i]]
                }
            }
        }
        return array
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

runProgram(`4
2 5 1 6`)




