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
		displayData3(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData3(data) {
	// AL East Winning Percentage #1
	const ALEastWinPct1 = data.records[0].teamRecords[0].leagueRecord.pct;
	const ALEastWinPctDiv1 = document.getElementById("ALEastWinPct1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = ALEastWinPct1;
	ALEastWinPctDiv1.appendChild(heading1);
	// AL East Winning Percentage #2
	const ALEastWinPct2 = data.records[0].teamRecords[1].leagueRecord.pct;
	const ALEastWinPctDiv2 = document.getElementById("ALEastWinPct2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = ALEastWinPct2;
	ALEastWinPctDiv2.appendChild(heading2);
	// AL East Winning Percentage #3
	const ALEastWinPct3 = data.records[0].teamRecords[2].leagueRecord.pct;
	const ALEastWinPctDiv3 = document.getElementById("ALEastWinPct3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = ALEastWinPct3;
	ALEastWinPctDiv3.appendChild(heading3);
	// AL East Winning Percentage #4
	const ALEastWinPct4 = data.records[0].teamRecords[3].leagueRecord.pct;
	const ALEastWinPctDiv4 = document.getElementById("ALEastWinPct4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = ALEastWinPct4;
	ALEastWinPctDiv4.appendChild(heading4);
	// AL East Winning Percentage #5
	const ALEastWinPct5 = data.records[0].teamRecords[4].leagueRecord.pct;
	const ALEastWinPctDiv5 = document.getElementById("ALEastWinPct5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = ALEastWinPct5;
	ALEastWinPctDiv5.appendChild(heading5);
	// AL Central Winning Percentage #1
	const ALCentralWinPct1 = data.records[1].teamRecords[0].leagueRecord.pct;
	const ALCentralWinPctDiv1 = document.getElementById("ALCentralWinPct1");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = ALCentralWinPct1;
	ALCentralWinPctDiv1.appendChild(heading6);
	// AL Central Winning Percentage #2
	const ALCentralWinPct2 = data.records[1].teamRecords[1].leagueRecord.pct;
	const ALCentralWinPctDiv2 = document.getElementById("ALCentralWinPct2");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = ALCentralWinPct2;
	ALCentralWinPctDiv2.appendChild(heading7);
	// AL Central Winning Percentage #3
	const ALCentralWinPct3 = data.records[1].teamRecords[2].leagueRecord.pct;
	const ALCentralWinPctDiv3 = document.getElementById("ALCentralWinPct3");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = ALCentralWinPct3;
	ALCentralWinPctDiv3.appendChild(heading8);
	// AL Central Winning Percentage #4
	const ALCentralWinPct4 = data.records[1].teamRecords[3].leagueRecord.pct;
	const ALCentralWinPctDiv4 = document.getElementById("ALCentralWinPct4");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = ALCentralWinPct4;
	ALCentralWinPctDiv4.appendChild(heading9);
	// AL Central Winning Percentage #5
	const ALCentralWinPct5 = data.records[1].teamRecords[4].leagueRecord.pct;
	const ALCentralWinPctDiv5 = document.getElementById("ALCentralWinPct5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = ALCentralWinPct5;
	ALCentralWinPctDiv5.appendChild(heading10);
	// AL West Winning Percentage #1
	const ALWestWinPct1 = data.records[2].teamRecords[0].leagueRecord.pct;
	const ALWestWinPctDiv1 = document.getElementById("ALWestWinPct1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = ALWestWinPct1;
	ALWestWinPctDiv1.appendChild(heading11);
	// AL West Winning Percentage #2
	const ALWestWinPct2 = data.records[2].teamRecords[1].leagueRecord.pct;
	const ALWestWinPctDiv2 = document.getElementById("ALWestWinPct2");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = ALWestWinPct2;
	ALWestWinPctDiv2.appendChild(heading12);
	// AL West Winning Percentage #3
	const ALWestWinPct3 = data.records[2].teamRecords[2].leagueRecord.pct;
	const ALWestWinPctDiv3 = document.getElementById("ALWestWinPct3");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = ALWestWinPct3;
	ALWestWinPctDiv3.appendChild(heading13);
	// AL West Winning Percentage #4
	const ALWestWinPct4 = data.records[2].teamRecords[3].leagueRecord.pct;
	const ALWestWinPctDiv4 = document.getElementById("ALWestWinPct4");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = ALWestWinPct4;
	ALWestWinPctDiv4.appendChild(heading14);
	// AL West Winning Percentage #5
	const ALWestWinPct5 = data.records[2].teamRecords[4].leagueRecord.pct;
	const ALWestWinPctDiv5 = document.getElementById("ALWestWinPct5");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = ALWestWinPct5;
	ALWestWinPctDiv5.appendChild(heading15);
}
