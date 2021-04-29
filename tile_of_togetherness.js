// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let [N, M] = input.trim().split(" ").map(Number)

    let harry = Math.max(N, M)
    let ron = Math.min(N, M)

    let paths_reached = {
        [harry] : 1,
        [ron] : 1
    }
    let answer = -1
    while(harry > ron){
        harry = next_number(harry)
        paths_reached[harry] = 1
        ron = next_number(ron)
        if(paths_reached[ron] != undefined){
            answer = ron
            break
        }
    }    

    console.log(answer)

    function next_number(number){
        let num_array = number.toString().split("").map(Number)
        let num_total = num_array.reduce((acc, item) => acc + item, 0)

        return number + num_total   
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

runProgram(`30793 83060`)



