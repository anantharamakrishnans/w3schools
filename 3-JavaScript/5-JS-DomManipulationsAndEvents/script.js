console.log("jS dom manipulations")

// document.body.style.background="lightblue";
// const h1element = document.createElement("h1");
// h1element.textContent = "Dynamically added heading";
// document.body.append(h1element);

/* 1. Using some standard document.getElement*() functions. */

// const h2 = document.getElementsByTagName("h2");
// console.log('h2', h2); // Collection
// console.log('h2[0]', h2[0]); // The actual h1 element

// const p = document.getElementById("p1");
// console.log('p',p); // Single HTML Element

// const button = document.getElementsByClassName("btn");
// console.log('button',button); // Collection

// /* 2. Using document.querySelector to return the first occurence. */ 

// const firstPara = document.querySelector("p");
// console.log('firstPara', firstPara);

// const selectP2 = document.querySelector("#p2");
// console.log('selectP2', selectP2);

// const selectBtn = document.querySelector(".btn");
// console.log('selectBtn', selectBtn);

/*  Demonstrate changing the HTML content using innerHTML and innerText.
    <p>html content</p>
*/

// document.querySelector("#p1").innerText = "<b>This is first paragraph</b>";
// document.querySelector("#p2").innerHTML = "<b>This is second paragraph</b>";


// const image = document.createElement("img"); 

// // Set properties of <img>
// image.src = 'https://hbr.org/resources/images/article_assets/2020/05/May20_27_933445788_464881289-2.jpg';
// image.width = 300;
// image.style.display = 'block';
// image.style.marginTop = 10;

// // Append it
// document.querySelector("#div1").append(image);


// document.getElementById("myBtn").onclick = displayDate;

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

const counterBtn = document.querySelector("#counter");
const resultSpan = document.querySelector("#result");
let count = 0;

counterBtn.addEventListener("click", function(){
    count++;
    result.innerHTML = count;
})


// const inputForm = document.querySelector("#name");
// const greetBtn = document.querySelector("#greet");
// let nameOutput = "";

// inputForm.addEventListener("change", function(event){
//     nameOutput = event.target.value;
//     console.log(nameOutput);
// });

// greetBtn.addEventListener("click", function(){
//     alert(`Hello ${nameOutput}`);
// })