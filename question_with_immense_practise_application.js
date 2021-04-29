// Time Complexity => O(n*m)
// Space Complexity => O(n*m)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i = i+2){
        let string1 = input_arr[i]
        let string2 = input_arr[i + 1]

        mini_changes_match(string1, string2)

    }
    function mini_changes_match(str1, str2){
        let bottom_up_tabulation = []
        for(let i = 0; i <= str1.length; i++){
            bottom_up_tabulation.push([i])
            for(let j = 0; j < str2.length; j++){
                if(i == 0){
                    bottom_up_tabulation[i].push(j+1)
                }
                else{
                    bottom_up_tabulation[i].push(0)
                }
            }
        }
        // console.log(bottom_up_tabulation)

        for(let i = 1; i <= str1.length; i++){
            for(let j = 1; j <= str2.length; j++){
                // if(j > i){
                //     bottom_up_tabulation[i][j] = bottom_up_tabulation[i][j - 1] + 1
                // }
                if(str1[i] == str2[j]){
                    bottom_up_tabulation[i][j] = bottom_up_tabulation[i-1][j-1]
                }
                else{
                    bottom_up_tabulation[i][j] = Math.min(bottom_up_tabulation[i-1][j], bottom_up_tabulation[i][j-1], bottom_up_tabulation[i-1][j-1]) + 1
                }
            }
        }
    
        console.log(bottom_up_tabulation[str1.length - 1][str2.length -1])
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

runProgram(`3
abcde
abde
abde
abcde
abcde
abxde`)



