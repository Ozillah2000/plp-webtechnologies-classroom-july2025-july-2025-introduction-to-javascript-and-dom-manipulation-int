/*****************************************************
 * Part 1: Basics - Variables & Conditionals
 *****************************************************/
let userAge = 21;
if (userAge >= 18) {
  console.log("✅ User is an adult.");
} else {
  console.log("❌ User is a minor.");
}

/*****************************************************
 * Part 2: Functions - Reusable Logic
 *****************************************************/
// Greet user
function greetUser(name) {
  return name ? `Hello, ${name}! Welcome 🚀` : "Please enter your name.";
}

// Add two numbers
function addNumbers(a, b) {
  return a + b;
}

/*****************************************************
 * Part 3: Loops - Repetition
 *****************************************************/
// Example: log numbers 1–5
for (let i = 1; i <= 5; i++) {
  console.log("Loop count:", i);
}

/*****************************************************
 * Part 4: DOM Manipulation
 *****************************************************/
// Greeting form
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greetingOutput = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  greetingOutput.textContent = greetUser(nameInput.value);
});

// Tiny Calculator
const addBtn = document.getElementById("addBtn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcResult = document.getElementById("calcResult");

addBtn.addEventListener("click", () => {
  const n1 = parseFloat(num1.value) || 0;
  const n2 = parseFloat(num2.value) || 0;
  calcResult.textContent = `Result: ${addNumbers(n1, n2)}`;
});

// Dynamic To-Do List
const addTodoBtn = document.getElementById("addTodoBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", () => {
  if (todoInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = todoInput.value;

    // Remove task on click
    li.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    todoList.appendChild(li);
    todoInput.value = ""; // clear input
  }
});

// Toggle Example
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("highlight");
});
