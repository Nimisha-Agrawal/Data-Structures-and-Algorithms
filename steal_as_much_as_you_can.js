// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [car_cap, _, value, weight] = input_arr
    car_cap = Number(car_cap)
    value = value.trim().split(" ").map(Number)
    weight = weight.trim().split(" ").map(Number)

    let value_by_weight = []
    for(let i = 0; i < value.length; i++){
        value_by_weight.push([value[i]/weight[i], value[i], weight[i]])
    }

    value_by_weight.sort((a, b) => b[0] - a[0])
    // console.log(value_by_weight)
    
    let taken = 0
    let start = 0
    let total_value = 0
    while(taken != car_cap){
        if((taken + value_by_weight[start][2]) <= car_cap){
            taken += value_by_weight[start][2]
            total_value += value_by_weight[start][1]
            start++
        }
        else{
            let fraction = (value_by_weight[start][2] - ((taken + (value_by_weight[start][2]))%car_cap)) / value_by_weight[start][2]
            if( taken + (value_by_weight[start][2] * fraction) == car_cap ){
                taken = taken + (value_by_weight[start][2] * fraction)
                total_value += Math.round(value_by_weight[start][1] * fraction)
            }
        }
    }
    console.log(total_value)

    // console.log(value_by_weight)
    // console.log(value)
    // console.log(weight)
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

runProgram(`50 
3
60 100 120 
10 20 30`)




