function runProgram(input){
    let array = input.trim().split(" ").map(Number)
    // console.log(array)

    function divide(start, end){
        if(start == end){
            return array.slice(start, end+1)
        }
        else{
            let mid = Math.floor((start + end)/2)
            // console.log(mid)
            return mergeSort(divide(start, mid), divide(mid+1, end))
        }
    }

    function mergeSort(array1, array2){
        let sorted = []
        while(array1.length && array2.length){
            if(array1[0] < array2[0]){
                sorted.push(array1.shift())
            }
            else{
                sorted.push(array2.shift())
            }
        }
        if(array1.length){
            sorted = [...sorted, ...array1]
        }
        else if(array2.length){
            sorted = [...sorted, ...array2]
        }
        return sorted
    }

    console.log(divide(0,array.length-1))
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

runProgram(`3 5 2 1 0 10 -1`)








