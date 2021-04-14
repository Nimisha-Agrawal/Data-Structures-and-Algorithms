// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [no_boxes, no_trucks] = input_arr[0].trim().split(" ").map(Number)
    let goods_weight = input_arr[1].trim().split(" ").map(Number).sort((a,b) => a - b) 
    let truck_max_cap = input_arr[2].trim().split(" ").map(Number).sort((a,b) => a - b)

    let low = 1
    let high = no_boxes * 2
    let min_time;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(possibility_check(mid, goods_weight, truck_max_cap)){
            min_time = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    console.log(min_time)

    // console.log(possibility_check(7, goods_weight, truck_max_cap))

    function possibility_check(time_assum, goods_weight, truck_max_cap){
        let max = 0
        let remaining_goods;
        [time, j] = max_time_generator(0, 0)
        max = time
        
        function max_time_generator(for_i, for_j){
            let j = for_j
            let max_time = -Infinity
            for(let i = for_i ; i < truck_max_cap.length; i++){
                let time_taken = 0
                // console.log(j, "j")
                while(goods_weight[j] && goods_weight[j] <= truck_max_cap[i] && (time_taken + 2) - 1 <= time_assum){   
                    time_taken += 2
                    j++
                }   
                // console.log(time_taken, j)
                if(max_time < time_taken){
                    max_time = time_taken
                }
            }
            return [max_time, j - 1]
        }
        
        while(j < goods_weight.length - 1){
                let low = 0
                let high = truck_max_cap.length - 1
                let index;
                while(low <= high){
                    let mid = Math.floor(low + ((high - low) / 2))
                    if(truck_max_cap[mid] >= goods_weight[j]){
                        index = mid
                        high = mid - 1
                    }
                    else{
                        low = mid + 1
                    }
                }
    
                [time, j] = max_time_generator(index, j + 1)
                max += time
        }
        
        if(max - 1 <= time_assum){
            // console.log(max - 1, time_assum)
            return true
        }
        else{
            return false
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

runProgram(`7 2
10 2 16 19 6 11 5
29 25`)

runProgram(`5 5
2 5 2 4 7
6 8 9 8 9`)

runProgram(`21 7
221 882 504 358 642 674 212 679 203 279 632 799 79 6 502 275 823 372 594 482 343
56 114 979 120 120 87 480`)















// // Time Complexity => O()
// // Space Complexity => O()
// function runProgram(input){
//     let input_arr = input.trim().split("\n")
//     let [no_boxes, no_trucks] = input_arr[0].trim().split(" ").map(Number)
//     let goods_weight = input_arr[1].trim().split(" ").map(Number).sort((a,b) => a - b) 
//     let truck_max_cap = input_arr[2].trim().split(" ").map(Number).sort((a,b) => a - b)

//     let low = 1
//     let high = no_boxes * 2
//     let min_time;
//     while(low <= high){
//         let mid = Math.floor(low + ((high - low) / 2))
//         if(possibility_check(mid, goods_weight, truck_max_cap)){
//             min_time = mid
//             high = mid - 1
//         }
//         else{
//             low = mid + 1
//         }
//     }
//     console.log(min_time)

//     // console.log(possibility_check(21, goods_weight, truck_max_cap))

//     function possibility_check(time_assum, goods_weight, truck_max_cap){
//         let load_divide = Math.ceil(goods_weight.length / truck_max_cap.length) 
//         let time_taken = 0
//         let j = 0
//         let i;
//         let max_count = -Infinity
//         for(i = 0; i < truck_max_cap.length; i++){
//             if(goods_weight[j]){
//                 let count = 0
//                 let flag = false
//                 while((count + 1) <= load_divide && goods_weight[j] <= truck_max_cap[i]){
//                     // console.log(goods_weight[j])
//                     flag = true
//                     count++
//                     j++
//                 }
//                 // console.log(count)
//                 if(count > max_count){
//                     max_count = count
//                 }
//             }
//             else{
//                 break
//             }
//         }
//         time_taken += max_count * 2

//         // console.log(max_count, "mx")

//         if(j < goods_weight.length){
//             let low = 0
//             let high = truck_max_cap.length - 1
//             let index;
//             while(low <= high){
//                 let mid = Math.floor(low + ((high - low) / 2))
//                 if(truck_max_cap[mid] >= goods_weight[i]){
//                     index = mid
//                     high = mid - 1
//                 }
//                 else{
//                     low = mid + 1
//                 }
//             }

//             let capable_trucks = truck_max_cap.length - index
//             let remaining_goods = goods_weight.length - j
//             time_taken += ( Math.floor(remaining_goods / capable_trucks) * 2 ) + ( (remaining_goods % capable_trucks) * 2)
//         }


//         // console.log(time_taken - 1, time_assum)
//         if(time_assum !== 1){
//             time_taken = time_taken - 1
//         }
//         if(time_taken <= time_assum){
//             return true
//         }
//         else{
//             return false
//         }
//     }

// }