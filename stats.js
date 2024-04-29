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

//Game #1
function displayData(data) {
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
			homeTeam1Div.appendChild(heading3);
			heading4.innerHTML = gameTime1AMPM;
			gameTime1AMPMDiv.appendChild(heading4);
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
}
