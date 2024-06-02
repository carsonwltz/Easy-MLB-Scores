// API Fetch
fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=103")
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("NETWORK RESPONSE NOT OK");
		}
	})
	.then(function (data) {
		displayData4(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData4(data) {
	// AL Team Games Back #1
	const gamesBack1 = data.records[0].teamRecords[0].gamesBack;
	const gamesBackDiv1 = document.getElementById("gamesBack1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = gamesBack1;
	gamesBackDiv1.appendChild(heading1);
	// AL Team Games Back #2
	const gamesBack2 = data.records[0].teamRecords[1].gamesBack;
	const gamesBackDiv2 = document.getElementById("gamesBack2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = gamesBack2;
	gamesBackDiv2.appendChild(heading2);
	// AL Team Games Back #3
	const gamesBack3 = data.records[0].teamRecords[2].gamesBack;
	const gamesBackDiv3 = document.getElementById("gamesBack3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = gamesBack3;
	gamesBackDiv3.appendChild(heading3);
	// AL Team Games Back #4
	const gamesBack4 = data.records[0].teamRecords[3].gamesBack;
	const gamesBackDiv4 = document.getElementById("gamesBack4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = gamesBack4;
	gamesBackDiv4.appendChild(heading4);
	// AL Team Games Back #5
	const gamesBack5 = data.records[0].teamRecords[4].gamesBack;
	const gamesBackDiv5 = document.getElementById("gamesBack5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = gamesBack5;
	gamesBackDiv5.appendChild(heading5);
}
