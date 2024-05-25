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
		displayData(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData(data) {
	const ALTeam1 = data.records[0].teamRecords[0].team.name;
	const ALTeamDiv1 = document.getElementById("ALTeam1");
	const heading1 = document.createElement("span");
	heading1.innerHTML = ALTeam1;
	ALTeamDiv1.appendChild(heading1);
}
