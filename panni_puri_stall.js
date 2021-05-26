// Time Complexity => O()
// Space Complexity => O()
function sum_upto(num1, num2){
    let sum = 0
    for(let i = num1; i >= num2; i--){
        sum += i
    }

    return sum
}

function find_max(array){
    var max = -Infinity
    var max_index
    for(var i = 0; i < array.length; i++){
        if(max < array[i]){
            max = array[i]
            max_index = i
        }
    }
    return [max, max_index]
}

function runProgram(input){
    let input_arr = input.trim().split("\n")

    let tc = Number(input_arr[0])

    for(let i = 1; i < input_arr.length; i+=2){
        let [stalls, people] = input_arr[i].trim().split(" ").map(Number)
        let array = input_arr[i+1].trim().split(" ").map(Number)

        array.sort((a,b) => a -b)
        let minimum = 0
        let count = 0
        for(let j = 0; j < array.length; j++){
            if(count <= people){
                if(count + array[j] <= people){
                    // console.log(sum_upto(array[j], 0), i)
                    minimum += sum_upto(array[j], 0)
                    count += array[j]
                }
                else{
                    limit = (count + array[j]) - people
                    minimum += sum_upto(array[j], limit+1)
                    count += array[j] - limit
                }
            }
            else{
                break
            }
            // console.log(count)
        }
        
        let count1 = 0
        let maximum = 0
        while(count1 < people){
            let [max, max_index] = find_max(array)
            maximum += max
            count1 += 1
            array[max_index] = array[max_index] - 1
        }

        console.log(minimum, maximum)
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

runProgram(`1
3 4
2 1 1
3 3
2 1 1
3 3
3 3 3`)




