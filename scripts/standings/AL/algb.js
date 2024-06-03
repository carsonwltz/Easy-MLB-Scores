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
	// AL East Team Games Back #1
	const ALEastGamesBack1 = data.records[0].teamRecords[0].gamesBack;
	const ALEastGamesBackDiv1 = document.getElementById("ALEastGamesBack1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = ALEastGamesBack1;
	ALEastGamesBackDiv1.appendChild(heading1);
	// AL East Team Games Back #2
	const ALEastGamesBack2 = data.records[0].teamRecords[1].gamesBack;
	const ALEastGamesBackDiv2 = document.getElementById("ALEastGamesBack2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = ALEastGamesBack2;
	ALEastGamesBackDiv2.appendChild(heading2);
	// AL East Team Games Back #3
	const ALEastGamesBack3 = data.records[0].teamRecords[2].gamesBack;
	const ALEastGamesBackDiv3 = document.getElementById("ALEastGamesBack3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = ALEastGamesBack3;
	ALEastGamesBackDiv3.appendChild(heading3);
	// AL East Team Games Back #4
	const ALEastGamesBack4 = data.records[0].teamRecords[3].gamesBack;
	const ALEastGamesBackDiv4 = document.getElementById("ALEastGamesBack4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = ALEastGamesBack4;
	ALEastGamesBackDiv4.appendChild(heading4);
	// AL East Team Games Back #5
	const ALEastGamesBack5 = data.records[0].teamRecords[4].gamesBack;
	const ALEastGamesBackDiv5 = document.getElementById("ALEastGamesBack5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = ALEastGamesBack5;
	ALEastGamesBackDiv5.appendChild(heading5);
	// AL Central Team Games Back #1
	const ALCentralGamesBack1 = data.records[1].teamRecords[0].gamesBack;
	const ALCentralGamesBackDiv1 = document.getElementById("ALCentralGamesBack1");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = ALCentralGamesBack1;
	ALCentralGamesBackDiv1.appendChild(heading6);
	// AL Central Team Games Back #2
	const ALCentralGamesBack2 = data.records[1].teamRecords[1].gamesBack;
	const ALCentralGamesBackDiv2 = document.getElementById("ALCentralGamesBack2");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = ALCentralGamesBack2;
	ALCentralGamesBackDiv2.appendChild(heading7);
	// AL Central Team Games Back #3
	const ALCentralGamesBack3 = data.records[1].teamRecords[2].gamesBack;
	const ALCentralGamesBackDiv3 = document.getElementById("ALCentralGamesBack3");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = ALCentralGamesBack3;
	ALCentralGamesBackDiv3.appendChild(heading8);
	// AL Central Team Games Back #4
	const ALCentralGamesBack4 = data.records[1].teamRecords[3].gamesBack;
	const ALCentralGamesBackDiv4 = document.getElementById("ALCentralGamesBack4");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = ALCentralGamesBack4;
	ALCentralGamesBackDiv4.appendChild(heading9);
	// AL Central Team Games Back #5
	const ALCentralGamesBack5 = data.records[1].teamRecords[4].gamesBack;
	const ALCentralGamesBackDiv5 = document.getElementById("ALCentralGamesBack5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = ALCentralGamesBack5;
	ALCentralGamesBackDiv5.appendChild(heading10);
	// AL West Team Games Back #1
	const ALWestGamesBack1 = data.records[2].teamRecords[0].gamesBack;
	const ALWestGamesBackDiv1 = document.getElementById("ALWestGamesBack1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = ALWestGamesBack1;
	ALWestGamesBackDiv1.appendChild(heading11);
	// AL West Team Games Back #2
	const ALWestGamesBack2 = data.records[2].teamRecords[1].gamesBack;
	const ALWestGamesBackDiv2 = document.getElementById("ALWestGamesBack2");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = ALWestGamesBack2;
	ALWestGamesBackDiv2.appendChild(heading12);
	// AL West Team Games Back #3
	const ALWestGamesBack3 = data.records[2].teamRecords[2].gamesBack;
	const ALWestGamesBackDiv3 = document.getElementById("ALWestGamesBack3");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = ALWestGamesBack3;
	ALWestGamesBackDiv3.appendChild(heading13);
	// AL West Team Games Back #4
	const ALWestGamesBack4 = data.records[2].teamRecords[3].gamesBack;
	const ALWestGamesBackDiv4 = document.getElementById("ALWestGamesBack4");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = ALWestGamesBack4;
	ALWestGamesBackDiv4.appendChild(heading14);
	// AL West Team Games Back #5
	const ALWestGamesBack5 = data.records[2].teamRecords[4].gamesBack;
	const ALWestGamesBackDiv5 = document.getElementById("ALWestGamesBack5");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = ALWestGamesBack5;
	ALWestGamesBackDiv5.appendChild(heading15);
}
