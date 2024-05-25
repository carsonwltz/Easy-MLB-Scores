// API Fetch
fetch("https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1")
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("NETWORK RESPONSE NOT OK");
		}
	})
	.then(function (data) {
		displayData6(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData6(data) {
	const date = data.dates[0].date;
	const dateDiv = document.getElementById("date");
	const heading = document.createElement("span");
	heading.innerHTML = date;
	dateDiv.appendChild(heading);
}
