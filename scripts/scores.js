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
		console.log(data);
		displayData1(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData1(data) {
	//Away Team Score #1
	if (typeof data.dates[0].games[0].teams.away.score === "number") {
		var awayTeamScore1 = data.dates[0].games[0].teams.away.score;
	} else {
		var awayTeamScore1 = "";
	}
	const awayTeamScoreDiv1 = document.getElementById("awayTeamScore1");
	const heading5 = document.createElement("span");
	heading5.innerHTML = awayTeamScore1;
	if (
		data.dates[0].games[0].teams.away.score >
		data.dates[0].games[0].teams.home.score
	) {
		awayTeamScoreDiv1.appendChild(heading5).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv1.appendChild(heading5);
	}
	//Home Team Score #1
	if (typeof data.dates[0].games[0].teams.home.score === "number") {
		var homeTeamScore1 = data.dates[0].games[0].teams.home.score;
	} else {
		var homeTeamScore1 = "";
	}
	const homeTeamScoreDiv1 = document.getElementById("homeTeamScore1");
	const heading6 = document.createElement("span");
	heading6.innerHTML = homeTeamScore1;
	if (
		data.dates[0].games[0].teams.home.score >
		data.dates[0].games[0].teams.away.score
	) {
		homeTeamScoreDiv1.appendChild(heading6).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv1.appendChild(heading6);
	}
	//Away Team Score #2
	if (typeof data.dates[0].games[1].teams.away.score === "number") {
		var awayTeamScore2 = data.dates[0].games[1].teams.away.score;
	} else {
		var awayTeamScore2 = "";
	}
	const awayTeamScoreDiv2 = document.getElementById("awayTeamScore2");
	const heading12 = document.createElement("span");
	heading12.innerHTML = awayTeamScore2;
	if (
		data.dates[0].games[1].teams.away.score >
		data.dates[0].games[1].teams.home.score
	) {
		awayTeamScoreDiv2.appendChild(heading12).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv2.appendChild(heading12);
	}
	//Home Team Score #2
	if (typeof data.dates[0].games[1].teams.home.score === "number") {
		var homeTeamScore2 = data.dates[0].games[1].teams.home.score;
	} else {
		var homeTeamScore2 = "";
	}
	const homeTeamScoreDiv2 = document.getElementById("homeTeamScore2");
	const heading13 = document.createElement("span");
	heading13.innerHTML = homeTeamScore2;
	if (
		data.dates[0].games[1].teams.home.score >
		data.dates[0].games[1].teams.away.score
	) {
		homeTeamScoreDiv2.appendChild(heading13).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv2.appendChild(heading13);
	}
	//Away Team Score #3
	if (typeof data.dates[0].games[2].teams.away.score === "number") {
		var awayTeamScore3 = data.dates[0].games[2].teams.away.score;
	} else {
		var awayTeamScore3 = "";
	}
	const awayTeamScoreDiv3 = document.getElementById("awayTeamScore3");
	const heading19 = document.createElement("span");
	heading19.innerHTML = awayTeamScore3;
	if (
		data.dates[0].games[2].teams.away.score >
		data.dates[0].games[2].teams.home.score
	) {
		awayTeamScoreDiv3.appendChild(heading19).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv3.appendChild(heading19);
	}
	//Home Team Score #3
	if (typeof data.dates[0].games[2].teams.home.score === "number") {
		var homeTeamScore3 = data.dates[0].games[2].teams.home.score;
	} else {
		var homeTeamScore3 = "";
	}
	const homeTeamScoreDiv3 = document.getElementById("homeTeamScore3");
	const heading20 = document.createElement("span");
	heading20.innerHTML = homeTeamScore3;
	if (
		data.dates[0].games[2].teams.home.score >
		data.dates[0].games[2].teams.away.score
	) {
		homeTeamScoreDiv3.appendChild(heading20).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv3.appendChild(heading20);
	}
}
