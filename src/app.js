var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silveredr", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "green", "red", "silver", "purple", "silver", "crimson"
];
// Progression 1: Add ___ chocolates of ____ color
var addchoco=chocolates;
var addchocola=addchocolates(chocolates,'black',4);
function addchocolates(chocola,color,count)
{
    if(count==0)
    {
        return "number cannot be zero or negative";
    }
    for(var  i=0;i<count;i++)
    {
        chocola.unshift(color);
    }
    return chocola;
}

//Progression 2: Remove ___ chocolates from the top the dispenser

var chocolate=removechocolates(chocolates,9);
function removechocolates(chocolate,num)
{
    if(num==0)
    {
        return "number is invalid";
    }
    for(let i=0;i<num;i++)
    {
        chocolate.shift();
    }
    return chocolate;
}

//Progression 3: Dispense ___ chocolates
var chocolate=removechocolates(chocolates,8);
function removechocolates(chocolate,num)
{
    if(num==0)
    {
        return "number is invalid";
    }
    for(let i=0;i<num;i++)
    {
        chocolate.pop();
    }
    return chocolate;
}

// Progression 4: Dispense ___ chocolates of ____ color
var chocolate=dispenseChocolatesOfColor(chocolates,4,'purple');
//console.log(chocolate);
function dispenseChocolatesOfColor(chocolate,number, color)
{
    console.log(chocolate.length);
    var index;

    // if(number==0)
    // {
    //     return "number is invalid";
    // }
    // // index=chocolate.indexOf(color);
    // // console.log(index);
    var count=0;
    for(let i=chocolate.length-1;i>=0;i--)
    {
        //chocolate.pop();
        if(chocolate[i]==color)
        {
            index=i;
            break;
        }
    }
    for(let i=index;i>0;i--)
    {
        if(count==number)
        {
            break;
        }
        count++;
    }
}

// //Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
// var listchoco=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
// var numofchoco=chocolates.filter(function(listchoco,color)
// {
//     return ;
// })

// //Progression 6: Sort chocolates based on count in each color. Return array of colors

 function myfunc(chocolates)
 {
    chocolates.sort(function(a,b)
    {
        return b-a
    });
    console.log();
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
var chocolatecolor=changechocolatecolor(chocolates,4, 'pink', 'gold');
console.log(chocolatecolor);
function changechocolatecolor(chocolatecolor,number, color, finalColor)
{
    var count=0;
    for(let i=0;i<chocolatecolor.length;i++)
    {
        if(count==number)
        {
            break;
        }
        if(chocolatecolor[i]==color)
        {
            chocolatecolor[i]=finalColor;
            count++;
        }
    }
    return chocolatecolor;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

var chocolatecolour=changeChocolateColorAllOfxCount(chocolates, 'green', 'orange');
console.log(chocolatecolour);
function changeChocolateColorAllOfxCount(chocolatecolour, color, finalColor)
{
    var count=0;
    for(let i=0;i<chocolatecolor.length;i++)
    {
        if(chocolatecolour[i]==color)
        {
            chocolatecolour[i]=finalColor;
            count++;
        }
    }
    return chocolatecolour;
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
