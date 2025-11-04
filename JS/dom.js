// const toggletheme=(color)=>{
//     document.body.style.backgroundColor=color
    
// }




// const btn= document.getElementById("btn");
//  const heading=document.getElementById("heading");
// // const allelements=document.querySelectorAll("*");
//  btn.addEventListener("click",function(){
//     //   btn.innerText="clicked on the time"
//     //   console.log("clicked on the time");
//     //   toggletheme("pink");
//       const currentColor=document.body.style.backgroundColor;
//       if(currentColor==="black"){
//           toggletheme("white");
//           heading.style.color="black";
//       }else {
//           toggletheme("black");
//           heading.style.color="white";

//       }
//       console.log(currentColor);
//  })




// const togglebtn = document.getElementById("toggleTheme");
// const htmlTag = document.documentElement;
// console.log(htmlTag.classList.contains("dark"));

// if(localStorage.getItem("theme")=="dark"){
//     htmlTag.classList.add("dark");
// }else{
//     htmlTag.classList.add("light");
// }
// console.log(localStorage.getItem("theme"));

// togglebtn.addEventListener("click", () => {
//   console.log(htmlTag.classList.contains("dark"));

//   if (htmlTag.classList.contains("dark")) {
//     htmlTag.classList.remove("dark");
//     htmlTag.classList.add("light");
//     localStorage.setItem("theme","light")
//   } else {
//     htmlTag.classList.remove("light");
//     htmlTag.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
// });


const inputField = document.getElementById("userInput");
const saveBtn = document.getElementById("saveBtn");
const inputList = document.getElementById("inputList");

// Load stored inputs from localStorage
// function loadInputs() {
//   inputList.innerHTML = ""; // clear list
//   const inputs = JSON.parse(localStorage.getItem("userInputs")) || [];

//   inputs.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     inputList.appendChild(li);
//   });
// }

function loadInputs() {
      inputList.innerHTML = ""; // clear list
      const inputs = JSON.parse(localStorage.getItem("userInputs")) || [];

      inputs.forEach((item, index) => {
        const li = document.createElement("li");

        // Normal text show karna
        const span = document.createElement("span");
        span.textContent = item;

        // === Edit Button ===
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function () {
          // Input box banao jahan text edit hoga
          const editInput = document.createElement("input");
          editInput.type = "text";
          editInput.value = item;

          // Save button for edit
          const saveEditBtn = document.createElement("button");
          saveEditBtn.textContent = "Save";
          saveEditBtn.onclick = function () {
            inputs[index] = editInput.value; // update value
            localStorage.setItem("userInputs", JSON.stringify(inputs));
            loadInputs(); // refresh list
          };

          // Clear li aur new edit box daalo
          li.innerHTML = "";
          li.appendChild(editInput);
          li.appendChild(saveEditBtn);
        };

        // === Delete Button ===
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
          inputs.splice(index, 1); // remove item
          localStorage.setItem("userInputs", JSON.stringify(inputs));
          loadInputs();
        };

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        inputList.appendChild(li);
      });
    }


// Save new input
function saveInput() {
  const value = inputField.value.trim();
  if (value === "") {
    alert("Please enter something!");
    return;
  }

  // Get existing inputs or create new array
  const inputs = JSON.parse(localStorage.getItem("userInputs")) || [];

  console.log(inputs);
  

  // Add new input
  inputs.push(value);

  // Save updated array to localStorage
  localStorage.setItem("userInputs", JSON.stringify(inputs));

  // Clear input field
  inputField.value = "";

  // Refresh displayed list
  loadInputs();
}

// Event listener
saveBtn.addEventListener("click", saveInput);

// Load saved inputs when page refreshes
window.onload = loadInputs;