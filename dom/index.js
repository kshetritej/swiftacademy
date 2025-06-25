
// const arr = ["array 1", "array2", "array 3"];
//index 0,1,3,4
//arr.lenght = 3

// for(let i=0; i< arr.length; i++) {
//    const newEl = document.createElement("div");
//    newEl.textContent = arr[i]
//    body.appendChild(newEl);
// }
const body = document.body; //select body of document

const container = document.createElement("div"); //create new element div
container.classList.add("container"); // add class "container" in div
const para1 = document.createElement("p");
para1.classList.add("title");
para1.textContent = "This is paragraph!";

body.appendChild(container); //append the element to body
container.appendChild(para1);



container.style.color = "red";
container.setAttribute("id", "containerId");
container.setAttribute("style", "background-color: blue; border-radius: 0.5rem;")
// <div style="background-color: blue;"></div>

container.style.padding = "2rem";
container.style.color= "white";
// container.setAttribute("style", "border-radius: 0.5rem")

const firstDiv = document.getElementById("firstDiv"); //get element by id
firstDiv.style.background = "purple";
firstDiv.style.padding = "2rem";

const secondDiv = document.getElementsByClassName("secondDiv")[1];
secondDiv.style.background = "green";

const thirdDivWithSameClass = document.querySelector(".secondDiv");
thirdDivWithSameClass.style.background = "pink";


const allQS = document.querySelectorAll(".secondDiv")[0]
allQS.addEventListener("click", () => {
    allQS.style.background = "red";
});






//** CREATING AND APPENDING(ADDING) INTO DOM(DOCUMENT OBJECT MODEL) ***/
//createElement
//appendChild
//classList.add()
//textContent

//*** SELECTION ***/
//getElementById --> only return one element
//getElementByClassName --> return collection of elements, can be accessed using index eg. [0]
//querySelector --> returns first occcuring element
//querySelectorAll --> same as getElByClassName, but needs to specify the selector (., #)


//** FOR STYLING  **//
//element.style.property = "value";
//eg. container.style.background = "red";
//element.setAttribute("style", "background-color: red");