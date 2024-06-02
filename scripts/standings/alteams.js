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
	// AL East
	// AL Team #1
	const ALTeam1 = data.records[0].teamRecords[0].team.name;
	const ALTeamDiv1 = document.getElementById("ALTeam1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = ALTeam1;
	ALTeamDiv1.appendChild(heading1);
	// AL Team #2
	const ALTeam2 = data.records[0].teamRecords[1].team.name;
	const ALTeamDiv2 = document.getElementById("ALTeam2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = ALTeam2;
	ALTeamDiv2.appendChild(heading2);
	// AL Team #3
	const ALTeam3 = data.records[0].teamRecords[2].team.name;
	const ALTeamDiv3 = document.getElementById("ALTeam3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = ALTeam3;
	ALTeamDiv3.appendChild(heading3);
	// AL Team #4
	const ALTeam4 = data.records[0].teamRecords[3].team.name;
	const ALTeamDiv4 = document.getElementById("ALTeam4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = ALTeam4;
	ALTeamDiv4.appendChild(heading4);
	// AL Team #5
	const ALTeam5 = data.records[0].teamRecords[4].team.name;
	const ALTeamDiv5 = document.getElementById("ALTeam5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = ALTeam5;
	ALTeamDiv5.appendChild(heading5);
}
