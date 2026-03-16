const params = new URLSearchParams(window.location.search)

const exam = params.get("exam")
const city = params.get("city")

const resultsDiv = document.getElementById("results")

const filtered = institutes.filter(inst => {

return inst.exam.includes(exam) &&
inst.city.toLowerCase() === city.toLowerCase()

})

filtered.forEach(inst => {

const card = document.createElement("div")

card.classList.add("institute-card")

card.innerHTML = `
<h2>${inst.name}</h2>
<p>⭐ ${inst.rating} (${inst.reviews} reviews)</p>
<p>Students: ${inst.students}</p>
<p>City: ${inst.city}</p>
<button>View Details</button>
`

resultsDiv.appendChild(card)

})
