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
		displayData(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});

function displayData(data) {
	//Game #1
	// Away Team #1
	const awayTeam1 = data.dates[0].games[0].teams.away.team.name;
	const awayTeam1Div = document.getElementById("awayTeamName1");
	const heading1 = document.createElement("span");
	heading1.innerHTML = awayTeam1;
	awayTeam1Div.appendChild(heading1);
	// Home Team #1
	const homeTeam1 = data.dates[0].games[0].teams.home.team.name;
	const homeTeam1Div = document.getElementById("homeTeamName1");
	const heading2 = document.createElement("span");
	heading2.innerHTML = homeTeam1;
	homeTeam1Div.appendChild(heading2);
	// Game Time #1
	const gamePk1 = data.dates[0].games[0].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk1}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			const gameTime1 = data.gameData.datetime.time;
			const gameTime1AMPM = data.gameData.datetime.ampm;
			const gameTime1Div = document.getElementById("gameTime1");
			const gameTime1AMPMDiv = document.getElementById("gameTime1AMPM");
			const heading3 = document.createElement("span");
			const heading4 = document.createElement("span");
			heading3.innerHTML = gameTime1;
			gameTime1Div.appendChild(heading3);
			heading4.innerHTML = gameTime1AMPM;
			gameTime1AMPMDiv.appendChild(heading4);
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	//Away Team Score #1
	if (typeof data.dates[0].games[0].teams.away.score === "number") {
		var awayTeamScore1 = data.dates[0].games[0].teams.away.score;
	} else {
		var awayTeamScore1 = "";
	}
	const awayTeamScoreDiv1 = document.getElementById("awayTeamScore1");
	const heading5 = document.createElement("span");
	heading5.innerHTML = awayTeamScore1;
	awayTeamScoreDiv1.appendChild(heading5);
	//Home Team Score #1
	if (typeof data.dates[0].games[0].teams.home.score === "number") {
		var homeTeamScore1 = data.dates[0].games[0].teams.home.score;
	} else {
		var homeTeamScore1 = "";
	}
	const homeTeamScoreDiv1 = document.getElementById("homeTeamScore1");
	const heading6 = document.createElement("span");
	heading6.innerHTML = homeTeamScore1;
	homeTeamScoreDiv1.appendChild(heading6);
	// Game Status #1
	const gameStatus1 = data.dates[0].games[0].status.detailedState;
	const gameStatusDiv1 = document.getElementById("gameStatus1");
	const heading7 = document.createElement("span");
	heading7.innerHTML = gameStatus1;
	gameStatusDiv1.appendChild(heading7);
	//Game #2
	// Away Team #2
	const awayTeam2 = data.dates[0].games[1].teams.away.team.name;
	const awayTeam2Div = document.getElementById("awayTeamName2");
	const heading8 = document.createElement("span");
	heading8.innerHTML = awayTeam2;
	awayTeam2Div.appendChild(heading8);
	// Home Team #2
	const homeTeam2 = data.dates[0].games[1].teams.home.team.name;
	const homeTeam2Div = document.getElementById("homeTeamName2");
	const heading9 = document.createElement("span");
	heading9.innerHTML = homeTeam2;
	homeTeam2Div.appendChild(heading9);
	// Game Time #2
	const gamePk2 = data.dates[0].games[1].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk2}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			const gameTime2 = data.gameData.datetime.time;
			const gameTime2AMPM = data.gameData.datetime.ampm;
			const gameTime2Div = document.getElementById("gameTime2");
			const gameTime2AMPMDiv = document.getElementById("gameTime2AMPM");
			const heading10 = document.createElement("span");
			const heading11 = document.createElement("span");
			heading10.innerHTML = gameTime2;
			gameTime2Div.appendChild(heading10);
			heading11.innerHTML = gameTime2AMPM;
			gameTime2AMPMDiv.appendChild(heading11);
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	//Away Team Score #2
	if (typeof data.dates[0].games[1].teams.away.score === "number") {
		var awayTeamScore2 = data.dates[0].games[1].teams.away.score;
	} else {
		var awayTeamScore2 = "";
	}
	const awayTeamScoreDiv2 = document.getElementById("awayTeamScore2");
	const heading12 = document.createElement("span");
	heading12.innerHTML = awayTeamScore2;
	awayTeamScoreDiv2.appendChild(heading12);
	//Home Team Score #2
	if (typeof data.dates[0].games[1].teams.home.score === "number") {
		var homeTeamScore2 = data.dates[0].games[1].teams.home.score;
	} else {
		var homeTeamScore2 = "";
	}
	const homeTeamScoreDiv2 = document.getElementById("homeTeamScore2");
	const heading13 = document.createElement("span");
	heading13.innerHTML = homeTeamScore2;
	homeTeamScoreDiv2.appendChild(heading13);
	// Game Status #2
	const gameStatus2 = data.dates[0].games[1].status.detailedState;
	const gameStatusDiv2 = document.getElementById("gameStatus2");
	const heading14 = document.createElement("span");
	heading14.innerHTML = gameStatus2;
	gameStatusDiv2.appendChild(heading14);
	//Game #3
	// Away Team #3
	const awayTeam3 = data.dates[0].games[2].teams.away.team.name;
	const awayTeam3Div = document.getElementById("awayTeamName3");
	const heading15 = document.createElement("span");
	heading15.innerHTML = awayTeam3;
	awayTeam3Div.appendChild(heading15);
	// Home Team #3
	const homeTeam3 = data.dates[0].games[2].teams.home.team.name;
	const homeTeam3Div = document.getElementById("homeTeamName3");
	const heading16 = document.createElement("span");
	heading16.innerHTML = homeTeam3;
	homeTeam3Div.appendChild(heading16);
	// Game Time #3
	const gamePk3 = data.dates[0].games[2].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk3}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			const gameTime3 = data.gameData.datetime.time;
			const gameTime3AMPM = data.gameData.datetime.ampm;
			const gameTime3Div = document.getElementById("gameTime3");
			const gameTime3AMPMDiv = document.getElementById("gameTime3AMPM");
			const heading17 = document.createElement("span");
			const heading18 = document.createElement("span");
			heading17.innerHTML = gameTime3;
			gameTime3Div.appendChild(heading17);
			heading18.innerHTML = gameTime3AMPM;
			gameTime3AMPMDiv.appendChild(heading18);
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	//Away Team Score #3
	if (typeof data.dates[0].games[2].teams.away.score === "number") {
		var awayTeamScore3 = data.dates[0].games[2].teams.away.score;
	} else {
		var awayTeamScore3 = "";
	}
	const awayTeamScoreDiv3 = document.getElementById("awayTeamScore3");
	const heading19 = document.createElement("span");
	heading19.innerHTML = awayTeamScore3;
	awayTeamScoreDiv3.appendChild(heading19);
	//Home Team Score #3
	if (typeof data.dates[0].games[2].teams.home.score === "number") {
		var homeTeamScore3 = data.dates[0].games[2].teams.home.score;
	} else {
		var homeTeamScore3 = "";
	}
	const homeTeamScoreDiv3 = document.getElementById("homeTeamScore3");
	const heading20 = document.createElement("span");
	heading20.innerHTML = homeTeamScore3;
	homeTeamScoreDiv3.appendChild(heading20);
	// Game Status #3
	const gameStatus3 = data.dates[0].games[2].status.detailedState;
	const gameStatusDiv3 = document.getElementById("gameStatus3");
	const heading21 = document.createElement("span");
	heading21.innerHTML = gameStatus3;
	gameStatusDiv3.appendChild(heading21);
}
