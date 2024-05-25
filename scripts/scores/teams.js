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
}
