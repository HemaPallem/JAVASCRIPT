/*console.log("first js code");
let courseName="Javascript";
console.log(courseName);
let age=24;
age=25;
console.log(age);
var price=22.8;
console.log(price,age);
const student = {
    fullName : "wer",
    cgpa : 9,
    ispass : true
    
};
console.log(student.ispass);*/
/*
const product = {
    name: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);
//condiational statements:
let age = 25;
age > 25 ? "adult" : "not adult";//simpler compact if-else 
if (age < 18){
    console.log("junior");
}
else if(age > 60){
    console.log("senior");
}
else{
    console.log("middle");
}
let mode="white";
let color;
if(mode == "dark"){
    color = "black";
}
else{
    color = "white";
}
console.log(color);
alert("hello!");//one time popup;
let name = prompt("enter your name:");//takes input from user
console.log(name);
//practice ques
let num = prompt("enter a number:");
if( num % 5 === 0 ){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not a multiple of 5");
}
//grade question;
let marks = prompt("enter your marks:");
let grade;
if(marks >= 80 && marks <=100){
    grade = "A";
}
else if(marks >= 70 && marks <=79){
    grade = "B";
}
else if(marks >= 60 && marks <=69){
    grade = "C";
}
else if(marks >= 50 && marks <=59){
    grade = "D"
}
else if(marks >= 0 && marks <=49){
   grade = "F";
}
else{
    console.log("Enter valid marks");
}
console.log("Your Grade is ",grade);
//for-of loop
let str = "hema pallem";
let size =0;
for ( let i of str){
    console.log(i);
    size++;
}
console.log("String size:",size);
//for in loop
let student = {
    name: "rahul",
    age: 20,
    cgpa: 9.5,
    isPass: true
};
for(let i in student){
    console.log(i,"=",student[i]);
}
//even numbers
let i;
console.log("Even Numbers:")
for(i=0;i<=100;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
let gameNum = 25;
let userNum = prompt ("Guess the number:");
while(userNum != gameNum){
    userNum = prompt ("Try again:");
}
console.log("Your guess is correct, the number is ",userNum);
//templateliterals
let obj = {
    item: "pen",
    cost: 10
};
let output = `Cost of the  ${obj.item} is ${obj.cost} rupees`; 
console.log(output);
let str1 = "Apna\nClg";
console.log(str1);
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());
let str2 = "hema";
console.log(str2.slice(1,3));
let str3 = "latha";
console.log(str2.concat(str3));
let str4 = "pallem";
console.log(str2+str4);
console.log(str2.replace(' hema' ,'e'));
console.log(str2.charAt(2));
//username generation
let fullName = prompt("Enter your full name without spaces");
let length = fullName.length;
//let userName= "@" + fullName + length;
let userName = "@".concat(fullName,length);
console.log(userName);
//Array
let marks=[10,20,30];
console.log(marks);
console.log("length of marks array",marks.length);
console.log("data type of marks",typeof(marks));
marks[0]=34;
console.log(marks);
//using for loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
console.log("for-of loop");
//using for of
for (let k of marks) {
    console.log(k);
}
let st=["hema","latha"];
for(let key of st){
    console.log(key.toUpperCase());
}
//practice question1

let student = [85,97,44,37,76,60];
console.log(student);
let sum=0
for(let i=0;i<student.length;i++){
    sum=sum+student[i];
}
console.log("Total marks:",sum);
let avg = sum/student.length;
console.log("average marks:",avg);
//Q2
let prices=[250,645,300,900,50];
console.log("Actual prices:",prices);
for(let i=0;i<prices.length;i++){
    prices[i]=prices[i]-prices[i]*0.1;
}
console.log("Offer prices:",prices);
//practice q3
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
for(let val=0;val<companies.length;val++){
    if(companies[val] === "Uber"){
        companies.splice(val,1,"Ola");
    }
}
console.log(companies);
companies.push("Amazon");
console.log(companies);
//Functions
function printVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='0' || str[i]==='i' || str[i]==='u'){
            count=count+1
            console.log(str[i]);
        }
    }
    console.log("no.of vowels in a given string:",count);
}
printVowels("hemalatha");
//arrowFunctions
const countVowels = (str) => {
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='0' || str[i]==='i' || str[i]==='u'){
            count=count+1
            console.log(str[i]);
        }
    }
    console.log("no.of vowels in a  string:",count);
}
countVowels("hemalatha");
//forEach loop in Array
let arr = [1,2,3,4,5,6];
arr.forEach(function printValue(val) {//val=each value at each index in array
    console.log(val);

});
//using arrow function\
let c=0;
arr.forEach((val)=>{
    c++;
});
console.log(c);
//q1
let A=[2,4,6,7];
A.forEach((val) => {
    let x=val**2;
    console.log("Square of ",val," is ",x);
});*
let A=[2,4,6,7];
let calSquare=(num) =>{
    console.log(num*num);
}
A.forEach(calSquare);


//array methods
//map
let d=[1,2,3,4];
d.map((val) => {
    console.log(val);
});
//new aray formation using map
let newArray=d.map((val) => {
    return val**2;
});
console.log(newArray);
//filter
let newArr=d.filter((val)=>{
    return val%2===0;
});
console.log("Even array:",newArr);
//redue
let output=d.reduce((result,val)=>{
    return result+val;
});
console.log("sum",output);
//largest element
let l=d.reduce((res,val)=>{
    if(res>val){
        return res;
    }
    else{
        return val;
    }
});
console.log("Largest number:",l);
//practice questions
//q1
let marks=[87,93,64,99,86];
let  newMarks=marks.filter((val)=>{
     return val > 90;
});
console.log("newMarks:",newMarks);
//q2
let n=prompt("Enter a number:");
let arr1 = [];
for(let i=1; i<=n; i++){
    arr1[i-1]=i;
}
console.log("Integer Array:",arr1);
let sum = arr1.reduce((res,val)=>{
    return res+val;
});
console.log("sum:",sum);
let product = arr1.reduce((res,val)=>{
    return res*val;
});
console.log("product of numbers:",product);*/
//DOM practice question
/*let h2=document.querySelector("h2");
console.dir(h2);
//h2.innerText=h2.innerText+" from Apna College Students";
h2.innerText=h2.innerText.concat(" from Apna College Students");
let divs=document.querySelectorAll(".class");
console.log(divs);
// divs[0].innerText="box 1";
// divs[1].innerText="box 2";
// divs[2].innerText="box 3";
let indx=1;
for (let div of divs){
    div.innerText=`unique value ${indx}`;//string inter polision
    indx++;
}*/
//DOM PART 2
/*style
let div=document.querySelector("div");
console.log(div.getAttribute("id"));
let para=document.querySelector("p");
let attrN=para.getAttribute("class");
console.log(attrN);
para.setAttribute("class","paragraph");
console.log(para.getAttribute("class"));
div.style.backgroundColor="yellow";*/
//div.style.visibility="hidden";
//inserting elements
/*let div=document.querySelector("div");

let newButn=document.createElement("button");
newButn.innerText="Click me";
console.log(newButn);
//div.append(newButn);
//div.prepend(newButn);
//div.before(newButn);
div.after(newButn);
let newHeading=document.createElement("h1");
newHeading.innerText="List of Items";
div.before(newHeading);
//deleting nodes
let para=document.querySelector("p");
para.remove();*/
//prectice queston q1
/*let newButton=document.createElement("button");
newButton.innerText="click me!!";
newButton.style.background="red";
newButton.style.color="white";
let body=document.querySelector("body");
body.prepend(newButton);
//q2
let p=document.querySelector(".paragraph");
//p.getAttribute("class");
//p.setAttribute("class","myclass");
//set attribute completely overides the old class styling and adds newclass stylings
//if we want to add the both old and new class styings to a element use classList
p.classList;
p.classList.add("myclass");*/
//Events
//1.mouse Events
let button1=document.querySelector(".button1");
let body=document.querySelector("body");
/*handler1 =( )=>{
  body.style.background="black";
}
handler2 =( )=>{
    body.style.background="white";
  }
let box=document.querySelector("#box");
box.onmouseover = () =>{
    console.log("You are in the div");
}
button1.addEventListener("click",handler1);
button1.addEventListener("dblclick",handler2);*/
let mode="light";
button1.addEventListener( "click",() =>{
    if(mode==='light'){
        mode='dark';
        body.style.background="black";
    }
    else{
        mode='light';
        body.style.background="white";
    }
});


