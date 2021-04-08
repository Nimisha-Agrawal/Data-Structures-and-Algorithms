// Time Complexity => O(n*k)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, no_taxi] = input_arr[0].trim().split(" ").map(Number)
    
    let user_taxi_time = []
    for(let i = 1; i < input_arr.length; i++){
        let taxi_time = input_arr[i].trim().split(" ").map(Number)
        taxi_time[1] = taxi_time[1] + taxi_time[0]
        taxi_time.push(i-1)
        user_taxi_time.push(taxi_time)
    }
    user_taxi_time.sort((a,b) => a[0] - b[0])
    let answer_array = new Array(user_taxi_time.length).fill(0)

    let taxi_status = new Array(no_taxi).fill(0)
    for(let i = 0; i < user_taxi_time.length; i++){
        for(let j = 0; j < taxi_status.length; j++){
            if(taxi_status[j] !== 0 && user_taxi_time[i][0] >= taxi_status[j]){
                taxi_status[j] = 0
            }
        }
        if(taxi_status.includes(0)){
            let index =  taxi_status.indexOf(0)
            taxi_status[index] = user_taxi_time[i][1]
            answer_array[user_taxi_time[i][2]] = index + 1
        }
        else{
            answer_array[user_taxi_time[i][2]] = -1
        }
    }
    console.log(answer_array.join(" "))
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

runProgram(`5 4
1 100
2 100
3 100
4 100
5 100`)




