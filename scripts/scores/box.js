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
	if (data.dates[0].games[0].status.abstractGameCode === "P") {
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
	if (data.dates[0].games[1].status.abstractGameCode === "P") {
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
	if (data.dates[0].games[2].status.abstractGameCode === "P") {
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
	// Box #4
	const gamePk4 = data.dates[0].games[3].gamePk;
	const gameBoxDiv4 = document.getElementById("gameBox4");
	if (data.dates[0].games[3].status.abstractGameCode === "P") {
		gameBoxDiv4.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[3].status.detailedState === "Final") {
			gameBoxDiv4.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk4}/final/box`
			);
		} else {
			gameBoxDiv4.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk4}`
			);
		}
	} // Box #5
	const gamePk5 = data.dates[0].games[4].gamePk;
	const gameBoxDiv5 = document.getElementById("gameBox5");
	if (data.dates[0].games[4].status.abstractGameCode === "P") {
		gameBoxDiv5.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[4].status.detailedState === "Final") {
			gameBoxDiv5.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk5}/final/box`
			);
		} else {
			gameBoxDiv5.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk5}`
			);
		}
	} // Box #6
	const gamePk6 = data.dates[0].games[5].gamePk;
	const gameBoxDiv6 = document.getElementById("gameBox6");
	if (data.dates[0].games[5].status.abstractGameCode === "P") {
		gameBoxDiv6.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[5].status.detailedState === "Final") {
			gameBoxDiv6.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk6}/final/box`
			);
		} else {
			gameBoxDiv6.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk6}`
			);
		}
	} // Box #7
	const gamePk7 = data.dates[0].games[6].gamePk;
	const gameBoxDiv7 = document.getElementById("gameBox7");
	if (data.dates[0].games[6].status.abstractGameCode === "P") {
		gameBoxDiv7.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[6].status.detailedState === "Final") {
			gameBoxDiv7.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk7}/final/box`
			);
		} else {
			gameBoxDiv7.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk7}`
			);
		}
	} // Box #8
	const gamePk8 = data.dates[0].games[7].gamePk;
	const gameBoxDiv8 = document.getElementById("gameBox8");
	if (data.dates[0].games[7].status.abstractGameCode === "P") {
		gameBoxDiv8.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[7].status.detailedState === "Final") {
			gameBoxDiv8.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk8}/final/box`
			);
		} else {
			gameBoxDiv8.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk8}`
			);
		}
	} // Box #9
	const gamePk9 = data.dates[0].games[8].gamePk;
	const gameBoxDiv9 = document.getElementById("gameBox9");
	if (data.dates[0].games[8].status.abstractGameCode === "P") {
		gameBoxDiv9.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[8].status.detailedState === "Final") {
			gameBoxDiv9.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk9}/final/box`
			);
		} else {
			gameBoxDiv9.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk9}`
			);
		}
	}
	// Box #10
	const gamePk10 = data.dates[0].games[9].gamePk;
	const gameBoxDiv10 = document.getElementById("gameBox10");
	if (data.dates[0].games[9].status.abstractGameCode === "P") {
		gameBoxDiv10.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[9].status.detailedState === "Final") {
			gameBoxDiv10.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk10}/final/box`
			);
		} else {
			gameBoxDiv10.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk10}`
			);
		}
	} // Box #11
	const gamePk11 = data.dates[0].games[10].gamePk;
	const gameBoxDiv11 = document.getElementById("gameBox11");
	if (data.dates[0].games[10].status.abstractGameCode === "P") {
		gameBoxDiv11.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[10].status.detailedState === "Final") {
			gameBoxDiv11.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk11}/final/box`
			);
		} else {
			gameBoxDiv11.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk11}`
			);
		}
	} // Box #12
	const gamePk12 = data.dates[0].games[11].gamePk;
	const gameBoxDiv12 = document.getElementById("gameBox12");
	if (data.dates[0].games[11].status.abstractGameCode === "P") {
		gameBoxDiv12.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[11].status.detailedState === "Final") {
			gameBoxDiv12.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk12}/final/box`
			);
		} else {
			gameBoxDiv12.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk12}`
			);
		}
	} // Box #13
	const gamePk13 = data.dates[0].games[12].gamePk;
	const gameBoxDiv13 = document.getElementById("gameBox13");
	if (data.dates[0].games[12].status.abstractGameCode === "P") {
		gameBoxDiv13.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[12].status.detailedState === "Final") {
			gameBoxDiv13.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk13}/final/box`
			);
		} else {
			gameBoxDiv13.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk13}`
			);
		}
	} // Box #14
	const gamePk14 = data.dates[0].games[13].gamePk;
	const gameBoxDiv14 = document.getElementById("gameBox14");
	if (data.dates[0].games[13].status.abstractGameCode === "P") {
		gameBoxDiv14.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[13].status.detailedState === "Final") {
			gameBoxDiv14.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk14}/final/box`
			);
		} else {
			gameBoxDiv14.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk14}`
			);
		}
	} // Box #15
	const gamePk15 = data.dates[0].games[14].gamePk;
	const gameBoxDiv15 = document.getElementById("gameBox15");
	if (data.dates[0].games[14].status.abstractGameCode === "P") {
		gameBoxDiv15.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[14].status.detailedState === "Final") {
			gameBoxDiv15.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk15}/final/box`
			);
		} else {
			gameBoxDiv15.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk15}`
			);
		}
	} // Box #16
	const gamePk16 = data.dates[0].games[15].gamePk;
	const gameBoxDiv16 = document.getElementById("gameBox16");
	if (data.dates[0].games[15].status.abstractGameCode === "P") {
		gameBoxDiv16.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[15].status.detailedState === "Final") {
			gameBoxDiv16.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk16}/final/box`
			);
		} else {
			gameBoxDiv16.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk16}`
			);
		}
	} // Box #17
	const gamePk17 = data.dates[0].games[16].gamePk;
	const gameBoxDiv17 = document.getElementById("gameBox17");
	if (data.dates[0].games[16].status.abstractGameCode === "P") {
		gameBoxDiv17.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[16].status.detailedState === "Final") {
			gameBoxDiv17.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk17}/final/box`
			);
		} else {
			gameBoxDiv17.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk17}`
			);
		}
	} // Box #18
	const gamePk18 = data.dates[0].games[17].gamePk;
	const gameBoxDiv18 = document.getElementById("gameBox18");
	if (data.dates[0].games[17].status.abstractGameCode === "P") {
		gameBoxDiv18.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[17].status.detailedState === "Final") {
			gameBoxDiv18.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk18}/final/box`
			);
		} else {
			gameBoxDiv18.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk18}`
			);
		}
	} // Box #19
	const gamePk19 = data.dates[0].games[18].gamePk;
	const gameBoxDiv19 = document.getElementById("gameBox19");
	if (data.dates[0].games[18].status.abstractGameCode === "P") {
		gameBoxDiv19.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[18].status.detailedState === "Final") {
			gameBoxDiv19.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk19}/final/box`
			);
		} else {
			gameBoxDiv19.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk19}`
			);
		}
	} // Box #20
	const gamePk20 = data.dates[0].games[19].gamePk;
	const gameBoxDiv20 = document.getElementById("gameBox20");
	if (data.dates[0].games[19].status.abstractGameCode === "P") {
		gameBoxDiv20.setAttribute("href", `#`);
	} else {
		if (data.dates[0].games[19].status.detailedState === "Final") {
			gameBoxDiv20.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk20}/final/box`
			);
		} else {
			gameBoxDiv20.setAttribute(
				"href",
				`https://www.mlb.com/gameday/${gamePk20}`
			);
		}
	}
}
