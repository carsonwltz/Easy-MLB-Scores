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
	const awayTeam1 = data.dates[0].games[0].teams.away.team.name;
	const awayTeam1Div = document.getElementById("display-data");
	const heading = document.createElement("h1");
	heading.innerHTML = awayTeam1;
	awayTeam1Div.appendChild(heading);
}
