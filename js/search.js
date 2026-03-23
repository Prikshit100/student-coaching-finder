console.log("JS WORKING");

// Get URL params
const params = new URLSearchParams(window.location.search);
const exam = params.get("exam");
const city = params.get("city");

console.log("Exam:", exam);
console.log("City:", city);

// Dummy data
const institutes = [
  { name: "Allen Career Institute", city: "Kota", exam: "JEE" },
  { name: "Aakash Institute", city: "Delhi", exam: "NEET" },
  { name: "Physics Wallah", city: "Delhi", exam: "NEET" },
  { name: "Resonance", city: "Kota", exam: "JEE" }
];

// Get result div
const results = document.getElementById("results");

// Filter
const filtered = institutes.filter(item => {
  return item.exam === exam && item.city.toLowerCase() === city.toLowerCase();
});

// Show results
if (filtered.length === 0) {
  results.innerHTML = "<p>No institutes found</p>";
} else {
  filtered.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${item.name}</h2><p>${item.city}</p>`;
    results.appendChild(div);

    const div = document.createElement("div");
div.className = "card";
   
  });
}
