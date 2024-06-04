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
		displayData9(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData9(data) {
	if (data.totalGames >= 1) {
	} else {
		document.getElementById("game1").style.display = "none";
	}
	if (data.totalGames >= 2) {
	} else {
		document.getElementById("game2").style.display = "none";
	}
	if (data.totalGames >= 3) {
	} else {
		document.getElementById("game3").style.display = "none";
	}
	if (data.totalGames >= 4) {
	} else {
		document.getElementById("game4").style.display = "none";
	}
	if (data.totalGames >= 5) {
	} else {
		document.getElementById("game5").style.display = "none";
	}
	if (data.totalGames >= 6) {
	} else {
		document.getElementById("game6").style.display = "none";
	}
	if (data.totalGames >= 7) {
	} else {
		document.getElementById("game7").style.display = "none";
	}
	if (data.totalGames >= 8) {
	} else {
		document.getElementById("game8").style.display = "none";
	}
	if (data.totalGames >= 9) {
	} else {
		document.getElementById("game9").style.display = "none";
	}
	if (data.totalGames >= 10) {
	} else {
		document.getElementById("game10").style.display = "none";
	}
	if (data.totalGames >= 11) {
	} else {
		document.getElementById("game11").style.display = "none";
	}
	if (data.totalGames >= 12) {
	} else {
		document.getElementById("game12").style.display = "none";
	}
	if (data.totalGames >= 13) {
	} else {
		document.getElementById("game13").style.display = "none";
	}
	if (data.totalGames >= 14) {
	} else {
		document.getElementById("game14").style.display = "none";
	}
	if (data.totalGames >= 15) {
	} else {
		document.getElementById("game15").style.display = "none";
	}
	if (data.totalGames >= 16) {
	} else {
		document.getElementById("game16").style.display = "none";
	}
	if (data.totalGames >= 17) {
	} else {
		document.getElementById("game17").style.display = "none";
	}
	if (data.totalGames >= 18) {
	} else {
		document.getElementById("game18").style.display = "none";
	}
	if (data.totalGames >= 19) {
	} else {
		document.getElementById("game19").style.display = "none";
	}
	if (data.totalGames >= 20) {
	} else {
		document.getElementById("game20").style.display = "none";
	}
}
