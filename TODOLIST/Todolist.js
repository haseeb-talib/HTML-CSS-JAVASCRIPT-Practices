const userInput = document.getElementById("input");
const button = document.getElementById("add-btn");
const inputList = document.getElementById("list");

// Function to add task
function addTask() {
  const task = userInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.style.margin = "10px 0";
  li.style.padding = "10px";
  li.style.background = "#fff";
  li.style.borderRadius = "10px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";

  // Task text
  const span = document.createElement("span");
  span.textContent = task;
  span.style.flex = "1";
  span.style.cursor = "pointer";

  // Mark done when clicking on text
  span.onclick = function () {
    span.classList.toggle("done");
    if (span.classList.contains("done")) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  };

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.marginLeft = "10px";
  editBtn.style.padding = "5px 10px";
  editBtn.style.border = "none";
  editBtn.style.borderRadius = "5px";
  editBtn.style.background = "#ff8177";
  editBtn.style.color = "#fff";

  editBtn.onclick = function () {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  };

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.style.padding = "5px 10px";
  delBtn.style.border = "none";
  delBtn.style.borderRadius = "5px";
  delBtn.style.background = "#b12a5b";
  delBtn.style.color = "#fff";

  delBtn.onclick = function () {
    li.remove();
  };

  // Add elements to li
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  // Add li to list
  inputList.appendChild(li);

  // Clear input
  userInput.value = "";
}

// Add task on button click
button.addEventListener("click", addTask);

// Add task on pressing Enter key
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
