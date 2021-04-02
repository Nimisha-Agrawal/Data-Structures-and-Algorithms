// Time Complexity => O(n^2)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [K, incoming_time, outgoing_time] = input_arr
    K = Number(K)
    incoming_time = incoming_time.trim().split(" ").map(Number)
    outgoing_time = outgoing_time.trim().split(" ").map(Number)

    let parking_slots = []
    for(let i = 0; i < incoming_time.length; i++){
        // console.log(parking_slots)
        if(i == 0 && parking_slots.length < K){
            parking_slots.push(outgoing_time[i])
        }
        else if(incoming_time[i] >= outgoing_time[i - 1]){
            parking_slots.pop()
            parking_slots.push(outgoing_time[i])
        }
        else{
            for(let j = 0; j < parking_slots.length; j++){
                if(parking_slots[j] <= incoming_time[i]){
                    parking_slots.splice(j, 1)
                }
            }
            if(parking_slots.length < K){
                parking_slots.push(outgoing_time[i])
            }
            else{
                console.log("Not Possible")
                return
            }
        }
    }
    console.log("Possible")
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

runProgram(`1
1 3 5
2 6 8`)




