function palindrome_partirtions(string){
    console.log(string.split("").join(" | "))
    for(let i = 0; i < string.length; i++){
        let substring = ""
        for(let j = i; j < string.length - 1; j++){
            substring += string[j]
            let substring_right = string.substring(0, i)
            let substring_left = string.substring(j+1, string.length)
            if(palindrome_partirtions_check(substring, substring_right, substring_left)){
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
        }
    }

    function palindrome_partirtions_check(middle, right, left){
        for(let i = 0, j = middle.length - 1 ; i < j; i++, j--){
            if(middle[i] == middle[j]){
                continue
            }
            else{
                return false
            }
        }
        for(let i = 0, j = left.length - 1 ; i < j; i++, j--){
            if(left[i] == left[j]){
                continue
            }
            else{
                return false
            }
        }
        for(let i = 0, j = right.length - 1 ; i < j; i++, j--){
            if(right[i] == right[j]){
                continue
            }
            else{
                return false
            }
        }

        return true
    }
}

palindrome_partirtions("amama")


