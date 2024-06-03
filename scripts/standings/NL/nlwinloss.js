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
		displayData7(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData7(data) {
	// NL East Wins #1
	const NLEastWin1 = data.records[0].teamRecords[0].leagueRecord.wins;
	const NLEastWinDiv1 = document.getElementById("NLEastWin1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = NLEastWin1;
	NLEastWinDiv1.appendChild(heading1);
	// NL East Losses #1
	const NLEastLoss1 = data.records[0].teamRecords[0].leagueRecord.losses;
	const NLEastLossDiv1 = document.getElementById("NLEastLoss1");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = NLEastLoss1;
	NLEastLossDiv1.appendChild(heading2);
	// NL East Wins #2
	const NLEastWin2 = data.records[0].teamRecords[1].leagueRecord.wins;
	const NLEastWinDiv2 = document.getElementById("NLEastWin2");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = NLEastWin2;
	NLEastWinDiv2.appendChild(heading3);
	// NL East Losses #2
	const NLEastLoss2 = data.records[0].teamRecords[1].leagueRecord.losses;
	const NLEastLossDiv2 = document.getElementById("NLEastLoss2");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = NLEastLoss2;
	NLEastLossDiv2.appendChild(heading4);
	// NL East Wins #3
	const NLEastWin3 = data.records[0].teamRecords[2].leagueRecord.wins;
	const NLEastWinDiv3 = document.getElementById("NLEastWin3");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = NLEastWin3;
	NLEastWinDiv3.appendChild(heading5);
	// NL East Losses #3
	const NLEastLoss3 = data.records[0].teamRecords[2].leagueRecord.losses;
	const NLEastLossDiv3 = document.getElementById("NLEastLoss3");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = NLEastLoss3;
	NLEastLossDiv3.appendChild(heading6);
	// NL East Wins #4
	const NLEastWin4 = data.records[0].teamRecords[3].leagueRecord.wins;
	const NLEastWinDiv4 = document.getElementById("NLEastWin4");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = NLEastWin4;
	NLEastWinDiv4.appendChild(heading7);
	// NL East Losses #4
	const NLEastLoss4 = data.records[0].teamRecords[3].leagueRecord.losses;
	const NLEastLossDiv4 = document.getElementById("NLEastLoss4");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = NLEastLoss4;
	NLEastLossDiv4.appendChild(heading8);
	// NL East Wins #5
	const NLEastWin5 = data.records[0].teamRecords[4].leagueRecord.wins;
	const NLEastWinDiv5 = document.getElementById("NLEastWin5");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = NLEastWin5;
	NLEastWinDiv5.appendChild(heading9);
	// NL East Losses #5
	const NLEastLoss5 = data.records[0].teamRecords[4].leagueRecord.losses;
	const NLEastLossDiv5 = document.getElementById("NLEastLoss5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = NLEastLoss5;
	NLEastLossDiv5.appendChild(heading10);
	// NL Central Wins #1
	const NLCentralWin1 = data.records[1].teamRecords[0].leagueRecord.wins;
	const NLCentralWinDiv1 = document.getElementById("NLCentralWin1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = NLCentralWin1;
	NLCentralWinDiv1.appendChild(heading11);
	// NL Central Losses #1
	const NLCentralLoss1 = data.records[1].teamRecords[0].leagueRecord.losses;
	const NLCentralLossDiv1 = document.getElementById("NLCentralLoss1");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = NLCentralLoss1;
	NLCentralLossDiv1.appendChild(heading12);
	// NL Central Wins #2
	const NLCentralWin2 = data.records[1].teamRecords[1].leagueRecord.wins;
	const NLCentralWinDiv2 = document.getElementById("NLCentralWin2");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = NLCentralWin2;
	NLCentralWinDiv2.appendChild(heading13);
	// NL Central Losses #2
	const NLCentralLoss2 = data.records[1].teamRecords[1].leagueRecord.losses;
	const NLCentralLossDiv2 = document.getElementById("NLCentralLoss2");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = NLCentralLoss2;
	NLCentralLossDiv2.appendChild(heading14);
	// NL Central Wins #3
	const NLCentralWin3 = data.records[1].teamRecords[2].leagueRecord.wins;
	const NLCentralWinDiv3 = document.getElementById("NLCentralWin3");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = NLCentralWin3;
	NLCentralWinDiv3.appendChild(heading15);
	// NL Central Losses #3
	const NLCentralLoss3 = data.records[1].teamRecords[2].leagueRecord.losses;
	const NLCentralLossDiv3 = document.getElementById("NLCentralLoss3");
	const heading16 = document.createElement("tr");
	heading16.innerHTML = NLCentralLoss3;
	NLCentralLossDiv3.appendChild(heading16);
	// NL Central Wins #4
	const NLCentralWin4 = data.records[1].teamRecords[3].leagueRecord.wins;
	const NLCentralWinDiv4 = document.getElementById("NLCentralWin4");
	const heading17 = document.createElement("tr");
	heading17.innerHTML = NLCentralWin4;
	NLCentralWinDiv4.appendChild(heading17);
	// NL Central Losses #4
	const NLCentralLoss4 = data.records[1].teamRecords[3].leagueRecord.losses;
	const NLCentralLossDiv4 = document.getElementById("NLCentralLoss4");
	const heading18 = document.createElement("tr");
	heading18.innerHTML = NLCentralLoss4;
	NLCentralLossDiv4.appendChild(heading18);
	// NL Central Wins #5
	const NLCentralWin5 = data.records[1].teamRecords[4].leagueRecord.wins;
	const NLCentralWinDiv5 = document.getElementById("NLCentralWin5");
	const heading19 = document.createElement("tr");
	heading19.innerHTML = NLCentralWin5;
	NLCentralWinDiv5.appendChild(heading19);
	// NL Central Losses #5
	const NLCentralLoss5 = data.records[1].teamRecords[4].leagueRecord.losses;
	const NLCentralLossDiv5 = document.getElementById("NLCentralLoss5");
	const heading20 = document.createElement("tr");
	heading20.innerHTML = NLCentralLoss5;
	NLCentralLossDiv5.appendChild(heading20);
	// NL West Wins #1
	const NLWestWin1 = data.records[2].teamRecords[0].leagueRecord.wins;
	const NLWestWinDiv1 = document.getElementById("NLWestWin1");
	const heading21 = document.createElement("tr");
	heading21.innerHTML = NLWestWin1;
	NLWestWinDiv1.appendChild(heading21);
	// NL West Losses #1
	const NLWestLoss1 = data.records[2].teamRecords[0].leagueRecord.losses;
	const NLWestLossDiv1 = document.getElementById("NLWestLoss1");
	const heading22 = document.createElement("tr");
	heading22.innerHTML = NLWestLoss1;
	NLWestLossDiv1.appendChild(heading22);
	// NL West Wins #2
	const NLWestWin2 = data.records[2].teamRecords[1].leagueRecord.wins;
	const NLWestWinDiv2 = document.getElementById("NLWestWin2");
	const heading23 = document.createElement("tr");
	heading23.innerHTML = NLWestWin2;
	NLWestWinDiv2.appendChild(heading23);
	// NL West Losses #2
	const NLWestLoss2 = data.records[2].teamRecords[1].leagueRecord.losses;
	const NLWestLossDiv2 = document.getElementById("NLWestLoss2");
	const heading24 = document.createElement("tr");
	heading24.innerHTML = NLWestLoss2;
	NLWestLossDiv2.appendChild(heading24);
	// NL West Wins #3
	const NLWestWin3 = data.records[2].teamRecords[2].leagueRecord.wins;
	const NLWestWinDiv3 = document.getElementById("NLWestWin3");
	const heading25 = document.createElement("tr");
	heading25.innerHTML = NLWestWin3;
	NLWestWinDiv3.appendChild(heading25);
	// NL West Losses #3
	const NLWestLoss3 = data.records[2].teamRecords[2].leagueRecord.losses;
	const NLWestLossDiv3 = document.getElementById("NLWestLoss3");
	const heading26 = document.createElement("tr");
	heading26.innerHTML = NLWestLoss3;
	NLWestLossDiv3.appendChild(heading26);
	// NL West Wins #4
	const NLWestWin4 = data.records[2].teamRecords[3].leagueRecord.wins;
	const NLWestWinDiv4 = document.getElementById("NLWestWin4");
	const heading27 = document.createElement("tr");
	heading27.innerHTML = NLWestWin4;
	NLWestWinDiv4.appendChild(heading27);
	// NL West Losses #4
	const NLWestLoss4 = data.records[2].teamRecords[3].leagueRecord.losses;
	const NLWestLossDiv4 = document.getElementById("NLWestLoss4");
	const heading28 = document.createElement("tr");
	heading28.innerHTML = NLWestLoss4;
	NLWestLossDiv4.appendChild(heading28);
	// NL West Wins #5
	const NLWestWin5 = data.records[2].teamRecords[4].leagueRecord.wins;
	const NLWestWinDiv5 = document.getElementById("NLWestWin5");
	const heading29 = document.createElement("tr");
	heading29.innerHTML = NLWestWin5;
	NLWestWinDiv5.appendChild(heading29);
	// NL West Losses #5
	const NLWestLoss5 = data.records[2].teamRecords[4].leagueRecord.losses;
	const NLWestLossDiv5 = document.getElementById("NLWestLoss5");
	const heading30 = document.createElement("tr");
	heading30.innerHTML = NLWestLoss5;
	NLWestLossDiv5.appendChild(heading30);
}
