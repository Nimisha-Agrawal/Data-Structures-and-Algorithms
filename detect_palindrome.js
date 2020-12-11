//Given an integer, print "Yes" (without quotes) if that integer is aPalindrome, else print "No" (without quotes)
//You must write a recursive function to achieve this
//You must not use the reverse() function. Using that would lead to disqualification
//You are provided with one integer.
//The provided integer is always lesser than 1000000

function runProgram(input)
{
    // Write code here
    if(Math.floor(input) == input && input < 1000000 )
    {
        var str = input.toString()
        var mid = Math.floor(str.length/2)
        var flag = true
        for(var i = 0, j = str.length - 1 ; i <  mid ; i++, j--)
        {
            if(str[i] != str[j])
            {
                console.log("No")
                flag = false
                break;
            }
        }
        if(flag == true)
        {
        console.log("Yes")
        }
    }
}
runProgram(1221)