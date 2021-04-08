// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i = i+2){
        let [_, cutoff] = input_arr[i].trim().split(" ").map(Number)
        let scores = input_arr[i+1].trim().split(" ").map(Number).sort((a,b) => b - a)
        let ranking = []
        let no_candidates = 0 
        let rank = 1

        for(let j = 0; j < scores.length; j++){
            ranking.push(rank)
            let count = 1
            while(scores[j] == scores[j+1]){
                ranking.push(rank)
                j++
                count++
            }
            rank += count
        }

        for(let j = 0; j < ranking.length; j++){
            if(ranking[j] <= cutoff){
                no_candidates++
            }
        }

        console.log(no_candidates)
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

runProgram(`1
5 3
2 3 5 6 1 2 4 6 2 3 1`)
