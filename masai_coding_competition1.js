function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    var order_queue = []
    var q1 = []
    var q2 = []
    var q3 = []
    var q4 = []
    
    for(var i = 0; i < input_arr.length; i++){
        var array = input_arr[i].trim().split(" ")
        if(array[0] == "E"){
            if(!order_queue.includes(array[1])){
                order_queue.push(array[1])
            }
            switch(array[1]){
                case "1":
                    q1.push(array[2])
                    break
                case "2":
                    q2.push(array[2])
                    break
                case "3":
                    q3.push(array[2])
                    break
                case "4":
                    q4.push(array[2])
                    break
            }
        }
        else{
            switch(order_queue[0]){
                case "1":
                    console.log("1" +" "+ q1[0])
                    q1.shift()
                    if(q1.length == 0){
                        order_queue.shift()
                    }
                    break
                case "2":
                    console.log("2" +" "+ q2[0])
                    q2.shift()
                    if(q2.length == 0){
                        order_queue.shift()
                    }
                    break
                case "3":
                    console.log("3" +" "+ q3[0])
                    q3.shift()
                    if(q3.length == 0){
                        order_queue.shift()
                    }
                    break
                case "4":
                    console.log("4" +" "+ q4[0])
                    q4.shift()
                    if(q4.length == 0){
                        order_queue.shift()
                    }
                    break
            }
        }
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

runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`)




