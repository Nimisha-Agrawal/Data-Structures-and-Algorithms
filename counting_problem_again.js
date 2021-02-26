function runProgram(input){
    var alphabets = "abcdefghijklmnopqrstuvwxyz"
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
        z : 0,
    }
    for (var i = 0; i < input.length; i++)
    {
        for(var j = 0; j < alphabets.length; j++)
        {
            if(input[i] == alphabets[j])
            {
                obj[input[i]] += 1
            }
        }
    }
    for(key in obj)
    {
        if(obj[key] != 0)
        {
            console.log(key + " " + obj[key])
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






