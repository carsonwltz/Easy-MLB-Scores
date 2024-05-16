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
	if (data.dates[0].games[0].status.detailedState === "Final") {
		gameBoxDiv1.setAttribute(
			"href",
			`https://www.mlb.com/gameday/${gamePk1}/final/box`
		);
	} else {
		gameBoxDiv1.setAttribute(
			"href",
			`https://www.mlb.com/gameday/${gamePk1}/final/box`
		);
	}
}
