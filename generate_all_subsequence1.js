function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var string = input_arr[0]

    function sub_sequence(string, start_index, sub_string_array){
        if(start_index == string.length){
            return
        } 
        else{
            sub_string_array.push(string[start_index])
            console.log(sub_string_array.join(""))
            sub_sequence(string, start_index+1, sub_string_array)
            sub_string_array.pop()
            sub_sequence(string, start_index +1, sub_string_array)
        }
    }

    sub_sequence(string, 0, [], 0)
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

runProgram(`4
abc`)



// function runProgram(input){
//     var input_arr = input.trim().split("\n")
//     input_arr.shift()
//     var string = input_arr[0]
//     var output_array = []

//     function sub_sequence(string, start_index, sub_string){
//         if(start_index == string.length){
//             return
//         } 
//         else{
//             sub_sequence(string, start_index+1, sub_string)
//             sub_string += string[start_index]
//             // sub_string.push(string[start_index])
//             // sub_string.pop()
//             sub_sequence(string, start_index +1, sub_string)
//             output_array.push(sub_string)
//         }
//     }

//     sub_sequence(string, 0, "")
//     output_array.reverse().forEach(item => console.log(item))
// }




// function runProgram(input){
//     var input_arr = input.trim().split("\n")
//     input_arr.shift()
//     var string = input_arr[0]

//     function sub_sequence(string, start_index, sub_string_array){
//         if(start_index == string.length){
//             return
//         } 
//         else{
//             sub_sequence(string, start_index+1, [...sub_string_array])
//             sub_string_array.push(string[start_index])
//             sub_sequence(string, start_index +1, [...sub_string_array])
//             console.log(sub_string_array.join(""))
//         }
//     }

//     sub_sequence(string, 0, [], 0)
// }

