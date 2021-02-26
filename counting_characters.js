function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    for(var i = 1; i < input_arr.length; i=i+2){
        var string = input_arr[i]
        var obj = {
            a : 0,
            b : 0,
            c : 0,
            d : 0,
            e : 0,
            f : 0,
            g : 0,
            h : 0,
            i : 0,
            j : 0,
            k : 0,
            l : 0,
            m : 0,
            n : 0,
            o : 0,
            p : 0,
            q : 0,
            r : 0,
            s : 0,
            t : 0,
            u : 0,
            v : 0,
            w : 0,
            x : 0,
            y : 0,
            z : 0
        }
        for(var j = 0 ; j < string.length; j++){
            obj[string[j]] += 1
        }
        var answer = []
        for(key in obj){
            answer.push(obj[key])
        }
        console.log(answer.join(" "))
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

runProgram(`2
5
aeiou
6
aaeiou`)




