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
		displayData8(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData8(data) {
	// NL East Winning Percentage #1
	const NLEastWinPct1 = data.records[0].teamRecords[0].leagueRecord.pct;
	const NLEastWinPctDiv1 = document.getElementById("NLEastWinPct1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = NLEastWinPct1;
	NLEastWinPctDiv1.appendChild(heading1);
	// NL East Winning Percentage #2
	const NLEastWinPct2 = data.records[0].teamRecords[1].leagueRecord.pct;
	const NLEastWinPctDiv2 = document.getElementById("NLEastWinPct2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = NLEastWinPct2;
	NLEastWinPctDiv2.appendChild(heading2);
	// NL East Winning Percentage #3
	const NLEastWinPct3 = data.records[0].teamRecords[2].leagueRecord.pct;
	const NLEastWinPctDiv3 = document.getElementById("NLEastWinPct3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = NLEastWinPct3;
	NLEastWinPctDiv3.appendChild(heading3);
	// NL East Winning Percentage #4
	const NLEastWinPct4 = data.records[0].teamRecords[3].leagueRecord.pct;
	const NLEastWinPctDiv4 = document.getElementById("NLEastWinPct4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = NLEastWinPct4;
	NLEastWinPctDiv4.appendChild(heading4);
	// NL East Winning Percentage #5
	const NLEastWinPct5 = data.records[0].teamRecords[4].leagueRecord.pct;
	const NLEastWinPctDiv5 = document.getElementById("NLEastWinPct5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = NLEastWinPct5;
	NLEastWinPctDiv5.appendChild(heading5);
	// NL Central Winning Percentage #1
	const NLCentralWinPct1 = data.records[1].teamRecords[0].leagueRecord.pct;
	const NLCentralWinPctDiv1 = document.getElementById("NLCentralWinPct1");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = NLCentralWinPct1;
	NLCentralWinPctDiv1.appendChild(heading6);
	// NL Central Winning Percentage #2
	const NLCentralWinPct2 = data.records[1].teamRecords[1].leagueRecord.pct;
	const NLCentralWinPctDiv2 = document.getElementById("NLCentralWinPct2");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = NLCentralWinPct2;
	NLCentralWinPctDiv2.appendChild(heading7);
	// NL Central Winning Percentage #3
	const NLCentralWinPct3 = data.records[1].teamRecords[2].leagueRecord.pct;
	const NLCentralWinPctDiv3 = document.getElementById("NLCentralWinPct3");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = NLCentralWinPct3;
	NLCentralWinPctDiv3.appendChild(heading8);
	// NL Central Winning Percentage #4
	const NLCentralWinPct4 = data.records[1].teamRecords[3].leagueRecord.pct;
	const NLCentralWinPctDiv4 = document.getElementById("NLCentralWinPct4");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = NLCentralWinPct4;
	NLCentralWinPctDiv4.appendChild(heading9);
	// NL Central Winning Percentage #5
	const NLCentralWinPct5 = data.records[1].teamRecords[4].leagueRecord.pct;
	const NLCentralWinPctDiv5 = document.getElementById("NLCentralWinPct5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = NLCentralWinPct5;
	NLCentralWinPctDiv5.appendChild(heading10);
	// NL West Winning Percentage #1
	const NLWestWinPct1 = data.records[2].teamRecords[0].leagueRecord.pct;
	const NLWestWinPctDiv1 = document.getElementById("NLWestWinPct1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = NLWestWinPct1;
	NLWestWinPctDiv1.appendChild(heading11);
	// NL West Winning Percentage #2
	const NLWestWinPct2 = data.records[2].teamRecords[1].leagueRecord.pct;
	const NLWestWinPctDiv2 = document.getElementById("NLWestWinPct2");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = NLWestWinPct2;
	NLWestWinPctDiv2.appendChild(heading12);
	// NL West Winning Percentage #3
	const NLWestWinPct3 = data.records[2].teamRecords[2].leagueRecord.pct;
	const NLWestWinPctDiv3 = document.getElementById("NLWestWinPct3");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = NLWestWinPct3;
	NLWestWinPctDiv3.appendChild(heading13);
	// NL West Winning Percentage #4
	const NLWestWinPct4 = data.records[2].teamRecords[3].leagueRecord.pct;
	const NLWestWinPctDiv4 = document.getElementById("NLWestWinPct4");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = NLWestWinPct4;
	NLWestWinPctDiv4.appendChild(heading14);
	// NL West Winning Percentage #5
	const NLWestWinPct5 = data.records[2].teamRecords[4].leagueRecord.pct;
	const NLWestWinPctDiv5 = document.getElementById("NLWestWinPct5");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = NLWestWinPct5;
	NLWestWinPctDiv5.appendChild(heading15);
}
