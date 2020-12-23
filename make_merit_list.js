function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr.map(e => {
        return e.split(" ")
    }) 
    array.sort()
    for(var i = 0; i < array.length; i++)
    {
        array[i][1] = Number(array[i][1])
        array[i][2] = Number(array[i][2])
        array[i][3] = Number(array[i][3])
    }

    merit(array)

    function merit (array){
        for(var i = 0; i < array.length-1; i++)
        {
            for(var j = 0; j < array.length-1-i; j++)
            {
                if(array[j+1][3] > array[j][3])
                {
                    var swap = array[j+1]
                    array[j+1] = array[j]
                    array[j] = swap 
                }
                else if(array[j+1][3] == array[j][3])
                {
                    if(array[j+1][1] > array[j][1])
                    {
                        var swap = array[j+1]
                        array[j+1] = array[j]
                        array[j] = swap 
                    }
                    else if(array[j+1][1] == array[j][1])
                    {
                        if(array[j+1][2] < array[j][2])
                        {
                            var swap = array[j+1]
                            array[j+1] = array[j]
                            array[j] = swap 
                        }
                    }
                }
            }
        }
        for(var i = 0; i < 8; i++)
        {
            console.log(array[i][0])
        }
    }

}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });


runProgram(`8
jack 158 85 112
john 168 74 124
arti 148 65 120
bhuvan 182 84 124
navi 182 84 124
aman 175 89 115
amit 175 89 115
kevin 182 77 120`)