let str1 = "London is the capital of Great Britain";
let a = str1.substring(0,6); 
console.log(`first word is ${a}`); //  l2.t1


let sln = str1.length
if (sln.length===0) {
    sln = "string is blank";
}
else {
  sln = "string is not blank";
}
console.log (`sln=${sln}`); //  l2.t2

abbrev = function (str1) {
    let split = str1.split(" ");
    if (split.length > 1) {
        return (split[0].charAt(0) + "." + split[1].charAt(0) + ".");
    }
    return split[0];
};
console.log(abbrev("Sofiya Malko")); //  l2.t3

let o = 2;
let p = 4;
let c;
if (o>p) {c=o;
} else if (p>o)
{c=p;}
console.log (`c = ${c}`) //  l2.t4

let m = 16;
let d = -18;
let k = 21;
if (m>k && m>k)
{if (d>k)
    {console.log(m + ',' + d + ',' + z);
}
else
    {console.log(m + ", " + k + ", " +d);}
}
else if (d>m && d>k)
{
    if (m>k)
    {console.log(d + ", " + m + ", " +k);}
    else
    {console.log(d + ", " + k + ", " +m);}
}
else if (k>m && k>d)
{
    if (m>d)
    {console.log(k + ", " + m + ", " +d);}
    else
    {console.log(k + ", " + d + ", " +m);}
}      // l2.t5 