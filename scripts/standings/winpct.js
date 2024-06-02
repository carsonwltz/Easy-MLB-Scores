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
	const WinPct1 = data.records[0].teamRecords[0].leagueRecord.pct;
	const WinPctDiv1 = document.getElementById("WinPct1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = WinPct1;
	WinPctDiv1.appendChild(heading1);
	// AL East Winning Percentage #2
	const WinPct2 = data.records[0].teamRecords[1].leagueRecord.pct;
	const WinPctDiv2 = document.getElementById("WinPct2");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = WinPct2;
	WinPctDiv2.appendChild(heading2);
	// AL East Winning Percentage #3
	const WinPct3 = data.records[0].teamRecords[2].leagueRecord.pct;
	const WinPctDiv3 = document.getElementById("WinPct3");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = WinPct3;
	WinPctDiv3.appendChild(heading3);
	// AL East Winning Percentage #4
	const WinPct4 = data.records[0].teamRecords[3].leagueRecord.pct;
	const WinPctDiv4 = document.getElementById("WinPct4");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = WinPct4;
	WinPctDiv4.appendChild(heading4);
	// AL East Winning Percentage #5
	const WinPct5 = data.records[0].teamRecords[4].leagueRecord.pct;
	const WinPctDiv5 = document.getElementById("WinPct5");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = WinPct5;
	WinPctDiv5.appendChild(heading5);
}
