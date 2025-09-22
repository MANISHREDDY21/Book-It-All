// Sample data simulation
const buses = [
    { from: "Delhi", to: "Agra", time: "10:00 AM", price: "$10" },
    { from: "Mumbai", to: "Pune", time: "3:00 PM", price: "$12" }
];

const trains = [
    { from: "Delhi", to: "Agra", time: "9:00 AM", price: "$15" },
    { from: "Mumbai", to: "Pune", time: "2:00 PM", price: "$18" }
];

const flights = [
    { from: "Delhi", to: "Agra", time: "8:00 AM", price: "$50" },
    { from: "Mumbai", to: "Pune", time: "1:00 PM", price: "$60" }
];

// Helper function to render results
function renderResults(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    if(data.length === 0){
        container.innerHTML = "<p>No results found.</p>";
        return;
    }
    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.innerHTML = `<strong>From:</strong> ${item.from} <strong>To:</strong> ${item.to} <strong>Time:</strong> ${item.time} <strong>Price:</strong> ${item.price}`;
        container.appendChild(div);
    });
}

// Event listeners
document.getElementById("busForm").addEventListener("submit", function(e){
    e.preventDefault();
    const from = e.target.from.value.trim();
    const to = e.target.to.value.trim();
    const results = buses.filter(b => b.from.toLowerCase() === from.toLowerCase() && b.to.toLowerCase() === to.toLowerCase());
    renderResults(results, "busResults");
});

document.getElementById("trainForm").addEventListener("submit", function(e){
    e.preventDefault();
    const from = e.target.from.value.trim();
    const to = e.target.to.value.trim();
    const results = trains.filter(t => t.from.toLowerCase() === from.toLowerCase() && t.to.toLowerCase() === to.toLowerCase());
    renderResults(results, "trainResults");
});

document.getElementById("flightForm").addEventListener("submit", function(e){
    e.preventDefault();
    const from = e.target.from.value.trim();
    const to = e.target.to.value.trim();
    const results = flights.filter(f => f.from.toLowerCase() === from.toLowerCase() && f.to.toLowerCase() === to.toLowerCase());
    renderResults(results, "flightResults");
});
