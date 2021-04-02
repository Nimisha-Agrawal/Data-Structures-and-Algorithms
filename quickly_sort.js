function runProgram(input){
    var input_arr = input.trim().split("\n")
    var array = input_arr[1].trim().split(" ").map(Number)

    function pivoter(array, start, end){
        var i = start
        var j = end
        var pivot = array[end]
        while(i < j){
            // j decrementer
            while(array[j] >= pivot){
                // console.log(j + " before")
                j--
                // console.log(j)
            }

            // i increamenter
            while(array[i] < pivot){
                // console.log(i + " before")
                i++
                // console.log(i)
            }
            
            if(i < j){
                var swapper = array[i]
                array[i] = array[j]
                array[j] = swapper
            }
        }
        var swapper = array[i]
        array[i] = pivot
        array[end] = swapper

        // console.log(i)
        return i
    }

    function quick_sort(array, start, end){
        if(start < end){
            var pivot_index = pivoter(array, start, end)
            quick_sort(array, start, pivot_index-1)
            quick_sort(array, pivot_index + 1, end)
        }
    }

    quick_sort(array, 0, array.length -1)
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




