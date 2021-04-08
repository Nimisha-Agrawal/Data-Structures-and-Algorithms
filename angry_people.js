// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number).sort((a,b) => a - b)

    let side1 = []
    let side2 = []
    for(let i = 0; i < array.length; i++){
        if(i == 0 || i == array.length - 1){
            side1.push(array[i])
            side2.push(array[i])
        }
        else{
            if(i%2 == 0){
                side1.push(array[i])
            }
            else{
                side2.push(array[i])
            }
        }
    }
    // console.log(side1)
    // console.log(side2)

    let max_danger = -Infinity 
    let danger_value;
    for(let i = 0; i < side1.length - 1; i++){
        danger_value = Math.abs(side1[i] - side1[i+1])
        if(danger_value > max_danger){
            max_danger = danger_value
        }
        danger_value = Math.abs(side2[i] - side2[i+1])
        if(danger_value > max_danger){
            max_danger = danger_value
        }
    }

    console.log(max_danger)
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

runProgram(`4
10 20 5 17 19`)




