// Time Complexity => O(mn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let virat_string = input_arr[0].trim()
    let rohit_string = input_arr[1].trim()

    console.log(longest_common(virat_string, rohit_string, 0, 0, {}))

    function longest_common(str1, str2, i , j, memo){
        if(memo[`${i}_${j}`] != undefined){
            return memo[`${i}_${j}`]
        }
        if(str1[i] == undefined || str2[j] == undefined){
            memo[`${i}_${j}`] = 0
            return memo[`${i}_${j}`]
        }
        else if(str1[i] == str2[j]){
            memo[`${i}_${j}`] = longest_common(str1, str2, i+1, j+1, memo) + 1
            return memo[`${i}_${j}`]
        }
        else{
            memo[`${i}_${j}`] = Math.max(longest_common(str1, str2, i+1, j, memo), longest_common(str1, str2, i, j+1, memo))
            return memo[`${i}_${j}`]
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

runProgram(`AAB
AXXAB`)

// runProgram(`pqvowlgjkyaoprgpfyaoeyoacxmmtggwbkmsvwlfupbaajnrhhdugvobkfeihdeghcldtfidpdikrbngkmfskxvtornqkucgxead
// kdwtorkaginuadulagbbjjibeohsqzcbktohkmxqnaezrmcvcoznbxckdzaxnbajdsqhgqfdpokhnhhyhtomgyimadxxeckhqlya`)




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