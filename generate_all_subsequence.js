function runProgram(input){
    let input_arr = input.trim().split("\n")
    input_arr.shift()
    let string = input_arr[0]

    let count = 0
    let answer = []
    function sub_sequence(string, start_index, start_index_of_sub){
        let new_string = string[start_index]
        if(start_index < string.length){
            if(count == start_index){
                // console.log(new_string)
                answer.push(new_string)
                count ++
            }
            if(start_index_of_sub < string.length){
                let string_copy = string
                for(let j = 1; j < string_copy.length; j++){
                    new_string = string[start_index]
                    for(let i = start_index_of_sub; i < string_copy.length; i++ ){
                        new_string += string_copy[i]
                        // console.log(new_string)
                        answer.push(new_string)
                    }
                    if(string_copy.length > 3){
                        string_copy = string_copy.split("")
                        string_copy[2] = ""
                        string_copy = string_copy.join("")
                        // console.log(string_copy)
                    }
                }
                answer = [...new Set(answer)]
                answer.forEach((item) => {
                    console.log(item)
                })
                answer = []
                sub_sequence(string, start_index, start_index_of_sub + 1)
            }
            else{
                sub_sequence(string, start_index + 1, start_index + 2)
            }
        }
        else{
            return
        }
    }

    sub_sequence(string, 0, 1)
    
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
zzz`)

// var string = "sara"
// var array = string.split("")
// array[1] = ""
// console.log(array.join(""))




