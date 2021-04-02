// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let student_coord = input_arr[1].trim().split(" ").map(Number)
    let room_coord = input_arr[2].trim().split(" ").map(Number)
    student_coord = student_coord.sort((a,b) => a - b)
    room_coord = room_coord.sort((a,b) => a - b)

    let minimal_time = -Infinity
    for(let i = 0; i < student_coord.length; i++){
        let time = Math.abs(student_coord[i] - room_coord[i])
        if(minimal_time < time){
            minimal_time = time
        }
    }

    console.log(minimal_time)
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
-2 4
2 0 `)




