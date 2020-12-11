function runProgram(input){
    var input_arr = input.split(/[\r\n]+/)
    var week = Number(input_arr[0])
    if(week >= 0 && week <= 1000)
    {
        var item_no = input_arr[1].split(" ")
        var item_no_num = []
        var item = [ 550, 240, 84, 159, 80, 160, 252]
        for(var i =0 ; i < item_no.length ; i++)
        {
            item_no_num.push(Number(item_no[i]))
        }
        var sub_total = 0
        for(var j =0 ; j < item.length; j++)
        {
            sub_total += item[j] * item_no_num[j] 
        }
        var total = sub_total * week
        console.log(total)
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

