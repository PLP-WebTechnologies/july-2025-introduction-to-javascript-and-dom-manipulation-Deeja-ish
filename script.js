// --- Part one
let userName = "Deeja"
let userAge = 20;
let isStudent = true;

// Simple conditionls
if (userAge >= 18) {
    console.log(`${userName} is an Adult.`);
    document.getElementById("output").textContent = `${userName} is an Adult.`
}
else{
    console.log(`${userName} is a Minor.`)
    document.getElementById("output").textContent = `${userName} is a Minor.`
}

// Part 2 function
function calculateTotal(a, b){
    // return sum of two numbers
    return a + b;
}

function formatGreeting(name){
    // return a formatted greeting string
    return `Hello, ${name}! Welcome to javaScript`
}

console.log(formatGreeting(userName));
console.log("Total:", calculateTotal(5, 10));

// Part 3
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// part 4
const list = document.getElementById('list');
fruits.forEach(fruit => {
  const li = document.createElement('li');
  li.textContent = fruit;
  list.appendChild(li);
});

// Toggle message on button click
const toggleBtn = document.getElementById('toggleBtn');
let toggled = false;
toggleBtn.addEventListener('click', function() {
  toggled = !toggled;
  document.getElementById('output').textContent = toggled
    ? "You toggled the message!"
    : formatGreeting(userName);
});

// Change list item color on click
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('highlight');
  }
});
