const Start = 1;
var End;
if(isNaN(process.argv[2]))
{
    End = 100;
}
End = parseInt(process.argv[2]);
const Constraints = [3,5,7,11,13,17];
var ConstraintInUse = [false,false,false,false,false,false];
for(let index = 3;index < process.argv.length;index++)
{
    if(process.argv[index] == 'N')
    {
        break;
    }
    CurConstraint = parseInt(process.argv[index]);
    for(let index2 = 0;index2 < Constraints.length;index2++)
    {
        if(CurConstraint == Constraints[index2])
        {
            ConstraintInUse[index2] = true;
            break;
        }
    }
}
const Words = ['Fizz','Buzz','Bang','Bong','Fezz'];
for(let index = Start;index <= End;index++)
{
    var curprintdata = [];
    var printstring = '';
    var constraintcheck = check(index,Constraints,ConstraintInUse);
    if(constraintcheck.length == 0)
    {
        console.log(index);
        continue;
    }
    else
    {
        for(let index2 = 0;index2 < constraintcheck.length;index2++)
        {
            manageoutput(constraintcheck[index2],curprintdata);
        }
    }
    for(let index2 = 0;index2 < curprintdata.length;index2++)
    {
        printstring = printstring + Words[curprintdata[index2]];
    }
    if(curprintdata.length == 0)
    {
        console.log(index);
        continue;
    }
    console.log(printstring);
}

function check(index,criteria,validity)
{
    var divisible = [];
    for(var i = 0;i < criteria.length;i++)
    {
        if(index % criteria[i] == 0 && validity[i])
        {
            divisible.push(criteria[i]);
        }
    }
    return divisible;
}

function manageoutput(rule, printdata)
{
    switch(rule)
    {
        case 3:
            printdata.push(0);
            break;
        case 5:
            printdata.push(1);
            break;
        case 7:
            printdata.push(2);
            break;
        case 11:
            printdata.splice(0,printdata.length,3);
            break;
        case 13:
            location = 0;
            for(let index3 = 0;index3 < printdata.length;index3++)
            {
                if(Words[printdata[index3]][0] == 'B')
                {
                    location = index3;
                    break;
                }
            }
            printdata.splice(location,0,4);
            break;
        case 17:
            printdata.reverse();
            break;
    }
}