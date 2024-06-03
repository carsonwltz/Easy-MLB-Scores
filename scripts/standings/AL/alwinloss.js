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
	const ALEastWin1 = data.records[0].teamRecords[0].leagueRecord.wins;
	const ALEastWinDiv1 = document.getElementById("ALEastWin1");
	const heading1 = document.createElement("tr");
	heading1.innerHTML = ALEastWin1;
	ALEastWinDiv1.appendChild(heading1);
	// AL East Losses #1
	const ALEastLoss1 = data.records[0].teamRecords[0].leagueRecord.losses;
	const ALEastLossDiv1 = document.getElementById("ALEastLoss1");
	const heading2 = document.createElement("tr");
	heading2.innerHTML = ALEastLoss1;
	ALEastLossDiv1.appendChild(heading2);
	// AL East Wins #2
	const ALEastWin2 = data.records[0].teamRecords[1].leagueRecord.wins;
	const ALEastWinDiv2 = document.getElementById("ALEastWin2");
	const heading3 = document.createElement("tr");
	heading3.innerHTML = ALEastWin2;
	ALEastWinDiv2.appendChild(heading3);
	// AL East Losses #2
	const ALEastLoss2 = data.records[0].teamRecords[1].leagueRecord.losses;
	const ALEastLossDiv2 = document.getElementById("ALEastLoss2");
	const heading4 = document.createElement("tr");
	heading4.innerHTML = ALEastLoss2;
	ALEastLossDiv2.appendChild(heading4);
	// AL East Wins #3
	const ALEastWin3 = data.records[0].teamRecords[2].leagueRecord.wins;
	const ALEastWinDiv3 = document.getElementById("ALEastWin3");
	const heading5 = document.createElement("tr");
	heading5.innerHTML = ALEastWin3;
	ALEastWinDiv3.appendChild(heading5);
	// AL East Losses #3
	const ALEastLoss3 = data.records[0].teamRecords[2].leagueRecord.losses;
	const ALEastLossDiv3 = document.getElementById("ALEastLoss3");
	const heading6 = document.createElement("tr");
	heading6.innerHTML = ALEastLoss3;
	ALEastLossDiv3.appendChild(heading6);
	// AL East Wins #4
	const ALEastWin4 = data.records[0].teamRecords[3].leagueRecord.wins;
	const ALEastWinDiv4 = document.getElementById("ALEastWin4");
	const heading7 = document.createElement("tr");
	heading7.innerHTML = ALEastWin4;
	ALEastWinDiv4.appendChild(heading7);
	// AL East Losses #4
	const ALEastLoss4 = data.records[0].teamRecords[3].leagueRecord.losses;
	const ALEastLossDiv4 = document.getElementById("ALEastLoss4");
	const heading8 = document.createElement("tr");
	heading8.innerHTML = ALEastLoss4;
	ALEastLossDiv4.appendChild(heading8);
	// AL East Wins #5
	const ALEastWin5 = data.records[0].teamRecords[4].leagueRecord.wins;
	const ALEastWinDiv5 = document.getElementById("ALEastWin5");
	const heading9 = document.createElement("tr");
	heading9.innerHTML = ALEastWin5;
	ALEastWinDiv5.appendChild(heading9);
	// AL East Losses #5
	const ALEastLoss5 = data.records[0].teamRecords[4].leagueRecord.losses;
	const ALEastLossDiv5 = document.getElementById("ALEastLoss5");
	const heading10 = document.createElement("tr");
	heading10.innerHTML = ALEastLoss5;
	ALEastLossDiv5.appendChild(heading10);
	// AL Central Wins #1
	const ALCentralWin1 = data.records[1].teamRecords[0].leagueRecord.wins;
	const ALCentralWinDiv1 = document.getElementById("ALCentralWin1");
	const heading11 = document.createElement("tr");
	heading11.innerHTML = ALCentralWin1;
	ALCentralWinDiv1.appendChild(heading11);
	// AL Central Losses #1
	const ALCentralLoss1 = data.records[1].teamRecords[0].leagueRecord.losses;
	const ALCentralLossDiv1 = document.getElementById("ALCentralLoss1");
	const heading12 = document.createElement("tr");
	heading12.innerHTML = ALCentralLoss1;
	ALCentralLossDiv1.appendChild(heading12);
	// AL Central Wins #2
	const ALCentralWin2 = data.records[1].teamRecords[1].leagueRecord.wins;
	const ALCentralWinDiv2 = document.getElementById("ALCentralWin2");
	const heading13 = document.createElement("tr");
	heading13.innerHTML = ALCentralWin2;
	ALCentralWinDiv2.appendChild(heading13);
	// AL Central Losses #2
	const ALCentralLoss2 = data.records[1].teamRecords[1].leagueRecord.losses;
	const ALCentralLossDiv2 = document.getElementById("ALCentralLoss2");
	const heading14 = document.createElement("tr");
	heading14.innerHTML = ALCentralLoss2;
	ALCentralLossDiv2.appendChild(heading14);
	// AL Central Wins #3
	const ALCentralWin3 = data.records[1].teamRecords[2].leagueRecord.wins;
	const ALCentralWinDiv3 = document.getElementById("ALCentralWin3");
	const heading15 = document.createElement("tr");
	heading15.innerHTML = ALCentralWin3;
	ALCentralWinDiv3.appendChild(heading15);
	// AL Central Losses #3
	const ALCentralLoss3 = data.records[1].teamRecords[2].leagueRecord.losses;
	const ALCentralLossDiv3 = document.getElementById("ALCentralLoss3");
	const heading16 = document.createElement("tr");
	heading16.innerHTML = ALCentralLoss3;
	ALCentralLossDiv3.appendChild(heading16);
	// AL Central Wins #4
	const ALCentralWin4 = data.records[1].teamRecords[3].leagueRecord.wins;
	const ALCentralWinDiv4 = document.getElementById("ALCentralWin4");
	const heading17 = document.createElement("tr");
	heading17.innerHTML = ALCentralWin4;
	ALCentralWinDiv4.appendChild(heading17);
	// AL Central Losses #4
	const ALCentralLoss4 = data.records[1].teamRecords[3].leagueRecord.losses;
	const ALCentralLossDiv4 = document.getElementById("ALCentralLoss4");
	const heading18 = document.createElement("tr");
	heading18.innerHTML = ALCentralLoss4;
	ALCentralLossDiv4.appendChild(heading18);
	// AL Central Wins #5
	const ALCentralWin5 = data.records[1].teamRecords[4].leagueRecord.wins;
	const ALCentralWinDiv5 = document.getElementById("ALCentralWin5");
	const heading19 = document.createElement("tr");
	heading19.innerHTML = ALCentralWin5;
	ALCentralWinDiv5.appendChild(heading19);
	// AL Central Losses #5
	const ALCentralLoss5 = data.records[1].teamRecords[4].leagueRecord.losses;
	const ALCentralLossDiv5 = document.getElementById("ALCentralLoss5");
	const heading20 = document.createElement("tr");
	heading20.innerHTML = ALCentralLoss5;
	ALCentralLossDiv5.appendChild(heading20);
	// AL West Wins #1
	const ALWestWin1 = data.records[2].teamRecords[0].leagueRecord.wins;
	const ALWestWinDiv1 = document.getElementById("ALWestWin1");
	const heading21 = document.createElement("tr");
	heading21.innerHTML = ALWestWin1;
	ALWestWinDiv1.appendChild(heading21);
	// AL West Losses #1
	const ALWestLoss1 = data.records[2].teamRecords[0].leagueRecord.losses;
	const ALWestLossDiv1 = document.getElementById("ALWestLoss1");
	const heading22 = document.createElement("tr");
	heading22.innerHTML = ALWestLoss1;
	ALWestLossDiv1.appendChild(heading22);
	// AL West Wins #2
	const ALWestWin2 = data.records[2].teamRecords[1].leagueRecord.wins;
	const ALWestWinDiv2 = document.getElementById("ALWestWin2");
	const heading23 = document.createElement("tr");
	heading23.innerHTML = ALWestWin2;
	ALWestWinDiv2.appendChild(heading23);
	// AL West Losses #2
	const ALWestLoss2 = data.records[2].teamRecords[1].leagueRecord.losses;
	const ALWestLossDiv2 = document.getElementById("ALWestLoss2");
	const heading24 = document.createElement("tr");
	heading24.innerHTML = ALWestLoss2;
	ALWestLossDiv2.appendChild(heading24);
	// AL West Wins #3
	const ALWestWin3 = data.records[2].teamRecords[2].leagueRecord.wins;
	const ALWestWinDiv3 = document.getElementById("ALWestWin3");
	const heading25 = document.createElement("tr");
	heading25.innerHTML = ALWestWin3;
	ALWestWinDiv3.appendChild(heading25);
	// AL West Losses #3
	const ALWestLoss3 = data.records[2].teamRecords[2].leagueRecord.losses;
	const ALWestLossDiv3 = document.getElementById("ALWestLoss3");
	const heading26 = document.createElement("tr");
	heading26.innerHTML = ALWestLoss3;
	ALWestLossDiv3.appendChild(heading26);
	// AL West Wins #4
	const ALWestWin4 = data.records[2].teamRecords[3].leagueRecord.wins;
	const ALWestWinDiv4 = document.getElementById("ALWestWin4");
	const heading27 = document.createElement("tr");
	heading27.innerHTML = ALWestWin4;
	ALWestWinDiv4.appendChild(heading27);
	// AL West Losses #4
	const ALWestLoss4 = data.records[2].teamRecords[3].leagueRecord.losses;
	const ALWestLossDiv4 = document.getElementById("ALWestLoss4");
	const heading28 = document.createElement("tr");
	heading28.innerHTML = ALWestLoss4;
	ALWestLossDiv4.appendChild(heading28);
	// AL West Wins #5
	const ALWestWin5 = data.records[2].teamRecords[4].leagueRecord.wins;
	const ALWestWinDiv5 = document.getElementById("ALWestWin5");
	const heading29 = document.createElement("tr");
	heading29.innerHTML = ALWestWin5;
	ALWestWinDiv5.appendChild(heading29);
	// AL West Losses #5
	const ALWestLoss5 = data.records[2].teamRecords[4].leagueRecord.losses;
	const ALWestLossDiv5 = document.getElementById("ALWestLoss5");
	const heading30 = document.createElement("tr");
	heading30.innerHTML = ALWestLoss5;
	ALWestLossDiv5.appendChild(heading30);
}
