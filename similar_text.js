// Time Complexity => O(2^n)
// Space Complexity => O(2^n)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let virat_string = input_arr[0].trim()
    let rohit_string = input_arr[1].trim()

    let min_string;
    let max_string;
    if(virat_string.length > rohit_string.length){
        min_string = rohit_string
        max_string = virat_string
    }
    else{
        max_string = rohit_string
        min_string = virat_string
    }

    let subsequence = [""]
    for(let i = 0; i < min_string.length; i++){
        subsequence.forEach(item => {
            subsequence.push(item + min_string[i])
        })
    }

    console.log(subsequence)

    // let longest_common_subseq = 0
    // for(let i = 0; i < subsequence.length; i++){
    //     let starter = 0
    //     let j = 0
    //     let counter = 0
    //     while(j < subsequence[i].length){
    //         let checker = includes(starter, subsequence[i][j], max_string)
    //         if(checker[0]){
    //             starter = checker[1] + 1
    //             counter++
    //         }
    //         j++
    //     }
    //     if(counter == subsequence[i].length){
    //         // console.log(subsequence[i])
    //         longest_common_subseq = Math.max(longest_common_subseq, subsequence[i].length)
    //     }
    // }
    // console.log(longest_common_subseq)

    // function includes(start, char, to_find){
    //     for(let i = start; i < to_find.length; i++){
    //         if(char == to_find[i]){
    //             return [true, i]
    //         }
    //     } 
    //     return [false]
    // }
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

// runProgram(`AGGTAB
// GXTXAYB`)

runProgram(`pqvowlgjkyaoprgpfyaoeyoacxmmtggwbkmsvwlfupbaajnrhhdugvobkfeihdeghcldtfidpdikrbngkmfskxvtornqkucgxead
kdwtorkaginuadulagbbjjibeohsqzcbktohkmxqnaezrmcvcoznbxckdzaxnbajdsqhgqfdpokhnhhyhtomgyimadxxeckhqlya`)




