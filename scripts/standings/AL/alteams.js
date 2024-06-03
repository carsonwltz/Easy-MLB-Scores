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
	// AL East Team #1
	const ALEastTeam1 = data.records[0].teamRecords[0].team.name;
	const ALEastTeamDiv1 = document.getElementById("ALEastTeam1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = ALEastTeam1;
	ALEastTeamDiv1.appendChild(heading1);
	// AL East Team #2
	const ALEastTeam2 = data.records[0].teamRecords[1].team.name;
	const ALEastTeamDiv2 = document.getElementById("ALEastTeam2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = ALEastTeam2;
	ALEastTeamDiv2.appendChild(heading2);
	// AL East Team #3
	const ALEastTeam3 = data.records[0].teamRecords[2].team.name;
	const ALEastTeamDiv3 = document.getElementById("ALEastTeam3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = ALEastTeam3;
	ALEastTeamDiv3.appendChild(heading3);
	// AL East Team #4
	const ALEastTeam4 = data.records[0].teamRecords[3].team.name;
	const ALEastTeamDiv4 = document.getElementById("ALEastTeam4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = ALEastTeam4;
	ALEastTeamDiv4.appendChild(heading4);
	// AL East Team #5
	const ALEastTeam5 = data.records[0].teamRecords[4].team.name;
	const ALEastTeamDiv5 = document.getElementById("ALEastTeam5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = ALEastTeam5;
	ALEastTeamDiv5.appendChild(heading5);
	// AL Central Team #1
	const ALCentralTeam1 = data.records[1].teamRecords[0].team.name;
	const ALCentralTeamDiv1 = document.getElementById("ALCentralTeam1");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = ALCentralTeam1;
	ALCentralTeamDiv1.appendChild(heading6);
	// AL Central Team #2
	const ALCentralTeam2 = data.records[1].teamRecords[1].team.name;
	const ALCentralTeamDiv2 = document.getElementById("ALCentralTeam2");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = ALCentralTeam2;
	ALCentralTeamDiv2.appendChild(heading7);
	// AL Central Team #3
	const ALCentralTeam3 = data.records[1].teamRecords[2].team.name;
	const ALCentralTeamDiv3 = document.getElementById("ALCentralTeam3");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = ALCentralTeam3;
	ALCentralTeamDiv3.appendChild(heading8);
	// AL Central Team #4
	const ALCentralTeam4 = data.records[1].teamRecords[3].team.name;
	const ALCentralTeamDiv4 = document.getElementById("ALCentralTeam4");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = ALCentralTeam4;
	ALCentralTeamDiv4.appendChild(heading9);
	// AL Central Team #5
	const ALCentralTeam5 = data.records[1].teamRecords[4].team.name;
	const ALCentralTeamDiv5 = document.getElementById("ALCentralTeam5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = ALCentralTeam5;
	ALCentralTeamDiv5.appendChild(heading10);
	// AL West Team #1
	const ALWestTeam1 = data.records[2].teamRecords[0].team.name;
	const ALWestTeamDiv1 = document.getElementById("ALWestTeam1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = ALWestTeam1;
	ALWestTeamDiv1.appendChild(heading11);
	// AL West Team #2
	const ALWestTeam2 = data.records[2].teamRecords[1].team.name;
	const ALWestTeamDiv2 = document.getElementById("ALWestTeam2");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = ALWestTeam2;
	ALWestTeamDiv2.appendChild(heading12);
	// AL West Team #3
	const ALWestTeam3 = data.records[2].teamRecords[2].team.name;
	const ALWestTeamDiv3 = document.getElementById("ALWestTeam3");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = ALWestTeam3;
	ALWestTeamDiv3.appendChild(heading13);
	// AL West Team #4
	const ALWestTeam4 = data.records[2].teamRecords[3].team.name;
	const ALWestTeamDiv4 = document.getElementById("ALWestTeam4");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = ALWestTeam4;
	ALWestTeamDiv4.appendChild(heading14);
	// AL West Team #5
	const ALWestTeam5 = data.records[2].teamRecords[4].team.name;
	const ALWestTeamDiv5 = document.getElementById("ALWestTeam5");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = ALWestTeam5;
	ALWestTeamDiv5.appendChild(heading15);
}
