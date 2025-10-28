// let a=10;
// a=a+1;
// // console.log(a);
// console.log("json");
// let arr=[1,"nan",3,4];
// arr.push("OG");// last it is add
// arr.unshift("KGF");//add at the first
// console.log(arr);
// arr.pop();//remove at last
// arr.shift();//remove at first
// console.log(arr);

// // use the objects
// let movie=[{
//     name:"bahu",
//     dict:"ss.raj",
//     actor:"prabhas",
//     rating:5
// },
// {name:"bahu",
//     dict:"ss",
//     actor:"prabhas",
//     rating:5
// }]
// console.log(movie[0].dict);
// console.log(movie[1].dict);

// Functions
// function sum(a,b){
//     return a+b;
// }
// result=sum(1,5);
// console.log(result);
// // details("jyooo",66)
// function details(name,age){
//     console.log("My name is "+name+ " and age is "+age );
//      console.log(`My name is ${name}  and age is ${age} `);
// }
// details("jyoo",21);

// what is call back function:passing one function as an argument to another function
// what is set timeout
// function cal(a){
//     return a;
// }
// function sum(a,b){
//     return a+b;
// }
// cres=cal(sum(1,3));   //call back
// console.log(cres);

// set timeout
// setTimeout(function(){
//     console.log("hello");
// },10000)
console.log("hello1")
console.log("hello2")
setTimeout(function(){        // asynchronous operation
 console.log("hello");
},3000)
console.log("hello3")

