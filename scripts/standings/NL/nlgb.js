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
		displayData5(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData5(data) {
	// NL East Team Games Back #1
	const NLEastGamesBack1 = data.records[0].teamRecords[0].gamesBack;
	const NLEastGamesBackDiv1 = document.getElementById("NLEastGamesBack1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = NLEastGamesBack1;
	NLEastGamesBackDiv1.appendChild(heading1);
	// NL East Team Games Back #2
	const NLEastGamesBack2 = data.records[0].teamRecords[1].gamesBack;
	const NLEastGamesBackDiv2 = document.getElementById("NLEastGamesBack2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = NLEastGamesBack2;
	NLEastGamesBackDiv2.appendChild(heading2);
	// NL East Team Games Back #3
	const NLEastGamesBack3 = data.records[0].teamRecords[2].gamesBack;
	const NLEastGamesBackDiv3 = document.getElementById("NLEastGamesBack3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = NLEastGamesBack3;
	NLEastGamesBackDiv3.appendChild(heading3);
	// NL East Team Games Back #4
	const NLEastGamesBack4 = data.records[0].teamRecords[3].gamesBack;
	const NLEastGamesBackDiv4 = document.getElementById("NLEastGamesBack4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = NLEastGamesBack4;
	NLEastGamesBackDiv4.appendChild(heading4);
	// NL East Team Games Back #5
	const NLEastGamesBack5 = data.records[0].teamRecords[4].gamesBack;
	const NLEastGamesBackDiv5 = document.getElementById("NLEastGamesBack5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = NLEastGamesBack5;
	NLEastGamesBackDiv5.appendChild(heading5);
	// NL Central Team Games Back #1
	const NLCentralGamesBack1 = data.records[1].teamRecords[0].gamesBack;
	const NLCentralGamesBackDiv1 = document.getElementById("NLCentralGamesBack1");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = NLCentralGamesBack1;
	NLCentralGamesBackDiv1.appendChild(heading6);
	// NL Central Team Games Back #2
	const NLCentralGamesBack2 = data.records[1].teamRecords[1].gamesBack;
	const NLCentralGamesBackDiv2 = document.getElementById("NLCentralGamesBack2");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = NLCentralGamesBack2;
	NLCentralGamesBackDiv2.appendChild(heading7);
	// NL Central Team Games Back #3
	const NLCentralGamesBack3 = data.records[1].teamRecords[2].gamesBack;
	const NLCentralGamesBackDiv3 = document.getElementById("NLCentralGamesBack3");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = NLCentralGamesBack3;
	NLCentralGamesBackDiv3.appendChild(heading8);
	// NL Central Team Games Back #4
	const NLCentralGamesBack4 = data.records[1].teamRecords[3].gamesBack;
	const NLCentralGamesBackDiv4 = document.getElementById("NLCentralGamesBack4");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = NLCentralGamesBack4;
	NLCentralGamesBackDiv4.appendChild(heading9);
	// NL Central Team Games Back #5
	const NLCentralGamesBack5 = data.records[1].teamRecords[4].gamesBack;
	const NLCentralGamesBackDiv5 = document.getElementById("NLCentralGamesBack5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = NLCentralGamesBack5;
	NLCentralGamesBackDiv5.appendChild(heading10);
	// NL West Team Games Back #1
	const NLWestGamesBack1 = data.records[2].teamRecords[0].gamesBack;
	const NLWestGamesBackDiv1 = document.getElementById("NLWestGamesBack1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = NLWestGamesBack1;
	NLWestGamesBackDiv1.appendChild(heading11);
	// NL West Team Games Back #2
	const NLWestGamesBack2 = data.records[2].teamRecords[1].gamesBack;
	const NLWestGamesBackDiv2 = document.getElementById("NLWestGamesBack2");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = NLWestGamesBack2;
	NLWestGamesBackDiv2.appendChild(heading12);
	// NL West Team Games Back #3
	const NLWestGamesBack3 = data.records[2].teamRecords[2].gamesBack;
	const NLWestGamesBackDiv3 = document.getElementById("NLWestGamesBack3");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = NLWestGamesBack3;
	NLWestGamesBackDiv3.appendChild(heading13);
	// NL West Team Games Back #4
	const NLWestGamesBack4 = data.records[2].teamRecords[3].gamesBack;
	const NLWestGamesBackDiv4 = document.getElementById("NLWestGamesBack4");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = NLWestGamesBack4;
	NLWestGamesBackDiv4.appendChild(heading14);
	// NL West Team Games Back #5
	const NLWestGamesBack5 = data.records[2].teamRecords[4].gamesBack;
	const NLWestGamesBackDiv5 = document.getElementById("NLWestGamesBack5");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = NLWestGamesBack5;
	NLWestGamesBackDiv5.appendChild(heading15);
}
