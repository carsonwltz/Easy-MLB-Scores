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
		displayData5(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData5(data) {
	// Box #1
	const gamePk1 = data.dates[0].games[0].gamePk;
	const gameBoxDiv1 = document.getElementById("gameBox1");
	if (data.dates[0].games[0].status.detailedState === "Scheduled") {
		gameBoxDiv1.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[0].status.detailedState === "Final") {
			gameBoxDiv1.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk1}/final/box`
			);
		} else {
			gameBoxDiv1.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk1}`
			);
		}
	}
	// Box #2
	const gamePk2 = data.dates[0].games[1].gamePk;
	const gameBoxDiv2 = document.getElementById("gameBox2");
	if (data.dates[0].games[1].status.detailedState === "Scheduled") {
		gameBoxDiv2.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[1].status.detailedState === "Final") {
			gameBoxDiv2.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk2}/final/box`
			);
		} else {
			gameBoxDiv2.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk2}`
			);
		}
	}
	// Box #3
	const gamePk3 = data.dates[0].games[2].gamePk;
	const gameBoxDiv3 = document.getElementById("gameBox3");
	if (data.dates[0].games[2].status.detailedState === "Scheduled") {
		gameBoxDiv3.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[2].status.detailedState === "Final") {
			gameBoxDiv3.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk3}/final/box`
			);
		} else {
			gameBoxDiv3.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk3}`
			);
		}
	}
}
