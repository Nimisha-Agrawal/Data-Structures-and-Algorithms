// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let no_participants = Number(input_arr[0])
    let [L, R] = input_arr[1].trim().split(" ").map(Number)
    let count = 0

    let array = []
    for(let i = 1; i <= no_participants; i++){
        array.push(i)
    }
    combinations(array)
    console.log(count)
    
    function combinations(array){
        if(array.length === 0){
            return [[]]
        }
        let first_char = array[0]
        let rest_char = array.slice(1)

        let without_first = combinations(rest_char)
        let all_combinations = []

        without_first.forEach(item => {
            for(let i = 0; i <= item.length; i++){
                let with_first = [...item.slice(0,i), first_char, ...item.slice(i)]
                all_combinations.push(with_first)
                if(with_first.length == no_participants){
                    let sum = 0
                    for(let j = L; j <= R; j++){
                        sum += with_first[j]
                    }
                    if(sum%2 != 0){
                        // console.log(with_first)
                        count++
                    }
                }
            }
        })

        return all_combinations
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

runProgram(`3
0 1`)



