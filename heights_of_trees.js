// Time Complexity => O(n^2)
// Space Complexity => O(n)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)

    let stack = new Array(array.length).fill(1)
    let high = -Infinity
    for(let i = 1; i < array.length; i++){
        let count;
        for(let j = 0; j < i; j++){
            count = 1
            if(array[i] > array[j]){
                count += stack[j]
                if(stack[i] < count){
                    stack[i] = count
                }
            }
        }
        if(high < stack[i]){
            high = stack[i]
        }
    }
    console.log(high)
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

runProgram(`10
15 15 3 10 12 12 13 5 5 7`)
runProgram(`9
10 22 9 33 21 50 41 60 80`)
runProgram(`100
35 92 59 15 40 14 71 9 71 110 68 149 114 27 51 110 134 15 96 145 20 27 43 94 111 125 34 144 11 29 63 91 80 89 14 30 148 19 3 141 13 104 142 108 87 64 68 115 95 47 47 131 122 82 24 127 59 97 48 114 67 123 112 145 1 2 73 110 62 66 104 28 8 64 40 98 136 138 119 75 116 1 53 82 60 90 81 147 107 1 96 18 64 50 58 3 147 147 137 50`)



