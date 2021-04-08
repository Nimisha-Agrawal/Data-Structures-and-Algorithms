// Time Complexity => O(2^n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number).sort((a,b) => a - b)

    let subset_array = [[]]
    for(let i = 0; i < array.length; i++){
        subset_array.forEach(item => {
            subset_array.push( [...item , array[i]])
        })
    }

    subset_array = subset_array.sort((a, b) => {
        let i = 0
        while(i < a.length && a[i] == b[i]){
            i++
        }
        return a[i] - b[i]
    })
    subset_array = subset_array.map(item => item.join(" "))
    subset_array = [...new Set(subset_array)]

    for(let i = 0; i < subset_array.length; i++){
        console.log(subset_array[i])
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

runProgram(`3
2 2 1 12 21 20`)




