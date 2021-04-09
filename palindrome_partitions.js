function palindrome_partirtions(string){
    for(let i = 0; i < string.length; i++){
        let substring = ""
        for(let j = i; j < string.length - 1; j++){
            substring += string[j]
            let substring_right = string.substring(0, i)
            let substring_left = string.substring(j+1, string.length)
            let right = palindrome_check(substring_right) 
            let left = palindrome_check(substring_left)
            let mid = palindrome_check(substring)
            if(left && right &&  mid){
                if(substring_left == ""){
                    console.log(substring_right + " | " + substring)
                }
                else if(substring_right == ""){
                    console.log(substring + " | " + substring_left)
                }
                else{
                    console.log(substring_right + " | " + substring + " | " + substring_left)
                }
            }
            else if(left && mid){
                substring_right = substring_right.split("").join(" | ")
                if(substring_left == ""){
                    console.log(substring_right + " | " + substring)
                }
                else{
                    console.log(substring_right + " | " + substring + " | " + substring_left)
                }
            }
            else if(mid && right){
                substring_left = substring_left.split("").join(" | ")
                if(substring_right == ""){
                    console.log(substring + " | " + substring_left)
                }
                else{
                    console.log(substring_right + " | " + substring + " | " + substring_left)
                }
            }
        }
    }

    function palindrome_check(string){
        for(let i = 0, j = string.length - 1 ; i < j; i++, j--){
            if(string[i] == string[j]){
                continue
            }
            else{
                return false
            }
        }

        return true
    }
}

palindrome_partirtions("azanaaza")



// function palindrome_partirtions(string){
//     for(let i = 0; i < string.length; i++){
//         let substring = ""
//         for(let j = i; j < string.length - 1; j++){
//             substring += string[j]
//             let substring_right = string.substring(0, i)
//             let substring_left = string.substring(j+1, string.length)
//             let right = palindrome_partirtions(substring_right)
//             let left = palindrome_partirtions(substring_left) 
//             let mid = palindrome_check(substring)
//             if(mid){
//                 let right_and_mid = right.map(item => {
//                     return item + " | " + substring
//                 })
//                 left.forEach(left => {
//                     right_and_mid.forEach(item => {
//                         console.log(item + " | " + left)
//                     })
//                 })
//             }

//         }
//     }

//     function palindrome_partirtions(string){
//         let all = []
//         for(let i = 0; i < string.length; i++){
//             let substring = ""
//             for(let j = i; j < string.length - 1; j++){
//                 substring += string[j]
//                 let substring_right = string.substring(0, i)
//                 let substring_left = string.substring(j+1, string.length)
//                 let right = palindrome_check(substring_right) == false ? palindrome_partirtions(substring_right) : palindrome_check(substring_right)
//                 let left = palindrome_check(substring_left) == false ? palindrome_partirtions(substring_left) : palindrome_check(substring_left)
//                 let mid = palindrome_check(substring)
//                 if(left && right &&  mid){
//                     if(substring_left == ""){
//                         all.push(substring_right + " | " + substring)
//                     }
//                     else if(substring_right == ""){
//                         all.push(substring + " | " + substring_left)
//                     }
//                     else{
//                         all.push(substring_right + " | " + substring + " | " + substring_left)
//                     }
//                 }
//                 else if(left && mid){
//                     substring_right = substring_right.split("").join(" | ")
//                     if(substring_left == ""){
//                         all.push(substring_right + " | " + substring)
//                     }
//                     else{
//                         all.push(substring_right + " | " + substring + " | " + substring_left)
//                     }
//                 }
//                 else if(mid && right){
//                     substring_left = substring_left.split("").join(" | ")
//                     if(substring_right == ""){
//                         all.push(substring + " | " + substring_left)
//                     }
//                     else{
//                         all.push(substring_right + " | " + substring + " | " + substring_left)
//                     }
//                 }
//             }
//         }
//         return all
//     }

//     function palindrome_check(string){
//         for(let i = 0, j = string.length - 1 ; i < j; i++, j--){
//             if(string[i] == string[j]){
//                 continue
//             }
//             else{
//                 return false
//             }
//         }

//         return true
//     }
// }


