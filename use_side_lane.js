function runProgram(input){
    var input_arr = input.trim().split("\n")
    for(var i = 1; i <= input_arr.length - 2; i=i+2){
        var array = input_arr[i].trim().split(" ").map(Number).reverse()
        sidelane(array)
    }

    function sidelane(array){
        var count = 1
        var stack = []
        var j = 0
        while(j < array.length){
            if( (array[array.length-1] == count)){
                count++
                array.pop()
                continue
            }
            else if((stack.length > 0 && stack[stack.length-1] == count) ){
                count++
                stack.pop()
                continue
            }
            else{
                while(array.length > 0 && array[array.length -1] > count){
                    if(stack.length == 0){
                        stack.push(array[array.length -1])
                        array.pop()
                    }
                    else if(stack[stack.length -1] > array[array.length-1]){
                        stack.push(array[array.length -1])
                        array.pop()
                    }
                    else{
                        console.log("no")
                        return
                    }
                }
                if( array[array.length-1] == count){
                    count++
                    array.pop()
                }
            }
            j++
        }
        console.log("yes")
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


runProgram(`6
3 2 1 4 5 6
0`)


