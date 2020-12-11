function runProgram( tc , sl, s)
{
    if(tc >= 1 && tc <=10 && sl >= 1 && sl <= 1000000)
    {
        var count1 = 0
        var count2 = 0
        var length = 0
        var len =[]
        var a = j
        var flag = false
        for(var i = 0 ; i < sl ; i++ )
        {
            if(s[i] == "(")
            {
                count1 += 1
                for( var j = i+1 ; j < sl ; j++ )
                {
                    if(s[j] == "(")
                    {
                        count1 += 1
                    }
                    if(s[j] == ")" && count2 <= count1)
                    {
                        count2 += 1;
                        a = j
                        flag = true;
                    }
                }
                length += 1 + (a-i)
                len.push(length)
            }
        }
        if(flag == false)
        {
            console.log(0)
        }
        else
        {
            var high = len[0]
            for( var k = 0; k < len.length ; k++ )
            {
                if( len[k] > high)
                {
                    high = len[k];
                }
            }
            console.log(high)
        }
    }
}


runProgram(2, 6, "((()")


