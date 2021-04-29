// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i++){
        let [bag_cap, N] = input_arr[i].trim().split(" ").map(Number)
        let array = []
        for(let j = i+1 ; j <= i + N; j++){
            let weight_val = input_arr[j].trim().split(" ").map(Number)
            array.push(weight_val)
        }
        max_take(array, bag_cap)
        // console.log(array)
        i = i + N
    }


    function max_take(array, cap){
        let bottom_up_build = []
        for(let i = 0; i < array.length; i++){
            bottom_up_build.push([])
            for(let j = 0; j <= cap; j++){
                bottom_up_build[i].push(0)
            }
        }
        // console.log(bottom_up_build)

        for(let i = 0; i < bottom_up_build.length; i++){
            for(let j = 0; j < bottom_up_build[i].length; j++){
                if(i == 0){
                    if(array[i][0] <= j){
                        bottom_up_build[i][j] = array[i][1]
                    }
                }
                else{
                    let without_val = bottom_up_build[i-1][j]
                    if(j - array[i][0] >= 0){
                        let with_val = bottom_up_build[i-1][j - array[i][0]] + array[i][1]
                        bottom_up_build[i][j] = Math.max(with_val, without_val)
                    }
                    else{
                        bottom_up_build[i][j] = without_val
                    }
                }
            }
        }

        console.log(bottom_up_build[array.length -1][cap])
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
4 5
1 8
2 4
3 0
2 5
2 3`)



