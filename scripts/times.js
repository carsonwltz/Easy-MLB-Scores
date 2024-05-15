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
		displayData4(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData4(data) {
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
}
