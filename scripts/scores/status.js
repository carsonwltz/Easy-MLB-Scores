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
	// Game Status #4
	const gameStatus4 = data.dates[0].games[3].status.detailedState;
	const gameStatusDiv4 = document.getElementById("gameStatus4");
	const heading4 = document.createElement("span");
	heading4.innerHTML = gameStatus4;
	gameStatusDiv4.appendChild(heading4);
	// Game Status #5
	const gameStatus5 = data.dates[0].games[4].status.detailedState;
	const gameStatusDiv5 = document.getElementById("gameStatus5");
	const heading5 = document.createElement("span");
	heading5.innerHTML = gameStatus5;
	gameStatusDiv5.appendChild(heading5);
	// Game Status #6
	const gameStatus6 = data.dates[0].games[5].status.detailedState;
	const gameStatusDiv6 = document.getElementById("gameStatus6");
	const heading6 = document.createElement("span");
	heading6.innerHTML = gameStatus6;
	gameStatusDiv6.appendChild(heading6);
	// Game Status #7
	const gameStatus7 = data.dates[0].games[6].status.detailedState;
	const gameStatusDiv7 = document.getElementById("gameStatus7");
	const heading7 = document.createElement("span");
	heading7.innerHTML = gameStatus7;
	gameStatusDiv7.appendChild(heading7);
	// Game Status #8
	const gameStatus8 = data.dates[0].games[7].status.detailedState;
	const gameStatusDiv8 = document.getElementById("gameStatus8");
	const heading8 = document.createElement("span");
	heading8.innerHTML = gameStatus8;
	gameStatusDiv8.appendChild(heading8);
	// Game Status #9
	const gameStatus9 = data.dates[0].games[8].status.detailedState;
	const gameStatusDiv9 = document.getElementById("gameStatus9");
	const heading9 = document.createElement("span");
	heading9.innerHTML = gameStatus9;
	gameStatusDiv9.appendChild(heading9);
	// Game Status #10
	const gameStatus10 = data.dates[0].games[9].status.detailedState;
	const gameStatusDiv10 = document.getElementById("gameStatus10");
	const heading10 = document.createElement("span");
	heading10.innerHTML = gameStatus10;
	gameStatusDiv10.appendChild(heading10);
	// Game Status #11
	const gameStatus11 = data.dates[0].games[10].status.detailedState;
	const gameStatusDiv11 = document.getElementById("gameStatus11");
	const heading11 = document.createElement("span");
	heading11.innerHTML = gameStatus11;
	gameStatusDiv11.appendChild(heading11);
	// Game Status #12
	const gameStatus12 = data.dates[0].games[11].status.detailedState;
	const gameStatusDiv12 = document.getElementById("gameStatus12");
	const heading12 = document.createElement("span");
	heading12.innerHTML = gameStatus12;
	gameStatusDiv12.appendChild(heading12);
	// Game Status #13
	const gameStatus13 = data.dates[0].games[12].status.detailedState;
	const gameStatusDiv13 = document.getElementById("gameStatus13");
	const heading13 = document.createElement("span");
	heading13.innerHTML = gameStatus13;
	gameStatusDiv13.appendChild(heading13);
	// Game Status #14
	const gameStatus14 = data.dates[0].games[13].status.detailedState;
	const gameStatusDiv14 = document.getElementById("gameStatus14");
	const heading14 = document.createElement("span");
	heading14.innerHTML = gameStatus14;
	gameStatusDiv14.appendChild(heading14);
	// Game Status #15
	const gameStatus15 = data.dates[0].games[14].status.detailedState;
	const gameStatusDiv15 = document.getElementById("gameStatus15");
	const heading15 = document.createElement("span");
	heading15.innerHTML = gameStatus15;
	gameStatusDiv15.appendChild(heading15);
	// Game Status #16
	const gameStatus16 = data.dates[0].games[15].status.detailedState;
	const gameStatusDiv16 = document.getElementById("gameStatus16");
	const heading16 = document.createElement("span");
	heading16.innerHTML = gameStatus16;
	gameStatusDiv16.appendChild(heading16);
	// Game Status #17
	const gameStatus17 = data.dates[0].games[16].status.detailedState;
	const gameStatusDiv17 = document.getElementById("gameStatus17");
	const heading17 = document.createElement("span");
	heading17.innerHTML = gameStatus17;
	gameStatusDiv17.appendChild(heading17);
	// Game Status #18
	const gameStatus18 = data.dates[0].games[17].status.detailedState;
	const gameStatusDiv18 = document.getElementById("gameStatus18");
	const heading18 = document.createElement("span");
	heading18.innerHTML = gameStatus18;
	gameStatusDiv18.appendChild(heading18);
	// Game Status #19
	const gameStatus19 = data.dates[0].games[18].status.detailedState;
	const gameStatusDiv19 = document.getElementById("gameStatus19");
	const heading19 = document.createElement("span");
	heading19.innerHTML = gameStatus19;
	gameStatusDiv19.appendChild(heading19);
	// Game Status #20
	const gameStatus20 = data.dates[0].games[19].status.detailedState;
	const gameStatusDiv20 = document.getElementById("gameStatus20");
	const heading20 = document.createElement("span");
	heading20.innerHTML = gameStatus20;
	gameStatusDiv20.appendChild(heading20);
}
