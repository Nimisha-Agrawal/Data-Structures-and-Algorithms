function runProgram(input){
    var array = input.trim().split(" ").map(Number)
    var i = array[0]
    var j = array[1]
    var no_moves = array[2]
    var blocks = []
    var final_block = []

    function blocks_touched(i, j, N){
        if(N == 1){
            blocks = []
        }
        if(N > 0){
            //position 1
            if(j - 2 > 0 && i -1 > 0){
                blocks.push(`${i-1} ${j-2}`)
                blocks_touched(i-1, j-2, N-1)
            }
            //position 2
            if(j -2 > 0 && i + 1 <= 10){
                blocks.push(`${i+1} ${j-2}`)
                blocks_touched(i+1, j-2, N-1)
            }
            //position 3
            if(j - 1 > 0 && i + 2 <= 10){
                blocks.push(`${i + 2} ${j -1}`)
                blocks_touched(i+2, j-1, N-1)
            }
            //position 4
            if(j + 1 <= 10 && i + 2 <= 10){
                blocks.push(`${i+2} ${j+1}`)
                blocks_touched(i+2, j+1, N-1)
            }
            //position 5
            if(i - 2 > 0 && j -1 > 0){
                blocks.push(`${i -2} ${j -1}`)
                blocks_touched(i-2, j-1, N-1)
            }
            //position 6
            if(i -2 > 0 && j + 1 <= 10){
                blocks.push(`${i - 2} ${j + 1}`)
                blocks_touched(i-2, j+1, N-1)
            }
            //position 7
            if(j + 2 <= 10 && i -1 > 0){
                blocks.push(`${i-1} ${j + 2}`)
                blocks_touched(i-1, j+2, N-1)
            }
            //position 8
            if(j + 2 <= 10 && i + 1 <= 10){
                blocks.push(`${i+1} ${j+2}`)
                blocks_touched(i+1, j+2, N-1)
            }
        }
        else{
            return
        }
        if(N == 1){
            for(var a = 0; a < blocks.length; a++){
                final_block.push(blocks[a])
            }
        }
    }
    blocks_touched(i, j, no_moves)
    var unique_blocks = [...new Set(final_block)]
    console.log(unique_blocks.length)
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

runProgram(`6 10 8`)




