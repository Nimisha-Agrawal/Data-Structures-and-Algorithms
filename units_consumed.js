function runProgram(input){
    var amount = Number(input)
    var sub_amount = amount - 80;
    var unit = 0;
    if(sub_amount > 150)
    {
        unit += 50
        sub_amount = sub_amount - 150;
        if(sub_amount > 500)
        {
            unit += 100;
            sub_amount = sub_amount - 500;
            unit += sub_amount/10;
        }
        else
        {
            unit += sub_amount/5;
        }
    }
    else
    {
        unit = sub_amount/3;
    }
    console.log(unit)
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
