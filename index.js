// //type conversion (string, number, booleans)
// // typeof to check
// // string to number => Number(<variable_name>);
// // String(); , Boolean();

// let count=Number(document.getElementById("countLabel").innerHTML);

// function countInc(){
//     count =count +1;
//     document.getElementById("countLabel").innerHTML=count;
// }
// function countDec(){
//     count =count -1;
//     document.getElementById("countLabel").innerHTML=count;
// }
// function countReset(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML=count;
// }



//Math() => Math.PI(),Math.E()
// Math.round() = round 
// Math.floor() = round the no down
// Math.ceil() = round the no. up
// Math.trunc() = remove decimal
// Math.pow(number , power);
// Math.log();
// Math.sin();
// Math.abs();
// Math.sign(x);
// Math.max(x,y,z);   ....min()



// // .checked = for checkbox or radio button elements 
// // eg: 
// if(myCheckBox.checked){
//          <code>
//      }

// ternary operator = a shortcut to if{} and else{} statements
// Helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse ;
// // eg:
// let age = 21;
// let message = age >=18 ? "Your an adult":"You a minor";



// //string methods
// let userName = "John Adhikari";

// userName.charAt(0) => gives J
// userName.indexOf("o") => gives 1  similarly .lastIndexOf(a)=>10
// userName.length;
// userName = userName.trim(); => JohnAdhikari
// userName.toLowerCase(), userName.toUpperCase(), userName.repeat(n)
// userName.startsWith(" "); => false and also endsWith() 
// userName.includes(" ")
// // eg:
// let phoneNumber= "984-909-9677"
// phoneNumber = phoneNumber.replaceAll("-","");
// phoneNumber = phoneNumber.padStart(15, "0"); //pad this no. with 0 until its 15 characters long from the start and for the end use padEnd(15,"0");
// console.log(phoneNumber);



// // string slicing = creating a new string from a portion of another string
// // sting.slice(start,end)  
// const fullName = "John Adhikari";
// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5,13)
// // not so flexible so inorder to be applied to all lengths of strings:
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// // eg:
// const email="johnadhikari99@gmail.com";
// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") +1)



// // Method chaining = calling one method after another in one continuous line of code.

// // -------- NO METHOD CHAINING -------
// let userName = window.prompt("Enter your username: ");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();

// userName = letter + extraChars;


// // -------- METHOD CHAINING -------
// userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();


// = assignment operator
// == comparison opeartor (compare if values are equal)
// === strictly equally operator (compare if values and data types are equal)
// != inequality operator
// !== strictly inequality operator

// let loggedIn = false;
// let username="";
// let password="";
// while(!loggedIn){
//     userName = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your password: ");
//     if(userName === "" || username === null && password === "" || password === null){
//         alert("Invalid username or password");
//     }
//     else{
//         loggedIn=true;
//         alert(`Signed in successfully!
//         Name: ${userName}
//         Password: ${password}`);
//     }
// }


// //number guessing game
// const range = window.prompt("Enter the range of number (start - end): ");
// const minNo = Number(range.trim().slice(0, range.indexOf("-")));
// const maxNo = Number(range.slice(range.indexOf("-")+1));
// const gap = maxNo - minNo;
// const compGuess = Math.floor((Math.random() * ( gap - 1 )) + ( minNo + 1));
// let userGuess = window.prompt(`Enter a number between ${minNo} and ${maxNo} : `);
// let attempts= 0;
// do{
//     while(userGuess < minNo || userGuess > maxNo){
//         userGuess = window.prompt(`Please enter A number BETWEEN ${minNo} and ${maxNo} : `);
//     }
//     attempts +=1;
//     if(userGuess==compGuess){
//         alert(`You Guessed correctly ✅
//         Computer : ${compGuess} Your Guess : ${userGuess}
//         It took you ${attempts} attempts`);
//     }
//     else{
//         alert(`You guessed wrong ❌
//         Your Guess : ${userGuess} Attempts : ${attempts}`);
//         userGuess = window.prompt(`Enter another number between ${minNo} and ${maxNo} : `);
//     }
// }while(userGuess != compGuess);


// // array
// .sort() => sorts the elements of the array in alphabetical order
// .sort().reverse() => sorts the elements in reverse order


// // spread operator = ... allows an iterable such as an
//                      array or string to be expanded into
//                      seperate  elements ( unpack the elements) 
// short ma ... le bracket hatauxa

// let numbers = [1,2,3,4,5];
// // let maximum = Math.max(numbers) = doesnt work because its an array
// let maximum = Math.max(...numbers);

// let username = "John adhikari";
// let letters = [...username]; // // converts to an array of letters

// let fruits = ["apple", "mango", "banana"];
// let vegetables = ["carrot", "potato", "celery"]
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// // rest parameters = (...rest) allow a function work with a variables number of arguments by bundling them into an array 
// // spread = exapnds an array into seperate elements
// // rest = bundeles seperate elements into  an array

// function openFridge(...foods){
//     console.log(...foods);
// }
// const food1 = "apple";
// const food2 = "mango";
// const food3 = "banana";
// const food4 = "carrot";
// const food5 = "potato";
// openFridge(food1, food2, food3, food4, food5);

// function combineStirng(...name){
//     return name.join(" ")
// }
// const fullName = combineStirng("Mr.", "Spongebob","Squarepants","III");



// // dice roller
// const rollResult = document.getElementById("result");
// let rolls = [];

// function rollDice(){
//     const numOfDice=document.getElementById("inputBox").value;
//     rolls = [];
//     for(let i = 0; i < numOfDice; i++){
//         let res = Math.floor(Math.random() * 6) + 1;
//         rolls.push(res);
//     }
//     rollResult.innerHTML = `Dice: ${rolls.join(", ")}`;
// }



// // random password generator 
// function generatePassword(length , includeLowercase, includeUppercase, includeNumbers, includeSymbols){

//     const lettersLowercase = "qwertyuiopasdfghjklzxcvbnm";
//     const lettersUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
//     const numbers = "1234567890";
//     const symbols = "!@#$%^&*()_+-=";
//     const allowedChars = lettersLowercase + lettersUppercase + numbers + symbols;
//     let password = "";
//     for(let i = 0; i < length; i++){
//         charIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[charIndex];
//     }
//     return password;
// }

// const passwordLength = 12;
// const includeLowercase = true; 
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// console.log(`Generated Password : ${generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)}`);



// // callback = a function that is passedas an argument to another function
// // used to handle asynchronous operations:
// // - reading a file 
// // - network requests 
// // - interacting with databases
// // like: " hey, when you are done call this next "
// hello(goodbye);
// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function goodbye(){
//     console.log("goodbye!");
// }



// // forEach() = method used to iterate/loop over the elements of an array and apply a specified function (callback) to each element
// // array.forEach(callback)
// // element, index, array are provided
// let numbers = [1,2,3,4,5];
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element , index , array){
//     array[index] = element * 2;
// }

// function display(elements){
//     console.log(elements);
// }

// // eg:
// let fruits = [ "apple", "banana", "orange", "mango"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function capitalize(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1,array[index].length) ;

// }

// function display(elements){
//     console.log(elements);
// }



// // map() = accepts a callback and applies that function to each element of an array, then return a NEW ARRAY
// let numbers = [1,2,3,4,5];
// const array = numbers.map(square);
// console.log(array);

// function square(element){
//     return Math.pow(element,2);
// }
// // eg:
// const dates = ["2064-12-03", "2008-03-16", "2001-09-11"];
// const rearrangedDate = dates.map(formatDates);
// console.log(rearrangedDate);
// function formatDates(elements){
//     const parts = elements.split("-");
//     return `${parts[2]}-${parts[1]}-${parts[0]}` 
// }



// // filter() = creates a NEW ARRAY by filtering out elements
// let numbers = [1,2,3,4,5,6,7]
// const evenNum = numbers.filter(isEven);
// function isEven(element) {
//     return element % 2 === 0 ;
// }



// // .reduce() = reduce the elements of an array to a SINGLE value 
// const prices = [ 5,30,10,25,20];
// const total = prices.reduce(sum);

// function sum(previous, next){
//     return previous + next;
// }



// // function expressions = a way to define function as values or variables
// // used in:
// // - callbacks in asynchronous operations
// // - higher order functions
// // - closures
// // - event listeners

// const hello = function(){
//     console.log("hello");
// }
// hello();

// setTimeout(function(){
//     console.log("hi");
// },3000);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const box=document.querySelector("#box");

// const squares = numbers.map(function(element){
//     return Math.pow(element,2);
// });

// numbers.forEach(function(num){
//     return box.innerHTML +=`<button>${num}</button>`;
// })



// // arrow function = a short way to write function expressions good for simple functions that you use only once
// // (parameters) => some code

// setTimeout(()=>{
//     console.log(`Hello`);
// },2000)

// const numbers = [1,2,3,4,5,6,7,8,9];
// const box=document.querySelector("#box");

// box.innerHTML= numbers.map((element)=>{
//     return `<button>${element}</button>`}).join("")



// // this = reference to the object where THIS is used
// // (the object depends on the immediate context)
// // person.name = this.name
// const person1 = {
//     name: "SpongeBob",
//     favFood: "hamburgers",
//     sayHello: function() { console.log (`Hi I'm ${this.name} and my favorite food is ${this.favFood}`)}
// }



// // constructor = special method for defining the properties and methods of objects

// function Car(make,year,model,color){
//     this.make = make,
//     this.year = year,
//     this.model = model,
//     this.color = color
// }
// const car1 = new Car("Ford",2024,"Mustang", "black");



// // classes = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions like  static keyboard, encapsulation inheritance

// class Product {
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     calculateTotal(salesTax, discount){
//         return this.price + (this.price * salesTax) - (this.price * discount) ;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Product: ${this.price}`);
//     }
// }

// const salesTax = 0.13;
// const discount = 0.07;

// const product1 = new Product("t-shirt", 500);
// const product2 = new Product("pant", 600);

// const total = product1.calculateTotal(salesTax,discount);



// // static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class 
// // (class owns anything static, not the objects)
// // eg:
// class MathUtil{
//     static PI = 3.14159;

//     static getCircumference(radius){
//         return (2*this.PI*radius).toFixed(2);
//     }

// } 
// console.log(MathUtil.getCircumference(7));
// console.log(MathUtil.PI);



// // inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child). Helps with code reusability
// // eg:
// class Animal{
//     alive = true;

//     eat(){
//         console.log(`The ${this.name} is eating. `);
//     }
//     sleep(){
//         console.log(`The ${this.name} is sleeping. `);
//     }
// }
// class Rabbit extends Animal {
//     name = "rabbit";
//     run(){
//          console.log(`The ${this.name} is running.`);
//     }
// }
// class Sparrow extends Animal{
//     name = "sparrow";
//     fly(){ 
//          console.log(`The ${this.name} is flying.`);
//     }
// }
// const rabbit = new Rabbit();
// const sparrow = new Sparrow();



// // super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// // this = this object
// // super = the parent (super.eat();)



// // getter = special method that makes a property readable
// // setter = special method that makes a property writeable
// // validate and modify a value when reading/writing a propety
// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth>0){
//             this._width = newWidth;
//         }
//         else{
//             console.log("Width must be positive");
//         }
//     }
//     set height(newHeight){
//         if(newHeight>0){
//             this._height = newHeight;
//         }
//         else{
//             console.log("Height must be positive");
//         }
//     }
//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }
//     get height(){
//         return  `${this._height.toFixed(1)}cm`;
//     }

//     get area(){
//         return `${(this._height * this._width).toFixed(1)}cm^2`;
//     }
// }
// const rectangle = new Rectangle(3,4);



// // destructuring = extract value from arrays and objects, then assign them to variables in a conveninet way
// // [] = to peroform array destructuring 
// // {} = to perform object destructuring
// // eg:

// // swapping
// let a=1;
// let b=2;
// [a,b] = [b,a];

// // swap two elements in an array
// const colors = ["white","green","blue","black","red"];
// [colors[0], colors[4]] = [colors[4], colors[0]];

// // assign array elements to variables 
// const colors = ["white","green","blue","black","red"];
// const [firstColor,secondColor,thirdColor, ...extraColors] = colors;

// // extract values from objects
// function displayPerson({firstName,lastName,age,job="unemployed"}){
//     console.log(`name = ${firstName} ${lastName}`);
//     console.log(`age = ${age}`);
//     console.log(`job = ${job}`);

// }
// const person1 = {
//     firstName : "Spongebob",
//     lastName : "Squarepants",
//     age: 30,
//     job: "cook"
// }
// const person2 = {
//     firstName : "Patrick",
//     lastName : "Star",
//     age : 40
// }
// displayPerson(person1);



// // array of objects 
// const fruits = [{name:"apple", color:"red", calories:95},
//                 {name:"orange", color:"orange", calories:45},
//                 {name:"banana", color:"yellow", calories:105},
//                 {name:"coconut", color:"white", calories:37}];
// // forEach()
// fruits.forEach(fruit => console.log(fruit.name));
// // map()
// const fruitName = fruits.map(fruit => fruit.name);
// // filter()
// const yellowFruit = fruits.filter(fruit => fruit.color==="yellow");
// // reduce(accumulator,element)
// const maxCal = fruits.reduce((previous,next) =>
//      next.calories > previous.calories ? next : previous);



// // sort() = method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical order  Lexicographic = (alpahbet + numbers + symbols) as strings
// // eg: fruits.sort() 

// numbers = [1,5,3,4,7,8,9,6,10,2];
// numbers.sort((a,b)=> a-b); 
// // If a - b is negative, a comes before b.
// // If it's positive, b comes before a.
// // If it's 0, they remain unchanged relative to each other

// // for strings
// const names = ["ram","shyam","hari","john","spongebob"];
// names.sort((a,b) => a.localeCompare(b));
// // localeCompare() compares two strings alphabetically, considering language-specific rules.



// // date objects = objects that contain values that represent dates and times these date objects can be changed and formatted
// // Date(year, month, day hour, minute, second, ms)
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();



// // // closure = a function inside of another function, the inner function has access to the variables and scope of the outer function. Allow for private variables and state maintenance.
// // Used frequently in JS framework: React, Vue, Angular

// function createGame(){
//     let score = 0;
//     function increaseScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//     }
//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//     }
//     function getScore(){
//         return `${score}pts`;
//     }

//     return {increaseScore,decreaseScore,getScore};
// }

// const game = createGame();



// // setTimeout() = function in js that allows you to schedule the execution of a function after an amount of time (milliseconds).
// // setTimeout(callback, delay);
// // clearTimeout(timeoutId) = can cancel a timeout when it triggers

// const timeoutId = setTimeout(()=> windows.alert(`hello`), 3000);
// clearTimeout(timeoutId);



// // ES6 modules = an external file that contains reusable code that can be imported into other js files. Write reusable code for many different apps. Can contain variables, classes, functions ... and more
// // Introduced as part of ECMAScrpit 2015 update
// // eg:
// import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";
// console.log(PI);
// const circumference = getCircumference(7);
// console.log(circumference);



// // synchronous = Executes line by line consecutively in a sequential manner code that waits for an operation to complete.
// // asynchronous = allows multiple operations to be performed concurrently without waiting, Doesnt block the execution flow and allows the program to continue, Used in (I/O operations, network requests , fetching data)
// // Handled with : Callbacks , Promises , Async/Await
// //eg:
// function func1(callback){
//     setInterval(()=>{console.log('Task 1');
//                     callback()} ,3000);
// }
// function func2(){
//     console.log('Task 2');
// }
// func1(func2);



// // Error = An object that is created to represent a problem that occurs
// // Occur often with user input or establishing a connection 

// // to handle error we can use:

// // try { } = Encloses code that might potentially cause an error
// // catch { } = Catch and handle any thrown Errors from try { }
// // finally { } = (optional) Always executes. Used mostly for celan up eg. close files, close connections, release resouces

// // eg:
// try {
//     console.lag("hello");
// }
// catch(error){
//     console.log(error);
// }
// console.log("You have reached the end");

// try{
//     const dividend = window.prompt("Enter a dividend: ");
//     const divisor = window.prompt("Enter a divisor: ");
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }
//     if(divisor == 0){
//         throw new Error("You cannot divide by zero");
//     }
//     const result = dividend/divisor;
//     console.log(result);
// }S
// catch(error){
//     console.log(error);
// }



// // DOM = DOCUMENT OBJECT MODEL
// // Object{} that reperesents the page you see in the web browser and provides you with an API to interact with it. Web browser constructs the dom when it loads an html document, and structures all the elements in a tree-like representation. Javascript can access the DOM to dynamically change the CONTENT, STRUCTURE, and STYLE of a web page.



// // element selectors = Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements from the DOM(DOCUMENT OBJECT MODEL)

// // document.getElementByID() = ELEMENT OR NULL
// // document.getElementsByClassName() = HTML COLLECTION
// // document.getElementByTagName() = HTML COLLECTION
// // document.querySelector(".className" or "#id") = ELEMENT OR NULL (returns the first match, only one element)
// // document.querySelectorAll() = NODELIST
// // document.querySelectorAll() and document.getElementByID() used often



// // DOM navigation = the process pf navigating through the struture of an html using javascript
// // .firstElementChild
// // .lastElementChild
// // .nextElementSibling
// // .previousElementSibling
// // .parentElement
// // .children

// // -----------.firstElementChild --------------------\
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const firstChildren = ulElement.firstElementChild;
//     firstChildren.style.backgroundColor = "yellow";
// } )

// // -----------.nextElementSibling --------------------
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow"

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow"

// // -----------.parentElement --------------------
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// // -----------.children --------------------
// const element = document.getElementById("fruits");
// const children = element.children;
// // .children gives an HTMLCollection (not an array), so we convert it using Array.from() to use forEach()
// Array.from(children).forEach(child=>{
//     child.style.backgroundColor = "yellow";
// });

// // or
// const element = document.getElementById("fruits");
// const children = element.children;

// children[1].style.backgroundColor = "yellow";



// // ------------------EXAMPLE 1-----------------

// // STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");


// // STEP 2 ADD ATRIBUTES/ PROPERTIES
// newH1.textContent = "I like apple!";
// newH1.id="myH1";
// newH1.style.color = "red";
// newH1.style.textAlign= "center";


// // STEP 3 APPEND ELEMENTS TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// // insertBefore(newElement, currentElement);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);


// // REMOVE HTML ELEMENT 
// // use removeChild();
// document.getElementById("box1").removeChild(newH1);


  
// // event listener = Listen for specific events to create interactive web pages.
// // events: click, mouseover, mouseout
// // .addEventlistener(event, callback);
// // eg: .addEventlistener("click", function);



// // eventListener = listen for sepcific events to create interactive web pages.
// // events: keydown, keyup, keypress
// // document.addEventListener(event, callback);

// let x = 0;
// let y = 0;
// let speed = 15; 
// const box = document.getElementById("box");

// document.addEventListener("keydown", event =>{
//     switch (event.key.toLowerCase()){
//         case "w":
//             y -= speed;
//             break; 
//         case "a":
//             x -= speed;
//             break;
//         case "s":
//             y += speed;
//             break;
//         case "d":
//             x += speed;
//             break;
//     }
//     box.style.top = y + "px";
//     box.style.left = x + "px" 
        
// })



// // HIDE/SHOW ELEMENTS
// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event =>{

//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myButton.textContent = "Hide";
//     }
//     else{
//         myImg.style.visibility = "hidden"
//         myButton.textContent = "Show"
//     }

// })



// // nodeList = Static collection of HTML elements by (id, class, element)
// // Can be created by using querySelelctorAll()
// // Similar to an array, but no (map, filter, reduce)
// // NodeList wont update automatically to refelect changes to the DOM

// let buttons = document.querySelectorAll(".myButton");

// // ADD HTML/CSS PROPERTIES 
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "green";
//     });
// } )

// // ADD AN ELEMENT
// // STEP 1
// const newButton = document.createElement("button");
// // STEP 2
// newButton.textContent = "Button 5";
// newButton.classList = "myButton";
// // STEP 3 append the button
// document.body.appendChild(newButton);
// buttons = document.querySelectorAll(".myButton");

// // REMOVE AN ELEMENT
// buttons.forEach(button => {
//     button.addEventListener("click", event =>{
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButton");
//         console.log(buttons);
//     })
// });



// // classList = Element property in js used to interact with an elements list of classes (CSS classes)
// // Allows you to make reusable classes for many elements across your webpage. 
// // add()
// // remove()
// // toggle(Remove if present, Add if not)
// // replace(oldClass, newClass)
// // contains()

// const myButton = document.getElementById("myButton");
// myButton.addEventListener("mouseover", event =>{
//     myButton.classList.toggle("hover");
// })
// myButton.addEventListener("mouseout", event =>{
//     myButton.classList.toggle("hover");
// })



// // Callback Hell = situation in js where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// // it is an old pattern to handle asynchronous functions. 
// // Use Promises + async/await to avoid Callback Hell



// // Promise = An object mannages asynchronous operations.
// // Wrap a Promise Object around {asynchronous code}
// // "I promise to return a value"
// // PENDING -> RESEOLVED OR REJECTED
// // new Promise((resolve, reject) => {asynchronus code})



// // Async/Await =  Async : makes a function return a promise
// // Await: makes an async function wait for a promise



// // JSON = (JavaScript Object Notation) data-interchange format. Used for exchanging data between a server and a web application.
// // JSON files {key:value} or [value1, value2, value3]

// // JSON.stringify() = converts a JS object to a JSON string
// // JSON.parse() = converts a JSON string to a JS object.

// fetch("people.json")
//     .then(response => response.json())
//     .then(value => value.forEach(value => console.log(value.name))).catch(error => console.error(error));
    


// // fetch = Function used for making HTTP requests to fetch resources. (JSON style data, images, files). Simplifies asynchronous data fetching in JS and used for interacting with APIs to retrieve  and send data asynchronously over the web.
// // fetch(url, {options})


// async function fetchData(){
//     try{
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const image = document.getElementById("pokemonImg")
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//         if(!response.ok){
//             throw new Error("Couldnt fetch resource");
//         }
//         const data = await response.json();
//         image.src = data.sprites.front_default;
//         image.style.display= "block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }

