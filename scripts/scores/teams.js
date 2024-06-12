// API Fetch
fetch("https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1")
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
	// Away Team #1
	const awayTeam1 = data.dates[0].games[0].teams.away.team.name;
	const awayTeam1Div = document.getElementById("awayTeamName1");
	const heading1 = document.createElement("span");
	heading1.innerHTML = awayTeam1;
	if (
		data.dates[0].games[0].teams.away.score >
		data.dates[0].games[0].teams.home.score
	) {
		awayTeam1Div.appendChild(heading1).style.fontWeight = "bold";
	} else {
		awayTeam1Div.appendChild(heading1);
	}
	// Home Team #1
	const homeTeam1 = data.dates[0].games[0].teams.home.team.name;
	const homeTeam1Div = document.getElementById("homeTeamName1");
	const heading2 = document.createElement("span");
	heading2.innerHTML = homeTeam1;
	if (
		data.dates[0].games[0].teams.home.score >
		data.dates[0].games[0].teams.away.score
	) {
		homeTeam1Div.appendChild(heading2).style.fontWeight = "bold";
	} else {
		homeTeam1Div.appendChild(heading2);
	}
	// Away Team #2
	const awayTeam2 = data.dates[0].games[1].teams.away.team.name;
	const awayTeam2Div = document.getElementById("awayTeamName2");
	const heading3 = document.createElement("span");
	heading3.innerHTML = awayTeam2;
	if (
		data.dates[0].games[1].teams.away.score >
		data.dates[0].games[1].teams.home.score
	) {
		awayTeam2Div.appendChild(heading3).style.fontWeight = "bold";
	} else {
		awayTeam2Div.appendChild(heading3);
	}
	// Home Team #2
	const homeTeam2 = data.dates[0].games[1].teams.home.team.name;
	const homeTeam2Div = document.getElementById("homeTeamName2");
	const heading4 = document.createElement("span");
	heading4.innerHTML = homeTeam2;
	if (
		data.dates[0].games[1].teams.home.score >
		data.dates[0].games[1].teams.away.score
	) {
		homeTeam2Div.appendChild(heading4).style.fontWeight = "bold";
	} else {
		homeTeam2Div.appendChild(heading4);
	}
	// Away Team #3
	const awayTeam3 = data.dates[0].games[2].teams.away.team.name;
	const awayTeam3Div = document.getElementById("awayTeamName3");
	const heading5 = document.createElement("span");
	heading5.innerHTML = awayTeam3;
	if (
		data.dates[0].games[2].teams.away.score >
		data.dates[0].games[2].teams.home.score
	) {
		awayTeam3Div.appendChild(heading5).style.fontWeight = "bold";
	} else {
		awayTeam3Div.appendChild(heading5);
	}
	// Home Team #3
	const homeTeam3 = data.dates[0].games[2].teams.home.team.name;
	const homeTeam3Div = document.getElementById("homeTeamName3");
	const heading6 = document.createElement("span");
	heading6.innerHTML = homeTeam3;
	if (
		data.dates[0].games[2].teams.home.score >
		data.dates[0].games[2].teams.away.score
	) {
		homeTeam3Div.appendChild(heading6).style.fontWeight = "bold";
	} else {
		homeTeam3Div.appendChild(heading6);
	}
	// Away Team #4
	const awayTeam4 = data.dates[0].games[3].teams.away.team.name;
	const awayTeam4Div = document.getElementById("awayTeamName4");
	const heading7 = document.createElement("span");
	heading7.innerHTML = awayTeam4;
	if (
		data.dates[0].games[3].teams.away.score >
		data.dates[0].games[3].teams.home.score
	) {
		awayTeam4Div.appendChild(heading7).style.fontWeight = "bold";
	} else {
		awayTeam4Div.appendChild(heading7);
	}
	// Home Team #4
	const homeTeam4 = data.dates[0].games[3].teams.home.team.name;
	const homeTeam4Div = document.getElementById("homeTeamName4");
	const heading8 = document.createElement("span");
	heading8.innerHTML = homeTeam4;
	if (
		data.dates[0].games[3].teams.home.score >
		data.dates[0].games[3].teams.away.score
	) {
		homeTeam4Div.appendChild(heading8).style.fontWeight = "bold";
	} else {
		homeTeam4Div.appendChild(heading8);
	}
	// Away Team #5
	const awayTeam5 = data.dates[0].games[4].teams.away.team.name;
	const awayTeam5Div = document.getElementById("awayTeamName5");
	const heading9 = document.createElement("span");
	heading9.innerHTML = awayTeam5;
	if (
		data.dates[0].games[4].teams.away.score >
		data.dates[0].games[4].teams.home.score
	) {
		awayTeam5Div.appendChild(heading9).style.fontWeight = "bold";
	} else {
		awayTeam5Div.appendChild(heading9);
	}
	// Home Team #5
	const homeTeam5 = data.dates[0].games[4].teams.home.team.name;
	const homeTeam5Div = document.getElementById("homeTeamName5");
	const heading10 = document.createElement("span");
	heading10.innerHTML = homeTeam5;
	if (
		data.dates[0].games[4].teams.home.score >
		data.dates[0].games[4].teams.away.score
	) {
		homeTeam5Div.appendChild(heading10).style.fontWeight = "bold";
	} else {
		homeTeam5Div.appendChild(heading10);
	}
	// Away Team #6
	const awayTeam6 = data.dates[0].games[5].teams.away.team.name;
	const awayTeam6Div = document.getElementById("awayTeamName6");
	const heading26 = document.createElement("span");
	heading26.innerHTML = awayTeam6;
	if (
		data.dates[0].games[5].teams.away.score >
		data.dates[0].games[5].teams.home.score
	) {
		awayTeam6Div.appendChild(heading26).style.fontWeight = "bold";
	} else {
		awayTeam6Div.appendChild(heading26);
	}
	// Home Team #6
	const homeTeam6 = data.dates[0].games[5].teams.home.team.name;
	const homeTeam6Div = document.getElementById("homeTeamName6");
	const heading11 = document.createElement("span");
	heading11.innerHTML = homeTeam6;
	if (
		data.dates[0].games[5].teams.home.score >
		data.dates[0].games[5].teams.away.score
	) {
		homeTeam6Div.appendChild(heading11).style.fontWeight = "bold";
	} else {
		homeTeam6Div.appendChild(heading11);
	}
	// Away Team #7
	const awayTeam7 = data.dates[0].games[6].teams.away.team.name;
	const awayTeam7Div = document.getElementById("awayTeamName7");
	const heading27 = document.createElement("span");
	heading27.innerHTML = awayTeam7;
	if (
		data.dates[0].games[6].teams.away.score >
		data.dates[0].games[6].teams.home.score
	) {
		awayTeam7Div.appendChild(heading27).style.fontWeight = "bold";
	} else {
		awayTeam7Div.appendChild(heading27);
	}
	// Home Team #7
	const homeTeam7 = data.dates[0].games[6].teams.home.team.name;
	const homeTeam7Div = document.getElementById("homeTeamName7");
	const heading12 = document.createElement("span");
	heading12.innerHTML = homeTeam7;
	if (
		data.dates[0].games[6].teams.home.score >
		data.dates[0].games[6].teams.away.score
	) {
		homeTeam7Div.appendChild(heading12).style.fontWeight = "bold";
	} else {
		homeTeam7Div.appendChild(heading12);
	}
	// Away Team #8
	const awayTeam8 = data.dates[0].games[7].teams.away.team.name;
	const awayTeam8Div = document.getElementById("awayTeamName8");
	const heading28 = document.createElement("span");
	heading28.innerHTML = awayTeam8;
	if (
		data.dates[0].games[7].teams.away.score >
		data.dates[0].games[7].teams.home.score
	) {
		awayTeam8Div.appendChild(heading28).style.fontWeight = "bold";
	} else {
		awayTeam8Div.appendChild(heading28);
	}
	// Home Team #8
	const homeTeam8 = data.dates[0].games[7].teams.home.team.name;
	const homeTeam8Div = document.getElementById("homeTeamName8");
	const heading13 = document.createElement("span");
	heading13.innerHTML = homeTeam8;
	if (
		data.dates[0].games[7].teams.home.score >
		data.dates[0].games[7].teams.away.score
	) {
		homeTeam8Div.appendChild(heading13).style.fontWeight = "bold";
	} else {
		homeTeam8Div.appendChild(heading13);
	}
	// Away Team #9
	const awayTeam9 = data.dates[0].games[8].teams.away.team.name;
	const awayTeam9Div = document.getElementById("awayTeamName9");
	const heading29 = document.createElement("span");
	heading29.innerHTML = awayTeam9;
	if (
		data.dates[0].games[8].teams.away.score >
		data.dates[0].games[8].teams.home.score
	) {
		awayTeam9Div.appendChild(heading29).style.fontWeight = "bold";
	} else {
		awayTeam9Div.appendChild(heading29);
	}
	// Home Team #9
	const homeTeam9 = data.dates[0].games[8].teams.home.team.name;
	const homeTeam9Div = document.getElementById("homeTeamName9");
	const heading14 = document.createElement("span");
	heading14.innerHTML = homeTeam9;
	if (
		data.dates[0].games[8].teams.home.score >
		data.dates[0].games[8].teams.away.score
	) {
		homeTeam9Div.appendChild(heading14).style.fontWeight = "bold";
	} else {
		homeTeam9Div.appendChild(heading14);
	}
	// Away Team #10
	const awayTeam10 = data.dates[0].games[9].teams.away.team.name;
	const awayTeam10Div = document.getElementById("awayTeamName10");
	const heading30 = document.createElement("span");
	heading30.innerHTML = awayTeam10;
	if (
		data.dates[0].games[9].teams.away.score >
		data.dates[0].games[9].teams.home.score
	) {
		awayTeam10Div.appendChild(heading30).style.fontWeight = "bold";
	} else {
		awayTeam10Div.appendChild(heading30);
	}
	// Home Team #10
	const homeTeam10 = data.dates[0].games[9].teams.home.team.name;
	const homeTeam10Div = document.getElementById("homeTeamName10");
	const heading15 = document.createElement("span");
	heading15.innerHTML = homeTeam10;
	if (
		data.dates[0].games[9].teams.home.score >
		data.dates[0].games[9].teams.away.score
	) {
		homeTeam10Div.appendChild(heading15).style.fontWeight = "bold";
	} else {
		homeTeam10Div.appendChild(heading15);
	}
	// Away Team #11
	const awayTeam11 = data.dates[0].games[10].teams.away.team.name;
	const awayTeam11Div = document.getElementById("awayTeamName11");
	const heading31 = document.createElement("span");
	heading31.innerHTML = awayTeam11;
	if (
		data.dates[0].games[10].teams.away.score >
		data.dates[0].games[10].teams.home.score
	) {
		awayTeam11Div.appendChild(heading31).style.fontWeight = "bold";
	} else {
		awayTeam11Div.appendChild(heading31);
	}
	// Home Team #11
	const homeTeam11 = data.dates[0].games[10].teams.home.team.name;
	const homeTeam11Div = document.getElementById("homeTeamName11");
	const heading16 = document.createElement("span");
	heading16.innerHTML = homeTeam11;
	if (
		data.dates[0].games[10].teams.home.score >
		data.dates[0].games[10].teams.away.score
	) {
		homeTeam11Div.appendChild(heading16).style.fontWeight = "bold";
	} else {
		homeTeam11Div.appendChild(heading16);
	}
	// Away Team #12
	const awayTeam12 = data.dates[0].games[11].teams.away.team.name;
	const awayTeam12Div = document.getElementById("awayTeamName12");
	const heading32 = document.createElement("span");
	heading32.innerHTML = awayTeam12;
	if (
		data.dates[0].games[11].teams.away.score >
		data.dates[0].games[11].teams.home.score
	) {
		awayTeam12Div.appendChild(heading32).style.fontWeight = "bold";
	} else {
		awayTeam12Div.appendChild(heading32);
	}
	// Home Team #12
	const homeTeam12 = data.dates[0].games[11].teams.home.team.name;
	const homeTeam12Div = document.getElementById("homeTeamName12");
	const heading17 = document.createElement("span");
	heading17.innerHTML = homeTeam12;
	if (
		data.dates[0].games[11].teams.home.score >
		data.dates[0].games[11].teams.away.score
	) {
		homeTeam12Div.appendChild(heading17).style.fontWeight = "bold";
	} else {
		homeTeam12Div.appendChild(heading17);
	}
	// Away Team #13
	const awayTeam13 = data.dates[0].games[12].teams.away.team.name;
	const awayTeam13Div = document.getElementById("awayTeamName13");
	const heading33 = document.createElement("span");
	heading33.innerHTML = awayTeam13;
	if (
		data.dates[0].games[12].teams.away.score >
		data.dates[0].games[12].teams.home.score
	) {
		awayTeam13Div.appendChild(heading33).style.fontWeight = "bold";
	} else {
		awayTeam13Div.appendChild(heading33);
	}
	// Home Team #13
	const homeTeam13 = data.dates[0].games[12].teams.home.team.name;
	const homeTeam13Div = document.getElementById("homeTeamName13");
	const heading18 = document.createElement("span");
	heading18.innerHTML = homeTeam13;
	if (
		data.dates[0].games[12].teams.home.score >
		data.dates[0].games[12].teams.away.score
	) {
		homeTeam13Div.appendChild(heading18).style.fontWeight = "bold";
	} else {
		homeTeam13Div.appendChild(heading18);
	}
	// Away Team #14
	const awayTeam14 = data.dates[0].games[13].teams.away.team.name;
	const awayTeam14Div = document.getElementById("awayTeamName14");
	const heading34 = document.createElement("span");
	heading34.innerHTML = awayTeam14;
	if (
		data.dates[0].games[13].teams.away.score >
		data.dates[0].games[13].teams.home.score
	) {
		awayTeam14Div.appendChild(heading34).style.fontWeight = "bold";
	} else {
		awayTeam14Div.appendChild(heading34);
	}
	// Home Team #14
	const homeTeam14 = data.dates[0].games[13].teams.home.team.name;
	const homeTeam14Div = document.getElementById("homeTeamName14");
	const heading19 = document.createElement("span");
	heading19.innerHTML = homeTeam14;
	if (
		data.dates[0].games[13].teams.home.score >
		data.dates[0].games[13].teams.away.score
	) {
		homeTeam14Div.appendChild(heading19).style.fontWeight = "bold";
	} else {
		homeTeam14Div.appendChild(heading19);
	}
	// Away Team #15
	const awayTeam15 = data.dates[0].games[14].teams.away.team.name;
	const awayTeam15Div = document.getElementById("awayTeamName15");
	const heading35 = document.createElement("span");
	heading35.innerHTML = awayTeam15;
	if (
		data.dates[0].games[14].teams.away.score >
		data.dates[0].games[14].teams.home.score
	) {
		awayTeam15Div.appendChild(heading35).style.fontWeight = "bold";
	} else {
		awayTeam15Div.appendChild(heading35);
	}
	// Home Team #15
	const homeTeam15 = data.dates[0].games[14].teams.home.team.name;
	const homeTeam15Div = document.getElementById("homeTeamName15");
	const heading20 = document.createElement("span");
	heading20.innerHTML = homeTeam15;
	if (
		data.dates[0].games[14].teams.home.score >
		data.dates[0].games[14].teams.away.score
	) {
		homeTeam15Div.appendChild(heading20).style.fontWeight = "bold";
	} else {
		homeTeam15Div.appendChild(heading20);
	}
	// Away Team #16
	const awayTeam16 = data.dates[0].games[15].teams.away.team.name;
	const awayTeam16Div = document.getElementById("awayTeamName16");
	const heading36 = document.createElement("span");
	heading36.innerHTML = awayTeam16;
	if (
		data.dates[0].games[15].teams.away.score >
		data.dates[0].games[15].teams.home.score
	) {
		awayTeam16Div.appendChild(heading36).style.fontWeight = "bold";
	} else {
		awayTeam16Div.appendChild(heading36);
	}
	// Home Team #16
	const homeTeam16 = data.dates[0].games[15].teams.home.team.name;
	const homeTeam16Div = document.getElementById("homeTeamName16");
	const heading21 = document.createElement("span");
	heading21.innerHTML = homeTeam16;
	if (
		data.dates[0].games[15].teams.home.score >
		data.dates[0].games[15].teams.away.score
	) {
		homeTeam16Div.appendChild(heading21).style.fontWeight = "bold";
	} else {
		homeTeam16Div.appendChild(heading21);
	}
	// Away Team #17
	const awayTeam17 = data.dates[0].games[16].teams.away.team.name;
	const awayTeam17Div = document.getElementById("awayTeamName17");
	const heading37 = document.createElement("span");
	heading37.innerHTML = awayTeam17;
	if (
		data.dates[0].games[16].teams.away.score >
		data.dates[0].games[16].teams.home.score
	) {
		awayTeam17Div.appendChild(heading37).style.fontWeight = "bold";
	} else {
		awayTeam17Div.appendChild(heading37);
	}
	// Home Team #17
	const homeTeam17 = data.dates[0].games[16].teams.home.team.name;
	const homeTeam17Div = document.getElementById("homeTeamName17");
	const heading22 = document.createElement("span");
	heading22.innerHTML = homeTeam17;
	if (
		data.dates[0].games[16].teams.home.score >
		data.dates[0].games[16].teams.away.score
	) {
		homeTeam17Div.appendChild(heading22).style.fontWeight = "bold";
	} else {
		homeTeam17Div.appendChild(heading22);
	}
	// Away Team #18
	const awayTeam18 = data.dates[0].games[17].teams.away.team.name;
	const awayTeam18Div = document.getElementById("awayTeamName18");
	const heading38 = document.createElement("span");
	heading38.innerHTML = awayTeam18;
	if (
		data.dates[0].games[17].teams.away.score >
		data.dates[0].games[17].teams.home.score
	) {
		awayTeam18Div.appendChild(heading38).style.fontWeight = "bold";
	} else {
		awayTeam18Div.appendChild(heading38);
	}
	// Home Team #18
	const homeTeam18 = data.dates[0].games[17].teams.home.team.name;
	const homeTeam18Div = document.getElementById("homeTeamName18");
	const heading23 = document.createElement("span");
	heading23.innerHTML = homeTeam18;
	if (
		data.dates[0].games[17].teams.home.score >
		data.dates[0].games[17].teams.away.score
	) {
		homeTeam18Div.appendChild(heading23).style.fontWeight = "bold";
	} else {
		homeTeam18Div.appendChild(heading23);
	}
	// Away Team #19
	const awayTeam19 = data.dates[0].games[18].teams.away.team.name;
	const awayTeam19Div = document.getElementById("awayTeamName19");
	const heading39 = document.createElement("span");
	heading39.innerHTML = awayTeam19;
	if (
		data.dates[0].games[18].teams.away.score >
		data.dates[0].games[18].teams.home.score
	) {
		awayTeam19Div.appendChild(heading39).style.fontWeight = "bold";
	} else {
		awayTeam19Div.appendChild(heading39);
	}
	// Home Team #19
	const homeTeam19 = data.dates[0].games[18].teams.home.team.name;
	const homeTeam19Div = document.getElementById("homeTeamName19");
	const heading24 = document.createElement("span");
	heading24.innerHTML = homeTeam19;
	if (
		data.dates[0].games[18].teams.home.score >
		data.dates[0].games[18].teams.away.score
	) {
		homeTeam19Div.appendChild(heading24).style.fontWeight = "bold";
	} else {
		homeTeam19Div.appendChild(heading24);
	}
	// Away Team #20
	const awayTeam20 = data.dates[0].games[19].teams.away.team.name;
	const awayTeam20Div = document.getElementById("awayTeamName20");
	const heading40 = document.createElement("span");
	heading40.innerHTML = awayTeam20;
	if (
		data.dates[0].games[19].teams.away.score >
		data.dates[0].games[19].teams.home.score
	) {
		awayTeam20Div.appendChild(heading40).style.fontWeight = "bold";
	} else {
		awayTeam20Div.appendChild(heading40);
	}
	// Home Team #20
	const homeTeam20 = data.dates[0].games[19].teams.home.team.name;
	const homeTeam20Div = document.getElementById("homeTeamName20");
	const heading25 = document.createElement("span");
	heading25.innerHTML = homeTeam20;
	if (
		data.dates[0].games[19].teams.home.score >
		data.dates[0].games[19].teams.away.score
	) {
		homeTeam20Div.appendChild(heading25).style.fontWeight = "bold";
	} else {
		homeTeam20Div.appendChild(heading25);
	}
}
