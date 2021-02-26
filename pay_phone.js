function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var price = input_arr[0].split(" ")
    var quant = input_arr[1].split(" ")
    var total = 0;
    for(var i =0; i < price.length; i++)
    {
        price[i] = Number(price[i])
        quant[i] = Number(quant[i])
    }
    for(var j = 0; j < price.length; j++)
    {
        total += (price[j] * quant[j])
    }
    if(total <= 150000)
    {
        console.log("Possible")
    }
    else
    {
        console.log("Not Possible")
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

