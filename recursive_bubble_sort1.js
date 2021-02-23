function runProgram(input){
    let input_arr = input.trim().split("\n")
    input_arr.shift()
    let array = input_arr[0].trim().split(" ").map(Number)

    function sort(array, i , j){
        if(i < array.length){
            for(var k = j; k < array.length; k++){
                if(array[i] > array[k]){
                    var swap = array[i]
                    array[i] = array[k]
                    array[k] = swap
                }
            }
            sort(array, i+1, j+1)
        }
        else{
            console.log(array.join(" "))
            return
        }
    }

    sort(array, 0, 1)
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
3 5 0 9 8`)




