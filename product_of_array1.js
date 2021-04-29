// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i=i+2){
        let array = input_arr[i+1].trim().split(" ").map(Number)

        let product = 1
        for(j in array){
            product *= array[j]
        }

        let string = ""
        for(j in array){
            string += `${product / array[j]} `
        }
        console.log(string.trim())
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
5
1 2 3 4 5
3
3 2 7`)



