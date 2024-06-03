// API Fetch
fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=104")
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
	// NL East Team #1
	const NLEastTeam1 = data.records[0].teamRecords[0].team.name;
	const NLEastTeamDiv1 = document.getElementById("NLEastTeam1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = NLEastTeam1;
	NLEastTeamDiv1.appendChild(heading1);
	// NL East Team #2
	const NLEastTeam2 = data.records[0].teamRecords[1].team.name;
	const NLEastTeamDiv2 = document.getElementById("NLEastTeam2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = NLEastTeam2;
	NLEastTeamDiv2.appendChild(heading2);
	// NL East Team #3
	const NLEastTeam3 = data.records[0].teamRecords[2].team.name;
	const NLEastTeamDiv3 = document.getElementById("NLEastTeam3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = NLEastTeam3;
	NLEastTeamDiv3.appendChild(heading3);
	// NL East Team #4
	const NLEastTeam4 = data.records[0].teamRecords[3].team.name;
	const NLEastTeamDiv4 = document.getElementById("NLEastTeam4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = NLEastTeam4;
	NLEastTeamDiv4.appendChild(heading4);
	// NL East Team #5
	const NLEastTeam5 = data.records[0].teamRecords[4].team.name;
	const NLEastTeamDiv5 = document.getElementById("NLEastTeam5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = NLEastTeam5;
	NLEastTeamDiv5.appendChild(heading5);
	// NL Central Team #1
	const NLCentralTeam1 = data.records[1].teamRecords[0].team.name;
	const NLCentralTeamDiv1 = document.getElementById("NLCentralTeam1");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = NLCentralTeam1;
	NLCentralTeamDiv1.appendChild(heading6);
	// NL Central Team #2
	const NLCentralTeam2 = data.records[1].teamRecords[1].team.name;
	const NLCentralTeamDiv2 = document.getElementById("NLCentralTeam2");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = NLCentralTeam2;
	NLCentralTeamDiv2.appendChild(heading7);
	// NL Central Team #3
	const NLCentralTeam3 = data.records[1].teamRecords[2].team.name;
	const NLCentralTeamDiv3 = document.getElementById("NLCentralTeam3");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = NLCentralTeam3;
	NLCentralTeamDiv3.appendChild(heading8);
	// NL Central Team #4
	const NLCentralTeam4 = data.records[1].teamRecords[3].team.name;
	const NLCentralTeamDiv4 = document.getElementById("NLCentralTeam4");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = NLCentralTeam4;
	NLCentralTeamDiv4.appendChild(heading9);
	// NL Central Team #5
	const NLCentralTeam5 = data.records[1].teamRecords[4].team.name;
	const NLCentralTeamDiv5 = document.getElementById("NLCentralTeam5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = NLCentralTeam5;
	NLCentralTeamDiv5.appendChild(heading10);
	// NL West Team #1
	const NLWestTeam1 = data.records[2].teamRecords[0].team.name;
	const NLWestTeamDiv1 = document.getElementById("NLWestTeam1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = NLWestTeam1;
	NLWestTeamDiv1.appendChild(heading11);
	// NL West Team #2
	const NLWestTeam2 = data.records[2].teamRecords[1].team.name;
	const NLWestTeamDiv2 = document.getElementById("NLWestTeam2");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = NLWestTeam2;
	NLWestTeamDiv2.appendChild(heading12);
	// NL West Team #3
	const NLWestTeam3 = data.records[2].teamRecords[2].team.name;
	const NLWestTeamDiv3 = document.getElementById("NLWestTeam3");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = NLWestTeam3;
	NLWestTeamDiv3.appendChild(heading13);
	// NL West Team #4
	const NLWestTeam4 = data.records[2].teamRecords[3].team.name;
	const NLWestTeamDiv4 = document.getElementById("NLWestTeam4");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = NLWestTeam4;
	NLWestTeamDiv4.appendChild(heading14);
	// NL West Team #5
	const NLWestTeam5 = data.records[2].teamRecords[4].team.name;
	const NLWestTeamDiv5 = document.getElementById("NLWestTeam5");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = NLWestTeam5;
	NLWestTeamDiv5.appendChild(heading15);
}
