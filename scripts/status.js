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
		displayData2(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData2(data) {
	// Game Status #1
	const gameStatus1 = data.dates[0].games[0].status.detailedState;
	const gameStatusDiv1 = document.getElementById("gameStatus1");
	const heading7 = document.createElement("span");
	heading7.innerHTML = gameStatus1;
	gameStatusDiv1.appendChild(heading7);
	// Game Status #2
	const gameStatus2 = data.dates[0].games[1].status.detailedState;
	const gameStatusDiv2 = document.getElementById("gameStatus2");
	const heading14 = document.createElement("span");
	heading14.innerHTML = gameStatus2;
	gameStatusDiv2.appendChild(heading14);
	// Game Status #3
	const gameStatus3 = data.dates[0].games[2].status.detailedState;
	const gameStatusDiv3 = document.getElementById("gameStatus3");
	const heading21 = document.createElement("span");
	heading21.innerHTML = gameStatus3;
	gameStatusDiv3.appendChild(heading21);
}
