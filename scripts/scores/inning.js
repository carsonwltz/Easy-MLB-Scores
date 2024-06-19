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
	const gamePk0 = data.dates[0].games[0].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk0}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning0 = data.liveData.linescore.currentInning;
				const topbot1 = data.liveData.linescore.inningState;
				const inningDiv1 = document.getElementById("inning0");
				const topbotDiv1 = document.getElementById("topbot1");
				const heading1 = document.createElement("span");
				const heading2 = document.createElement("span");
				heading1.innerHTML = inning0;
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
	const gamePk1 = data.dates[0].games[1].gamePk;
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
				const topbot2 = data.liveData.linescore.inningState;
				const inningDiv2 = document.getElementById("inning1");
				const topbotDiv2 = document.getElementById("topbot2");
				const heading3 = document.createElement("span");
				const heading4 = document.createElement("span");
				heading3.innerHTML = inning1;
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
	const gamePk2 = data.dates[0].games[2].gamePk;
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
				const topbot3 = data.liveData.linescore.inningState;
				const inningDiv3 = document.getElementById("inning2");
				const topbotDiv3 = document.getElementById("topbot3");
				const heading5 = document.createElement("span");
				const heading6 = document.createElement("span");
				heading5.innerHTML = inning2;
				inningDiv3.appendChild(heading5);
				heading6.innerHTML = topbot3;
				topbotDiv3.appendChild(heading6);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #4
	const gamePk3 = data.dates[0].games[3].gamePk;
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
				const topbot4 = data.liveData.linescore.inningState;
				const inningDiv4 = document.getElementById("inning3");
				const topbotDiv4 = document.getElementById("topbot4");
				const heading7 = document.createElement("span");
				const heading24 = document.createElement("span");
				heading7.innerHTML = inning3;
				inningDiv4.appendChild(heading7);
				heading24.innerHTML = topbot4;
				topbotDiv4.appendChild(heading24);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #5
	const gamePk4 = data.dates[0].games[4].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk4}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning4 = data.liveData.linescore.currentInning;
				const topbot5 = data.liveData.linescore.inningState;
				const inningDiv5 = document.getElementById("inning4");
				const topbotDiv5 = document.getElementById("topbot5");
				const heading8 = document.createElement("span");
				const heading25 = document.createElement("span");
				heading8.innerHTML = inning4;
				inningDiv5.appendChild(heading8);
				heading25.innerHTML = topbot5;
				topbotDiv5.appendChild(heading25);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #6
	const gamePk5 = data.dates[0].games[5].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk5}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning5 = data.liveData.linescore.currentInning;
				const topbot6 = data.liveData.linescore.inningState;
				const inningDiv6 = document.getElementById("inning5");
				const topbotDiv6 = document.getElementById("topbot6");
				const heading9 = document.createElement("span");
				const heading26 = document.createElement("span");
				heading9.innerHTML = inning5;
				inningDiv6.appendChild(heading9);
				heading26.innerHTML = topbot6;
				topbotDiv6.appendChild(heading26);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #7
	const gamePk6 = data.dates[0].games[6].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk6}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning6 = data.liveData.linescore.currentInning;
				const topbot7 = data.liveData.linescore.inningState;
				const inningDiv7 = document.getElementById("inning6");
				const topbotDiv7 = document.getElementById("topbot7");
				const heading10 = document.createElement("span");
				const heading27 = document.createElement("span");
				heading10.innerHTML = inning6;
				inningDiv7.appendChild(heading10);
				heading27.innerHTML = topbot7;
				topbotDiv7.appendChild(heading27);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #8
	const gamePk7 = data.dates[0].games[7].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk7}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning7 = data.liveData.linescore.currentInning;
				const topbot8 = data.liveData.linescore.inningState;
				const inningDiv8 = document.getElementById("inning7");
				const topbotDiv8 = document.getElementById("topbot8");
				const heading11 = document.createElement("span");
				const heading28 = document.createElement("span");
				heading11.innerHTML = inning7;
				inningDiv8.appendChild(heading11);
				heading28.innerHTML = topbot8;
				topbotDiv8.appendChild(heading28);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #9
	const gamePk8 = data.dates[0].games[8].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk8}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning8 = data.liveData.linescore.currentInning;
				const topbot9 = data.liveData.linescore.inningState;
				const inningDiv9 = document.getElementById("inning8");
				const topbotDiv9 = document.getElementById("topbot9");
				const heading12 = document.createElement("span");
				const heading29 = document.createElement("span");
				heading12.innerHTML = inning8;
				inningDiv9.appendChild(heading12);
				heading29.innerHTML = topbot9;
				topbotDiv9.appendChild(heading29);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #10
	const gamePk9 = data.dates[0].games[9].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk9}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning9 = data.liveData.linescore.currentInning;
				const topbot10 = data.liveData.linescore.inningState;
				const inningDiv10 = document.getElementById("inning9");
				const topbotDiv10 = document.getElementById("topbot10");
				const heading13 = document.createElement("span");
				const heading30 = document.createElement("span");
				heading13.innerHTML = inning9;
				inningDiv10.appendChild(heading13);
				heading30.innerHTML = topbot10;
				topbotDiv10.appendChild(heading30);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #11
	const gamePk10 = data.dates[0].games[10].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk10}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning10 = data.liveData.linescore.currentInning;
				const topbot11 = data.liveData.linescore.inningState;
				const inningDiv11 = document.getElementById("inning10");
				const topbotDiv11 = document.getElementById("topbot11");
				const heading14 = document.createElement("span");
				const heading31 = document.createElement("span");
				heading14.innerHTML = inning10;
				inningDiv11.appendChild(heading14);
				heading31.innerHTML = topbot11;
				topbotDiv11.appendChild(heading31);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #12
	const gamePk11 = data.dates[0].games[11].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk11}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning11 = data.liveData.linescore.currentInning;
				const topbot12 = data.liveData.linescore.inningState;
				const inningDiv12 = document.getElementById("inning11");
				const topbotDiv12 = document.getElementById("topbot12");
				const heading15 = document.createElement("span");
				const heading32 = document.createElement("span");
				heading15.innerHTML = inning11;
				inningDiv12.appendChild(heading15);
				heading32.innerHTML = topbot12;
				topbotDiv12.appendChild(heading32);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #13
	const gamePk12 = data.dates[0].games[12].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk12}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning12 = data.liveData.linescore.currentInning;
				const topbot13 = data.liveData.linescore.inningState;
				const inningDiv13 = document.getElementById("inning12");
				const topbotDiv13 = document.getElementById("topbot13");
				const heading16 = document.createElement("span");
				const heading33 = document.createElement("span");
				heading16.innerHTML = inning12;
				inningDiv13.appendChild(heading16);
				heading33.innerHTML = topbot13;
				topbotDiv13.appendChild(heading33);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #14
	const gamePk13 = data.dates[0].games[13].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk13}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning13 = data.liveData.linescore.currentInning;
				const topbot14 = data.liveData.linescore.inningState;
				const inningDiv14 = document.getElementById("inning13");
				const topbotDiv14 = document.getElementById("topbot14");
				const heading17 = document.createElement("span");
				const heading34 = document.createElement("span");
				heading17.innerHTML = inning13;
				inningDiv14.appendChild(heading17);
				heading34.innerHTML = topbot14;
				topbotDiv14.appendChild(heading34);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #15
	const gamePk14 = data.dates[0].games[14].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk14}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning14 = data.liveData.linescore.currentInning;
				const topbot15 = data.liveData.linescore.inningState;
				const inningDiv15 = document.getElementById("inning14");
				const topbotDiv15 = document.getElementById("topbot15");
				const heading18 = document.createElement("span");
				const heading35 = document.createElement("span");
				heading18.innerHTML = inning14;
				inningDiv15.appendChild(heading18);
				heading35.innerHTML = topbot15;
				topbotDiv15.appendChild(heading35);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #16
	const gamePk15 = data.dates[0].games[15].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk15}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning15 = data.liveData.linescore.currentInning;
				const topbot16 = data.liveData.linescore.inningState;
				const inningDiv16 = document.getElementById("inning15");
				const topbotDiv16 = document.getElementById("topbot16");
				const heading19 = document.createElement("span");
				const heading36 = document.createElement("span");
				heading19.innerHTML = inning15;
				inningDiv16.appendChild(heading19);
				heading36.innerHTML = topbot16;
				topbotDiv16.appendChild(heading36);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #17
	const gamePk16 = data.dates[0].games[16].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk16}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning16 = data.liveData.linescore.currentInning;
				const topbot17 = data.liveData.linescore.inningState;
				const inningDiv17 = document.getElementById("inning16");
				const topbotDiv17 = document.getElementById("topbot17");
				const heading20 = document.createElement("span");
				const heading37 = document.createElement("span");
				heading20.innerHTML = inning16;
				inningDiv17.appendChild(heading20);
				heading37.innerHTML = topbot17;
				topbotDiv17.appendChild(heading37);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #18
	const gamePk17 = data.dates[0].games[17].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk17}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning17 = data.liveData.linescore.currentInning;
				const topbot18 = data.liveData.linescore.inningState;
				const inningDiv18 = document.getElementById("inning17");
				const topbotDiv18 = document.getElementById("topbot18");
				const heading21 = document.createElement("span");
				const heading38 = document.createElement("span");
				heading21.innerHTML = inning17;
				inningDiv18.appendChild(heading21);
				heading38.innerHTML = topbot18;
				topbotDiv18.appendChild(heading38);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #19
	const gamePk18 = data.dates[0].games[18].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk18}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning18 = data.liveData.linescore.currentInning;
				const topbot19 = data.liveData.linescore.inningState;
				const inningDiv19 = document.getElementById("inning18");
				const topbotDiv19 = document.getElementById("topbot19");
				const heading22 = document.createElement("span");
				const heading39 = document.createElement("span");
				heading22.innerHTML = inning18;
				inningDiv19.appendChild(heading22);
				heading39.innerHTML = topbot19;
				topbotDiv19.appendChild(heading39);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
	// Game Inning #20
	const gamePk19 = data.dates[0].games[19].gamePk;
	fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk19}/feed/live`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("NETWORK RESPONSE NOT OK");
			}
		})
		.then((data) => {
			if (data.gameData.status.abstractGameState === "Live") {
				const inning19 = data.liveData.linescore.currentInning;
				const topbot20 = data.liveData.linescore.inningState;
				const inningDiv20 = document.getElementById("inning19");
				const topbotDiv20 = document.getElementById("topbot20");
				const heading23 = document.createElement("span");
				const heading40 = document.createElement("span");
				heading23.innerHTML = inning19;
				inningDiv20.appendChild(heading23);
				heading40.innerHTML = topbot20;
				topbotDiv20.appendChild(heading40);
			} else {
			}
		})
		.catch((error) => {
			console.error("FETCH ERROR:", error);
		});
}
