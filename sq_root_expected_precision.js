// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    input = Number(input)

    let low = 0
    let high = input
    let sq_root;
    let precision = 1/(10 ** 9)
    while(high - low >= precision){
        let mid = low + ((high - low) / 2)
        sq_root = mid
        if(mid ** 2 > input){
            high = mid
        }
        else{
            low = mid
        }
    }

    console.log(sq_root.toFixed(4))
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`25`)




