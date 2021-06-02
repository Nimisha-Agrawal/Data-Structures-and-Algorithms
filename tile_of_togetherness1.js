// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split(" ").map(Number)
    let harry = Math.max(...input_arr)
    let ron = Math.min(...input_arr)

    let tiles_touched = {
        [harry] : 1,
        [ron] : 1
    }

    let meeting_tile = -1
    while(harry > ron){
        harry = next_tile(harry)
        ron = next_tile(ron)
        tiles_touched[harry] = 1 
        if(tiles_touched[ron] != undefined){
            meeting_tile = ron
            break
        }
    }

    console.log(meeting_tile)

    function next_tile(prev){
        let to_add = prev.toString().split("").map(Number).reduce((acc, ele) => acc + ele)
        let next = prev + to_add
        return next
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

runProgram(`32 47`)




