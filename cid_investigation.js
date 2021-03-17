function runProgram(input){
    
    var output = [[]]

    for(var i = 0; i < input.length; i++){
        output.forEach(item => {
            if(input[i] == 2){
                output.push([...item, 'a'])
                output.push([...item, 'b'])
                output.push([...item, 'c'])
            }
            else if(input[i] == 3){
                output.push([...item, 'd'])
                output.push([...item, 'e'])
                output.push([...item, 'f'])
            }
            else if(input[i] == 4){
                output.push([...item, 'g'])
                output.push([...item, 'h'])
                output.push([...item, 'i'])
            }
            else if(input[i] == 5){
                output.push([...item, 'j'])
                output.push([...item, 'k'])
                output.push([...item, 'l'])
            }
            else if(input[i] == 6){
                output.push([...item, 'm'])
                output.push([...item, 'n'])
                output.push([...item, 'o'])
            }
            else if(input[i] == 7){
                output.push([...item, 'p'])
                output.push([...item, 'q'])
                output.push([...item, 'r'])
                output.push([...item, 's'])
            }
            else if(input[i] == 8){
                output.push([...item, 't'])
                output.push([...item, 'u'])
                output.push([...item, 'v'])
            }
            else if(input[i] == 9){
                output.push([...item, 'w'])
                output.push([...item, 'x'])
                output.push([...item, 'y'])
                output.push([...item, 'z'])
            }
        })
    }

    for(var i = 0; i < output.length; i++){
        if(output[i].length == input.length){
            console.log(output[i].join(""))
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

runProgram(`222`)




