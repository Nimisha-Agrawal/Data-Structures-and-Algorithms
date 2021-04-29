// Time Complexity => O(max(m, n))
// Space Complexity => O(max(m, n))
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i = i+2){
        let x_string = input_arr[i].trim()
        let y_string = input_arr[i+1].trim()

        let obj1 = {}
        for(let j = 0; j < x_string.length; j++){
            if(obj1[x_string[j]] == undefined){
                obj1[x_string[j]] = 1
            }
            else{
                obj1[x_string[j]] += 1
            }
        }

        let obj2 = {}
        let flag = true
        for(let j = 0; j < y_string.length; j++){
            if(obj1[y_string[j]]){
                if(obj2[y_string[j]] == undefined){
                    obj2[y_string[j]] = 1
                }
                else{
                    obj2[y_string[j]] += 1
                }
            }
            else{
                flag = false
                console.log("No")
                break
            }
        }

        if(flag){
            let flag = true
            for(key in obj1){
                if(obj2[key]%obj1[key] !== 0){
                    let flag = false
                    console.log("No")
                    break
                }
            }
            if(flag){
                console.log("Yes")
            }
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

runProgram(`3
aac
aaabab
abcdef
abcdef
abcxyz
abcxyababcxyzcxyzzabcxyz`)



