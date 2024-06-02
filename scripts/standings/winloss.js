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
		displayData2(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData2(data) {
	// AL East Wins #1
	const Win1 = data.records[0].teamRecords[0].leagueRecord.wins;
	const WinDiv1 = document.getElementById("Win1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = Win1;
	WinDiv1.appendChild(heading1);
	// AL East Losses #1
	const Loss1 = data.records[0].teamRecords[0].leagueRecord.losses;
	const LossDiv1 = document.getElementById("Loss1");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = Loss1;
	LossDiv1.appendChild(heading2);
	// AL East Wins #2
	const Win2 = data.records[0].teamRecords[1].leagueRecord.wins;
	const WinDiv2 = document.getElementById("Win2");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = Win2;
	WinDiv2.appendChild(heading3);
	// AL East Losses #2
	const Loss2 = data.records[0].teamRecords[1].leagueRecord.losses;
	const LossDiv2 = document.getElementById("Loss2");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = Loss2;
	LossDiv2.appendChild(heading4);
	// AL East Wins #3
	const Win3 = data.records[0].teamRecords[2].leagueRecord.wins;
	const WinDiv3 = document.getElementById("Win3");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = Win3;
	WinDiv3.appendChild(heading5);
	// AL East Losses #3
	const Loss3 = data.records[0].teamRecords[2].leagueRecord.losses;
	const LossDiv3 = document.getElementById("Loss3");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = Loss3;
	LossDiv3.appendChild(heading6);
	// AL East Wins #4
	const Win4 = data.records[0].teamRecords[3].leagueRecord.wins;
	const WinDiv4 = document.getElementById("Win4");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = Win4;
	WinDiv4.appendChild(heading7);
	// AL East Losses #4
	const Loss4 = data.records[0].teamRecords[3].leagueRecord.losses;
	const LossDiv4 = document.getElementById("Loss4");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = Loss4;
	LossDiv4.appendChild(heading8);
	// AL East Wins #5
	const Win5 = data.records[0].teamRecords[4].leagueRecord.wins;
	const WinDiv5 = document.getElementById("Win5");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = Win5;
	WinDiv5.appendChild(heading9);
	// AL East Losses #5
	const Loss5 = data.records[0].teamRecords[4].leagueRecord.losses;
	const LossDiv5 = document.getElementById("Loss5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = Loss5;
	LossDiv5.appendChild(heading10);
}
