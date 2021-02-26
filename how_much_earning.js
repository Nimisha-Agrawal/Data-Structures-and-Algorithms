function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var street_no = Number(input_arr[0])
    for(var i = 2, j =1 ; i <= (street_no*2); i = i+2, j = j+2)
    {
        var first = input_arr[j].split(" ")
        var rate = Number(first[1])
        var street = input_arr[i].split(" ").map(function(e)
        {
            return Number(e)
        })
        var min = street[0]
        var count = 1
        for(var k = 1; k < street.length; k++)
        {
            if(street[k] > min)
            {
                count += 1;
                min = street[k]
            }
        }
        var earn = rate * count
        console.log(earn) 
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






