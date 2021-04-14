// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [no_houses, no_towers] = input_arr[0].trim().split(" ").map(Number)
    let houses = input_arr[1].trim().split(" ").map(Number).sort((a, b) => a - b)

    let low = 0
    let high = houses[houses.length - 1] - houses[0] 
    while(high <= low){
        let mid = Math.floor(low + ((high - low) / 2))
        if(possibility_check(mid)){

        }
        else{

        }
    }

    function possibility_check(range_assum, houses, no_towers, no_houses){
        let for_houses = Math.ceil(no_houses/no_towers)
        for(let i = 0; i < houses.length; i++){
            let count = 0
            let at_position = houses[i] + range_assum
            while(houses[i] && count < for_houses){
                if()
                count++
                i++
            }
            i = i - 1
        }
    }
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

runProgram(``)


