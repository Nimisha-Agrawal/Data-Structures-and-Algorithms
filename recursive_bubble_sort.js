function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].trim().split(" ").map(Number)

    function sort(array, i , j){
        for(var k = j; k < array.length; k++){
            if(array[i] > array[k]){
                var swap = array[i]
                array[i] = array[k]
                array[k] = swap 
            }
        }
        if(i == array.length -1){
            return 
        }
        else{
            sort(array, i+1, i+2)
        }
    }

    sort(array, 0, 1)
    console.log(array.join(" "))
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




