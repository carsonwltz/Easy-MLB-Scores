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
		displayData4(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData4(data) {
	// Game Time #1
	if (data.dates[0].games[0].status.abstractGameCode === "P") {
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
				const heading1 = document.createElement("span");
				const heading2 = document.createElement("span");
				heading1.innerHTML = gameTime1;
				gameTime1Div.appendChild(heading1);
				heading2.innerHTML = gameTime1AMPM;
				gameTime1AMPMDiv.appendChild(heading2);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #2
	if (data.dates[0].games[1].status.abstractGameCode === "P") {
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
				const heading3 = document.createElement("span");
				const heading4 = document.createElement("span");
				heading3.innerHTML = gameTime2;
				gameTime2Div.appendChild(heading3);
				heading4.innerHTML = gameTime2AMPM;
				gameTime2AMPMDiv.appendChild(heading4);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #3
	if (data.dates[0].games[2].status.abstractGameCode === "P") {
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
				const heading5 = document.createElement("span");
				const heading6 = document.createElement("span");
				heading5.innerHTML = gameTime3;
				gameTime3Div.appendChild(heading5);
				heading6.innerHTML = gameTime3AMPM;
				gameTime3AMPMDiv.appendChild(heading6);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #4
	if (data.dates[0].games[3].status.abstractGameCode === "P") {
		const gamePk4 = data.dates[0].games[3].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk4}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime4 = data.gameData.datetime.time;
				const gameTime4AMPM = data.gameData.datetime.ampm;
				const gameTime4Div = document.getElementById("gameTime4");
				const gameTime4AMPMDiv = document.getElementById("gameTime4AMPM");
				const heading7 = document.createElement("span");
				const heading24 = document.createElement("span");
				heading7.innerHTML = gameTime4;
				gameTime4Div.appendChild(heading7);
				heading24.innerHTML = gameTime4AMPM;
				gameTime4AMPMDiv.appendChild(heading24);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #5
	if (data.dates[0].games[4].status.abstractGameCode === "P") {
		const gamePk5 = data.dates[0].games[4].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk5}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime5 = data.gameData.datetime.time;
				const gameTime5AMPM = data.gameData.datetime.ampm;
				const gameTime5Div = document.getElementById("gameTime5");
				const gameTime5AMPMDiv = document.getElementById("gameTime5AMPM");
				const heading8 = document.createElement("span");
				const heading25 = document.createElement("span");
				heading8.innerHTML = gameTime5;
				gameTime5Div.appendChild(heading8);
				heading25.innerHTML = gameTime5AMPM;
				gameTime5AMPMDiv.appendChild(heading25);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #6
	if (data.dates[0].games[5].status.abstractGameCode === "P") {
		const gamePk6 = data.dates[0].games[5].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk6}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime6 = data.gameData.datetime.time;
				const gameTime6AMPM = data.gameData.datetime.ampm;
				const gameTime6Div = document.getElementById("gameTime6");
				const gameTime6AMPMDiv = document.getElementById("gameTime6AMPM");
				const heading9 = document.createElement("span");
				const heading26 = document.createElement("span");
				heading9.innerHTML = gameTime6;
				gameTime6Div.appendChild(heading9);
				heading26.innerHTML = gameTime6AMPM;
				gameTime6AMPMDiv.appendChild(heading26);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #7
	if (data.dates[0].games[6].status.abstractGameCode === "P") {
		const gamePk7 = data.dates[0].games[6].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk7}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime7 = data.gameData.datetime.time;
				const gameTime7AMPM = data.gameData.datetime.ampm;
				const gameTime7Div = document.getElementById("gameTime7");
				const gameTime7AMPMDiv = document.getElementById("gameTime7AMPM");
				const heading10 = document.createElement("span");
				const heading27 = document.createElement("span");
				heading10.innerHTML = gameTime7;
				gameTime7Div.appendChild(heading10);
				heading27.innerHTML = gameTime7AMPM;
				gameTime7AMPMDiv.appendChild(heading27);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #8
	if (data.dates[0].games[7].status.abstractGameCode === "P") {
		const gamePk8 = data.dates[0].games[7].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk8}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime8 = data.gameData.datetime.time;
				const gameTime8AMPM = data.gameData.datetime.ampm;
				const gameTime8Div = document.getElementById("gameTime8");
				const gameTime8AMPMDiv = document.getElementById("gameTime8AMPM");
				const heading11 = document.createElement("span");
				const heading28 = document.createElement("span");
				heading11.innerHTML = gameTime8;
				gameTime8Div.appendChild(heading11);
				heading28.innerHTML = gameTime8AMPM;
				gameTime8AMPMDiv.appendChild(heading28);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #9
	if (data.dates[0].games[8].status.abstractGameCode === "P") {
		const gamePk9 = data.dates[0].games[8].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk9}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime9 = data.gameData.datetime.time;
				const gameTime9AMPM = data.gameData.datetime.ampm;
				const gameTime9Div = document.getElementById("gameTime9");
				const gameTime9AMPMDiv = document.getElementById("gameTime9AMPM");
				const heading12 = document.createElement("span");
				const heading29 = document.createElement("span");
				heading12.innerHTML = gameTime9;
				gameTime9Div.appendChild(heading12);
				heading29.innerHTML = gameTime9AMPM;
				gameTime9AMPMDiv.appendChild(heading29);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #10
	if (data.dates[0].games[9].status.abstractGameCode === "P") {
		const gamePk10 = data.dates[0].games[9].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk10}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime10 = data.gameData.datetime.time;
				const gameTime10AMPM = data.gameData.datetime.ampm;
				const gameTime10Div = document.getElementById("gameTime10");
				const gameTime10AMPMDiv = document.getElementById("gameTime10AMPM");
				const heading13 = document.createElement("span");
				const heading30 = document.createElement("span");
				heading13.innerHTML = gameTime10;
				gameTime10Div.appendChild(heading13);
				heading30.innerHTML = gameTime10AMPM;
				gameTime10AMPMDiv.appendChild(heading30);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #11
	if (data.dates[0].games[10].status.abstractGameCode === "P") {
		const gamePk11 = data.dates[0].games[10].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk11}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime11 = data.gameData.datetime.time;
				const gameTime11AMPM = data.gameData.datetime.ampm;
				const gameTime11Div = document.getElementById("gameTime11");
				const gameTime11AMPMDiv = document.getElementById("gameTime11AMPM");
				const heading14 = document.createElement("span");
				const heading31 = document.createElement("span");
				heading14.innerHTML = gameTime11;
				gameTime11Div.appendChild(heading14);
				heading31.innerHTML = gameTime11AMPM;
				gameTime11AMPMDiv.appendChild(heading31);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #12
	if (data.dates[0].games[11].status.abstractGameCode === "P") {
		const gamePk12 = data.dates[0].games[11].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk12}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime12 = data.gameData.datetime.time;
				const gameTime12AMPM = data.gameData.datetime.ampm;
				const gameTime12Div = document.getElementById("gameTime12");
				const gameTime12AMPMDiv = document.getElementById("gameTime12AMPM");
				const heading15 = document.createElement("span");
				const heading32 = document.createElement("span");
				heading15.innerHTML = gameTime12;
				gameTime12Div.appendChild(heading15);
				heading32.innerHTML = gameTime12AMPM;
				gameTime12AMPMDiv.appendChild(heading32);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #13
	if (data.dates[0].games[12].status.abstractGameCode === "P") {
		const gamePk13 = data.dates[0].games[12].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk13}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime13 = data.gameData.datetime.time;
				const gameTime13AMPM = data.gameData.datetime.ampm;
				const gameTime13Div = document.getElementById("gameTime13");
				const gameTime13AMPMDiv = document.getElementById("gameTime13AMPM");
				const heading16 = document.createElement("span");
				const heading33 = document.createElement("span");
				heading16.innerHTML = gameTime13;
				gameTime13Div.appendChild(heading16);
				heading33.innerHTML = gameTime13AMPM;
				gameTime13AMPMDiv.appendChild(heading33);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #14
	if (data.dates[0].games[13].status.abstractGameCode === "P") {
		const gamePk14 = data.dates[0].games[13].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk14}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime14 = data.gameData.datetime.time;
				const gameTime14AMPM = data.gameData.datetime.ampm;
				const gameTime14Div = document.getElementById("gameTime14");
				const gameTime14AMPMDiv = document.getElementById("gameTime14AMPM");
				const heading17 = document.createElement("span");
				const heading34 = document.createElement("span");
				heading17.innerHTML = gameTime14;
				gameTime14Div.appendChild(heading17);
				heading34.innerHTML = gameTime14AMPM;
				gameTime14AMPMDiv.appendChild(heading34);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #15
	if (data.dates[0].games[14].status.abstractGameCode === "P") {
		const gamePk15 = data.dates[0].games[14].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk15}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime15 = data.gameData.datetime.time;
				const gameTime15AMPM = data.gameData.datetime.ampm;
				const gameTime15Div = document.getElementById("gameTime15");
				const gameTime15AMPMDiv = document.getElementById("gameTime15AMPM");
				const heading18 = document.createElement("span");
				const heading35 = document.createElement("span");
				heading18.innerHTML = gameTime15;
				gameTime15Div.appendChild(heading18);
				heading35.innerHTML = gameTime15AMPM;
				gameTime15AMPMDiv.appendChild(heading35);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #16
	if (data.dates[0].games[15].status.abstractGameCode === "P") {
		const gamePk16 = data.dates[0].games[15].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk16}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime16 = data.gameData.datetime.time;
				const gameTime16AMPM = data.gameData.datetime.ampm;
				const gameTime16Div = document.getElementById("gameTime16");
				const gameTime16AMPMDiv = document.getElementById("gameTime16AMPM");
				const heading19 = document.createElement("span");
				const heading36 = document.createElement("span");
				heading19.innerHTML = gameTime16;
				gameTime16Div.appendChild(heading19);
				heading36.innerHTML = gameTime16AMPM;
				gameTime16AMPMDiv.appendChild(heading36);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #17
	if (data.dates[0].games[16].status.abstractGameCode === "P") {
		const gamePk17 = data.dates[0].games[16].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk17}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime17 = data.gameData.datetime.time;
				const gameTime17AMPM = data.gameData.datetime.ampm;
				const gameTime17Div = document.getElementById("gameTime17");
				const gameTime17AMPMDiv = document.getElementById("gameTime17AMPM");
				const heading20 = document.createElement("span");
				const heading37 = document.createElement("span");
				heading20.innerHTML = gameTime17;
				gameTime17Div.appendChild(heading20);
				heading37.innerHTML = gameTime17AMPM;
				gameTime17AMPMDiv.appendChild(heading37);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #18
	if (data.dates[0].games[17].status.abstractGameCode === "P") {
		const gamePk18 = data.dates[0].games[17].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk18}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime18 = data.gameData.datetime.time;
				const gameTime18AMPM = data.gameData.datetime.ampm;
				const gameTime18Div = document.getElementById("gameTime18");
				const gameTime18AMPMDiv = document.getElementById("gameTime18AMPM");
				const heading21 = document.createElement("span");
				const heading38 = document.createElement("span");
				heading21.innerHTML = gameTime18;
				gameTime18Div.appendChild(heading21);
				heading38.innerHTML = gameTime18AMPM;
				gameTime18AMPMDiv.appendChild(heading38);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #19
	if (data.dates[0].games[18].status.abstractGameCode === "P") {
		const gamePk19 = data.dates[0].games[18].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk19}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime19 = data.gameData.datetime.time;
				const gameTime19AMPM = data.gameData.datetime.ampm;
				const gameTime19Div = document.getElementById("gameTime19");
				const gameTime19AMPMDiv = document.getElementById("gameTime19AMPM");
				const heading22 = document.createElement("span");
				const heading39 = document.createElement("span");
				heading22.innerHTML = gameTime19;
				gameTime19Div.appendChild(heading22);
				heading39.innerHTML = gameTime19AMPM;
				gameTime19AMPMDiv.appendChild(heading39);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
	// Game Time #20
	if (data.dates[0].games[19].status.abstractGameCode === "P") {
		const gamePk20 = data.dates[0].games[19].gamePk;
		fetch(`https://statsapi.mlb.com/api/v1.1/game/${gamePk20}/feed/live`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("NETWORK RESPONSE NOT OK");
				}
			})
			.then((data) => {
				const gameTime20 = data.gameData.datetime.time;
				const gameTime20AMPM = data.gameData.datetime.ampm;
				const gameTime20Div = document.getElementById("gameTime20");
				const gameTime20AMPMDiv = document.getElementById("gameTime20AMPM");
				const heading23 = document.createElement("span");
				const heading40 = document.createElement("span");
				heading23.innerHTML = gameTime20;
				gameTime20Div.appendChild(heading23);
				heading40.innerHTML = gameTime20AMPM;
				gameTime20AMPMDiv.appendChild(heading40);
			})
			.catch((error) => {
				console.error("FETCH ERROR:", error);
			});
	} else {
	}
}
