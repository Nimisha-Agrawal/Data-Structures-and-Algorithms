function runProgram(input){
    var input_arr = (input.split(/[\r\n]+/))
    var type_price = input_arr[0].split(" ")
    var type_no = input_arr[1].split(" ")
    var tp_num = []
    var tn_num = []
    var total = 0
    for(var i = 0 ; i < type_price.length ; i++)
    {
        tp_num.push( Number(type_price[i]) )
        tn_num.push( Number(type_no[i]) )
    }
    for(var j = 0; j < tp_num.length ; j++ )
    {
        if(tp_num[j] < 10000 && tn_num[j] < 10000)
        {
        total += tp_num[j] * tn_num[j]
        }
    }
    console.log(total)
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