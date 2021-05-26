// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let mukesh_boxes = input_arr[1].trim()
    mukesh_boxes = " " + mukesh_boxes
    
    let size_map = {
        a : 1,
        b : 2,
        c : 3,
        d : 4, 
        e : 5,
        f : 6,
        g : 7,
        h : 8,
        i : 9,
        j : 10,
        k : 11,
        l : 12,
        m : 13,
        n : 14,
        o : 15,
        p : 16,
        q : 17,
        r : 18,
        s : 19,
        t : 20,
        u : 21,
        v : 22,
        w : 23,
        x : 24,
        y : 25,
        z : 26
    }

    for(let i = 3; i < input_arr.length; i++){
        let [start, end] = input_arr[i].trim().split(" ").map(Number) 

        let to_arrange = mukesh_boxes.slice(start, end+1)
        let helper = {
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
            z : 0
        }

        for(let j = 0; j < to_arrange.length; j++){
            // console.log(to_arrange[j])
            helper[to_arrange[j]] += 1
        }

        // console.log(helper)

        let size_neeeded = 0
        let todo = to_arrange.length
        while(todo > 0){
            let track_of_last;
            for(key in helper){
                if(helper[key] !== 0){
                    helper[key] -= 1
                    todo--
                    track_of_last = key
                }
            }
            size_neeeded += size_map[track_of_last]
        }

        console.log(size_neeeded)
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

runProgram(`6
aabcde
4
1 1
3 4
2 6
1 6`)




