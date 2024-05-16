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
		displayData2(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData2(data) {
	// Game Status #1
	const gameStatus1 = data.dates[0].games[0].status.detailedState;
	const gameStatusDiv1 = document.getElementById("gameStatus1");
	const heading1 = document.createElement("span");
	heading1.innerHTML = gameStatus1;
	gameStatusDiv1.appendChild(heading1);
	// Game Status #2
	const gameStatus2 = data.dates[0].games[1].status.detailedState;
	const gameStatusDiv2 = document.getElementById("gameStatus2");
	const heading2 = document.createElement("span");
	heading2.innerHTML = gameStatus2;
	gameStatusDiv2.appendChild(heading2);
	// Game Status #3
	const gameStatus3 = data.dates[0].games[2].status.detailedState;
	const gameStatusDiv3 = document.getElementById("gameStatus3");
	const heading3 = document.createElement("span");
	heading3.innerHTML = gameStatus3;
	gameStatusDiv3.appendChild(heading3);
}
