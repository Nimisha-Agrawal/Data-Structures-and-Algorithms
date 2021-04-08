// Time Complexity => O(nlogn)
// Space Complexity => O(n)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, required_wood] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number).sort((a,b) => b - a)

    let height_and_wood = [0]
    let wood = 0
    for(let i = 0; i < array.length - 1; i++){
        if(array[i + 1] && array[i] === array[i + 1]){
            let start = i
            while(array[i + 1] && array[i] == array[i + 1]){
                i++
            }
            i = i - 1
            wood += (i + 1) * (array[i] - array[i + 1])
            for(let j = start; j <= i; j++){
                height_and_wood.push(wood)
            }
        }
        else{
            wood += (i + 1) * (array[i] - array[i + 1])
            height_and_wood.push(wood)
        }
    }
    // console.log(height_and_wood)

    let closest_index;
    let diff = Infinity
    for(let i = 0; i < height_and_wood.length; i++){
        if(diff > Math.abs(height_and_wood[i] - required_wood)){
            closest_index = i
            diff = Math.abs(height_and_wood[i] - required_wood)
        }
    }

    // console.log(array[closest_index])
    // console.log(height_and_wood[closest_index])

    let answer = array[closest_index]
    let wood_calc = height_and_wood[closest_index]
    if(wood_calc == required_wood){
        console.log(answer)
    }
    else if(wood_calc < required_wood){
        console.log(array)
        let multiplier = closest_index == 0 ? 1 : closest_index + 1
        while(wood_calc + (multiplier) < required_wood){
            wood_calc += multiplier
            answer--
        }
        console.log(answer - 1) 
    }
    else{
        let multiplier = closest_index == 0 ? 1 : closest_index
        let flag = false
        while(wood_calc - (multiplier) > required_wood){
            flag = true
            wood_calc -= multiplier
            answer++
        }
        if(flag){
            console.log(answer + 1) 
        }
        else{
            console.log(answer)
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

runProgram(`4 7
20 15 10 17`)
runProgram(`5 20
4 42 40 26 46`)
runProgram(`7 8
1 2 3 4 5 6 7`)
runProgram(`5 15
5 3 4 10 16`)
runProgram(`10 153687
278419 804383 967969 592187 439110 503348 571848 334458 283028 911484`)
runProgram(`7 30
46 42 40 36 28 15 8`)
runProgram(`10 21
4 8 5 6 11 16 50 23 14 20`)
runProgram(`12 21
4 8 5 6 11 16 50 23 14 20 27 31`)
runProgram(`19 26
1 1 1 1 2 2 3 3 5 5 6 6 7 7 9 67 73 78 100`)

