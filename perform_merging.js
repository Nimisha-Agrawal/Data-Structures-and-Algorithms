function runProgram(input){
    var input_arr = input.trim().split("\n")
    var length = Number(input_arr[0])
    input_arr.shift()
    var array1 = input_arr[0].split(" ").map(Number)
    var array2 = input_arr[1].split(" ").map(Number)
    var merged_array = []

    var i = 0
    var j = 0
    while(merged_array.length < 2*length){
        if(array1[i] != undefined && array1[i] < array2[j]){
            merged_array.push(array1[i])
            i++
        }
        else if (array2[j] != undefined && array1[i] >= array2[j]){
            merged_array.push(array2[j])
            j++
        }
        else{
            merged_array.push(array2[j] || array1[i])
            j++
        }

    }

    console.log(merged_array.join(" "))

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

runProgram(`5
0 1 2 3 4
2 3 4 7 9`)




