function runProgram(input){
    no_symbols = input.replace(/[^a-zA-Z ]/g, "")
    var input_arr = no_symbols.trim().split("").filter(e => e != " ")
    var input_arr_rev =  no_symbols.trim().split("").filter(e => e != " ")
    input_arr_rev.reverse()

    var flag = true
    for(var i = 0; i < input_arr.length; i++)
    {
        if(input_arr_rev[i].toUpperCase() == input_arr[i].toUpperCase())
        {
            continue
        }
        else
        {
            console.log("NO")
            flag = false
            break
        }
    }
    if(flag)
    {
        console.log("YES")
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

runProgram(`Was it a rat I saw?`)




