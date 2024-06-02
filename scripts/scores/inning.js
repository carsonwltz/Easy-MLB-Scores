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
		displayData8(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData8(data) {
	// Game Inning #1
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
			if (data.gameData.status.abstractGameState === "Live") {
				const inning1 = data.liveData.linescore.currentInning;
				const topbot1 = data.liveData.linescore.inningState;
				const space1 = (document.getElementById("space1").style.padding =
					"30px");
				const inningDiv1 = document.getElementById("inning1");
				const topbotDiv1 = document.getElementById("topbot1");
				const heading1 = document.createElement("span");
				const heading2 = document.createElement("span");
				heading1.innerHTML = inning1;
				inningDiv1.appendChild(heading1);
				heading2.innerHTML = topbot1;
				topbotDiv1.appendChild(heading2);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #2
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
			if (data.gameData.status.abstractGameState === "Live") {
				const inning2 = data.liveData.linescore.currentInning;
				const topbot2 = data.liveData.linescore.inningState;
				const space2 = (document.getElementById("space2").style.padding =
					"30px");
				const inningDiv2 = document.getElementById("inning2");
				const topbotDiv2 = document.getElementById("topbot2");
				const heading3 = document.createElement("span");
				const heading4 = document.createElement("span");
				heading3.innerHTML = inning2;
				inningDiv2.appendChild(heading3);
				heading4.innerHTML = topbot2;
				topbotDiv2.appendChild(heading4);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #3
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
			if (data.gameData.status.abstractGameState === "Live") {
				const inning3 = data.liveData.linescore.currentInning;
				const topbot3 = data.liveData.linescore.inningState;
				const space3 = (document.getElementById("space3").style.padding =
					"30px");
				const inningDiv3 = document.getElementById("inning3");
				const topbotDiv3 = document.getElementById("topbot3");
				const heading5 = document.createElement("span");
				const heading6 = document.createElement("span");
				heading5.innerHTML = inning3;
				inningDiv3.appendChild(heading5);
				heading6.innerHTML = topbot3;
				topbotDiv3.appendChild(heading6);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
}
