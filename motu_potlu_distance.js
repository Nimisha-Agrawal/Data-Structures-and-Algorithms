//Motu decided to visit his friend Potlu. It turned out that the Motu's house is located at point 0 and his friend's house is located at point x (x > 0) of the coordinate line. In one step the Motu can move 1, 2, 3, 4 or 5 positions forward.

//Determine, what is the minimum number of steps he need to make in order to get to his friend's house.
//Input Format :
//First and the only line contain the integer n which denotes the position of his friend's house.
//Constraints :
//1 <= n <= 10^6


function runProgram(input){
    var x = Number(input)
    if(x >= 1 && x <= 10**6)
    {
        switch(x)
        {
            case 1:
                console.log(1)
                break;
            case 2:
                console.log(2)
                break;
            case 3:
                console.log(3)
                break;
            case 4:
                console.log(4)
                break;
        }
        if(x >= 5)
        {
            var step = Math.floor(x/5)
            var extra = x % 5
            if(extra == 0)
            {
                console.log(step)
            }
            if( extra !=0)
            {
                console.log(step + 1)
            }
        }
    }
}

runProgram("5")