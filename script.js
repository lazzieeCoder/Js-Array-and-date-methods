//get methods
//toDateString()
var a = new Date();//date object
console.log(a.toDateString());//Thu jul 27 2023
//getDate()
var b = new Date();//date object
console.log(b.getDate()); //27
//getFullYear()
var c = new Date();//date object
console.log(c.getFullYear()); //2023
//getMonth()
const d = new Date();//date object
console.log(d.getMonth());//6
const e = new Date();
console.log(e.getDay());
console.log(e.getHours());
console.log(e.getMinutes());
console.log(e.getSeconds());
console.log(e.getMilliseconds());
console.log(e.getTime());

//set Methods
const f = new Date();
f.setDate(45);
console.log(f)
f.setFullYear(2020,5,26);
console.log(f)
f.setHours(8);
console.log(f);
f.setMinutes(45);
console.log(f);
f.setSeconds(55);
console.log(f);
f.setMilliseconds(999);
console.log(f);
f.setMonth(1);
console.log(f);
console.log(f.getTime());
f.setTime(1690437220346)
 console.log(f);
//-----------------------------------//
//Js Array Methods
var array = [1,2,3];
console.log(array.toString()); // "1,2,3"
var a = ["a", "b", "c"]
console.log(a.push("z"));// ["a","b","c","z"]
console.log(a);
console.log(a.pop());// ["a","b","c"]
console.log(a);
console.log(a.unshift("x"));//["x","a","b","c"]
console.log(a);
console.log(a.shift());// ["a","b","c"]
console.log(a);
var a = [1,2] , b = ["a","b"] , c = ["x"];
var concatarray = a.concat(b,c); 
console.log(concatarray); // [1,2,"a,"b","x"]

//sort
var a = [8,5,2,58] , b =["x","b","f","a"]
console.log(a.sort()); // [2,5,8,58]
console.log(b.sort()); // ["a","b","f","x"]

//splice(index,toindex,e1,..)
var arr = ["a","b","c","d"];
console.log(arr.splice(1,3,"x")); // [b,c,d]
console.log(arr); // ["a","x"]

//slice(start,end)
var abc = [11,22,33,44,55]
console.log(abc.slice(2,4));
console.log(abc);// [33,44] => new array

//reverse
var a = ["a","b", "mern"];
console.log(a.reverse());  

//includes
var a = [1,2,3,"abc"];
console.log(a.includes(2));//true
console.log(a.includes("abc"));//true
