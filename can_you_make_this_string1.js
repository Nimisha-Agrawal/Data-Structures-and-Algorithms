// Time Complexity => O()
// Space Complexity => O()
function pair_remove(to_match, string){
    for(let i = 0; i < string.length; i++){
        if(string[i] == to_match[0] && string[i + to_match.length -1] == to_match[to_match.length -1]){
            let finding_match = ""
            for(let j = i; j < i+to_match.length; j++){
                finding_match += string[j]
            }
            if(finding_match == to_match){
                let new_string = string.slice(0, i) + string.slice(i+to_match.length)
                return [true, new_string]
            }
        }
    }

    return [false, string]
}

function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i+=2){
        let str1 = input_arr[i].trim()
        let str2 = input_arr[i+1].trim()

        if(str2.length % str1.length == 0){
            let no_times = str2.length/str1.length
            let can_be_formed = true

            for(let j = 0; j < no_times; j++){
                let [bool, string] = pair_remove(str1, str2)
                if(bool){
                    str2 = string
                }
                else{
                    can_be_formed = false
                    break
                }
            }
            if(can_be_formed && str2.length == 0){
                console.log("Yes")
            }
            else{
                console.log("No")
            }

        }
        else{
            console.log("No")
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




