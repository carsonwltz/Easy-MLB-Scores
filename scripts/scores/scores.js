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
		displayData1(data);
	})
	.catch((error) => {
		console.error("FETCH ERROR:", error);
	});
function displayData1(data) {
	//Away Team Score #1
	if (typeof data.dates[0].games[0].teams.away.score === "number") {
		var awayTeamScore1 = data.dates[0].games[0].teams.away.score;
	} else {
		var awayTeamScore1 = "";
	}
	const awayTeamScoreDiv1 = document.getElementById("awayTeamScore1");
	const heading1 = document.createElement("span");
	heading1.innerHTML = awayTeamScore1;
	if (
		data.dates[0].games[0].teams.away.score >
		data.dates[0].games[0].teams.home.score
	) {
		awayTeamScoreDiv1.appendChild(heading1).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv1.appendChild(heading1);
	}
	//Home Team Score #1
	if (typeof data.dates[0].games[0].teams.home.score === "number") {
		var homeTeamScore1 = data.dates[0].games[0].teams.home.score;
	} else {
		var homeTeamScore1 = "";
	}
	const homeTeamScoreDiv1 = document.getElementById("homeTeamScore1");
	const heading2 = document.createElement("span");
	heading2.innerHTML = homeTeamScore1;
	if (
		data.dates[0].games[0].teams.home.score >
		data.dates[0].games[0].teams.away.score
	) {
		homeTeamScoreDiv1.appendChild(heading2).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv1.appendChild(heading2);
	}
	//Away Team Score #2
	if (typeof data.dates[0].games[1].teams.away.score === "number") {
		var awayTeamScore2 = data.dates[0].games[1].teams.away.score;
	} else {
		var awayTeamScore2 = "";
	}
	const awayTeamScoreDiv2 = document.getElementById("awayTeamScore2");
	const heading3 = document.createElement("span");
	heading3.innerHTML = awayTeamScore2;
	if (
		data.dates[0].games[1].teams.away.score >
		data.dates[0].games[1].teams.home.score
	) {
		awayTeamScoreDiv2.appendChild(heading3).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv2.appendChild(heading3);
	}
	//Home Team Score #2
	if (typeof data.dates[0].games[1].teams.home.score === "number") {
		var homeTeamScore2 = data.dates[0].games[1].teams.home.score;
	} else {
		var homeTeamScore2 = "";
	}
	const homeTeamScoreDiv2 = document.getElementById("homeTeamScore2");
	const heading4 = document.createElement("span");
	heading4.innerHTML = homeTeamScore2;
	if (
		data.dates[0].games[1].teams.home.score >
		data.dates[0].games[1].teams.away.score
	) {
		homeTeamScoreDiv2.appendChild(heading4).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv2.appendChild(heading4);
	}
	//Away Team Score #3
	if (typeof data.dates[0].games[2].teams.away.score === "number") {
		var awayTeamScore3 = data.dates[0].games[2].teams.away.score;
	} else {
		var awayTeamScore3 = "";
	}
	const awayTeamScoreDiv3 = document.getElementById("awayTeamScore3");
	const heading5 = document.createElement("span");
	heading5.innerHTML = awayTeamScore3;
	if (
		data.dates[0].games[2].teams.away.score >
		data.dates[0].games[2].teams.home.score
	) {
		awayTeamScoreDiv3.appendChild(heading5).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv3.appendChild(heading5);
	}
	//Home Team Score #3
	if (typeof data.dates[0].games[2].teams.home.score === "number") {
		var homeTeamScore3 = data.dates[0].games[2].teams.home.score;
	} else {
		var homeTeamScore3 = "";
	}
	const homeTeamScoreDiv3 = document.getElementById("homeTeamScore3");
	const heading6 = document.createElement("span");
	heading6.innerHTML = homeTeamScore3;
	if (
		data.dates[0].games[2].teams.home.score >
		data.dates[0].games[2].teams.away.score
	) {
		homeTeamScoreDiv3.appendChild(heading6).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv3.appendChild(heading6);
	}
	//Away Team Score #4
	if (typeof data.dates[0].games[3].teams.away.score === "number") {
		var awayTeamScore4 = data.dates[0].games[3].teams.away.score;
	} else {
		var awayTeamScore4 = "";
	}
	const awayTeamScoreDiv4 = document.getElementById("awayTeamScore4");
	const heading7 = document.createElement("span");
	heading7.innerHTML = awayTeamScore4;
	if (
		data.dates[0].games[3].teams.away.score >
		data.dates[0].games[3].teams.home.score
	) {
		awayTeamScoreDiv4.appendChild(heading7).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv4.appendChild(heading7);
	}
	//Home Team Score #4
	if (typeof data.dates[0].games[3].teams.home.score === "number") {
		var homeTeamScore4 = data.dates[0].games[3].teams.home.score;
	} else {
		var homeTeamScore4 = "";
	}
	const homeTeamScoreDiv4 = document.getElementById("homeTeamScore4");
	const heading8 = document.createElement("span");
	heading8.innerHTML = homeTeamScore4;
	if (
		data.dates[0].games[3].teams.home.score >
		data.dates[0].games[3].teams.away.score
	) {
		homeTeamScoreDiv4.appendChild(heading8).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv4.appendChild(heading8);
	}
	//Away Team Score #5
	if (typeof data.dates[0].games[4].teams.away.score === "number") {
		var awayTeamScore5 = data.dates[0].games[4].teams.away.score;
	} else {
		var awayTeamScore5 = "";
	}
	const awayTeamScoreDiv5 = document.getElementById("awayTeamScore5");
	const heading9 = document.createElement("span");
	heading9.innerHTML = awayTeamScore5;
	if (
		data.dates[0].games[4].teams.away.score >
		data.dates[0].games[4].teams.home.score
	) {
		awayTeamScoreDiv5.appendChild(heading9).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv5.appendChild(heading9);
	}
	//Home Team Score #5
	if (typeof data.dates[0].games[4].teams.home.score === "number") {
		var homeTeamScore5 = data.dates[0].games[4].teams.home.score;
	} else {
		var homeTeamScore5 = "";
	}
	const homeTeamScoreDiv5 = document.getElementById("homeTeamScore5");
	const heading10 = document.createElement("span");
	heading10.innerHTML = homeTeamScore5;
	if (
		data.dates[0].games[4].teams.home.score >
		data.dates[0].games[4].teams.away.score
	) {
		homeTeamScoreDiv5.appendChild(heading10).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv5.appendChild(heading10);
	}
	//Away Team Score #6
	if (typeof data.dates[0].games[5].teams.away.score === "number") {
		var awayTeamScore6 = data.dates[0].games[5].teams.away.score;
	} else {
		var awayTeamScore6 = "";
	}
	const awayTeamScoreDiv6 = document.getElementById("awayTeamScore6");
	const heading11 = document.createElement("span");
	heading11.innerHTML = awayTeamScore6;
	if (
		data.dates[0].games[5].teams.away.score >
		data.dates[0].games[5].teams.home.score
	) {
		awayTeamScoreDiv6.appendChild(heading11).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv6.appendChild(heading11);
	}
	//Home Team Score #6
	if (typeof data.dates[0].games[5].teams.home.score === "number") {
		var homeTeamScore6 = data.dates[0].games[5].teams.home.score;
	} else {
		var homeTeamScore6 = "";
	}
	const homeTeamScoreDiv6 = document.getElementById("homeTeamScore6");
	const heading12 = document.createElement("span");
	heading12.innerHTML = homeTeamScore6;
	if (
		data.dates[0].games[5].teams.home.score >
		data.dates[0].games[5].teams.away.score
	) {
		homeTeamScoreDiv6.appendChild(heading12).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv6.appendChild(heading12);
	}
	//Away Team Score #7
	if (typeof data.dates[0].games[6].teams.away.score === "number") {
		var awayTeamScore7 = data.dates[0].games[6].teams.away.score;
	} else {
		var awayTeamScore7 = "";
	}
	const awayTeamScoreDiv7 = document.getElementById("awayTeamScore7");
	const heading13 = document.createElement("span");
	heading13.innerHTML = awayTeamScore7;
	if (
		data.dates[0].games[6].teams.away.score >
		data.dates[0].games[6].teams.home.score
	) {
		awayTeamScoreDiv7.appendChild(heading13).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv7.appendChild(heading13);
	}
	//Home Team Score #7
	if (typeof data.dates[0].games[6].teams.home.score === "number") {
		var homeTeamScore7 = data.dates[0].games[6].teams.home.score;
	} else {
		var homeTeamScore7 = "";
	}
	const homeTeamScoreDiv7 = document.getElementById("homeTeamScore7");
	const heading14 = document.createElement("span");
	heading14.innerHTML = homeTeamScore7;
	if (
		data.dates[0].games[6].teams.home.score >
		data.dates[0].games[6].teams.away.score
	) {
		homeTeamScoreDiv7.appendChild(heading14).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv7.appendChild(heading14);
	}
	//Away Team Score #8
	if (typeof data.dates[0].games[7].teams.away.score === "number") {
		var awayTeamScore8 = data.dates[0].games[7].teams.away.score;
	} else {
		var awayTeamScore8 = "";
	}
	const awayTeamScoreDiv8 = document.getElementById("awayTeamScore8");
	const heading15 = document.createElement("span");
	heading15.innerHTML = awayTeamScore8;
	if (
		data.dates[0].games[7].teams.away.score >
		data.dates[0].games[7].teams.home.score
	) {
		awayTeamScoreDiv8.appendChild(heading15).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv8.appendChild(heading15);
	}
	//Home Team Score #8
	if (typeof data.dates[0].games[7].teams.home.score === "number") {
		var homeTeamScore8 = data.dates[0].games[7].teams.home.score;
	} else {
		var homeTeamScore8 = "";
	}
	const homeTeamScoreDiv8 = document.getElementById("homeTeamScore8");
	const heading16 = document.createElement("span");
	heading16.innerHTML = homeTeamScore8;
	if (
		data.dates[0].games[7].teams.home.score >
		data.dates[0].games[7].teams.away.score
	) {
		homeTeamScoreDiv8.appendChild(heading16).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv8.appendChild(heading16);
	}
	//Away Team Score #9
	if (typeof data.dates[0].games[8].teams.away.score === "number") {
		var awayTeamScore9 = data.dates[0].games[8].teams.away.score;
	} else {
		var awayTeamScore9 = "";
	}
	const awayTeamScoreDiv9 = document.getElementById("awayTeamScore9");
	const heading17 = document.createElement("span");
	heading17.innerHTML = awayTeamScore9;
	if (
		data.dates[0].games[8].teams.away.score >
		data.dates[0].games[8].teams.home.score
	) {
		awayTeamScoreDiv9.appendChild(heading17).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv9.appendChild(heading17);
	}
	//Home Team Score #9
	if (typeof data.dates[0].games[8].teams.home.score === "number") {
		var homeTeamScore9 = data.dates[0].games[8].teams.home.score;
	} else {
		var homeTeamScore9 = "";
	}
	const homeTeamScoreDiv9 = document.getElementById("homeTeamScore9");
	const heading18 = document.createElement("span");
	heading18.innerHTML = homeTeamScore9;
	if (
		data.dates[0].games[8].teams.home.score >
		data.dates[0].games[8].teams.away.score
	) {
		homeTeamScoreDiv9.appendChild(heading18).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv9.appendChild(heading18);
	}
	//Away Team Score #10
	if (typeof data.dates[0].games[9].teams.away.score === "number") {
		var awayTeamScore10 = data.dates[0].games[9].teams.away.score;
	} else {
		var awayTeamScore10 = "";
	}
	const awayTeamScoreDiv10 = document.getElementById("awayTeamScore10");
	const heading19 = document.createElement("span");
	heading19.innerHTML = awayTeamScore10;
	if (
		data.dates[0].games[9].teams.away.score >
		data.dates[0].games[9].teams.home.score
	) {
		awayTeamScoreDiv10.appendChild(heading19).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv10.appendChild(heading19);
	}
	//Home Team Score #10
	if (typeof data.dates[0].games[9].teams.home.score === "number") {
		var homeTeamScore10 = data.dates[0].games[9].teams.home.score;
	} else {
		var homeTeamScore10 = "";
	}
	const homeTeamScoreDiv10 = document.getElementById("homeTeamScore10");
	const heading20 = document.createElement("span");
	heading20.innerHTML = homeTeamScore10;
	if (
		data.dates[0].games[9].teams.home.score >
		data.dates[0].games[9].teams.away.score
	) {
		homeTeamScoreDiv10.appendChild(heading20).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv10.appendChild(heading20);
	}
	//Away Team Score #11
	if (typeof data.dates[0].games[10].teams.away.score === "number") {
		var awayTeamScore11 = data.dates[0].games[10].teams.away.score;
	} else {
		var awayTeamScore11 = "";
	}
	const awayTeamScoreDiv11 = document.getElementById("awayTeamScore11");
	const heading21 = document.createElement("span");
	heading21.innerHTML = awayTeamScore11;
	if (
		data.dates[0].games[10].teams.away.score >
		data.dates[0].games[10].teams.home.score
	) {
		awayTeamScoreDiv11.appendChild(heading21).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv11.appendChild(heading21);
	}
	//Home Team Score #11
	if (typeof data.dates[0].games[10].teams.home.score === "number") {
		var homeTeamScore11 = data.dates[0].games[10].teams.home.score;
	} else {
		var homeTeamScore11 = "";
	}
	const homeTeamScoreDiv11 = document.getElementById("homeTeamScore11");
	const heading22 = document.createElement("span");
	heading22.innerHTML = homeTeamScore11;
	if (
		data.dates[0].games[10].teams.home.score >
		data.dates[0].games[10].teams.away.score
	) {
		homeTeamScoreDiv11.appendChild(heading22).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv11.appendChild(heading22);
	}
	//Away Team Score #12
	if (typeof data.dates[0].games[11].teams.away.score === "number") {
		var awayTeamScore12 = data.dates[0].games[11].teams.away.score;
	} else {
		var awayTeamScore12 = "";
	}
	const awayTeamScoreDiv12 = document.getElementById("awayTeamScore12");
	const heading23 = document.createElement("span");
	heading23.innerHTML = awayTeamScore12;
	if (
		data.dates[0].games[11].teams.away.score >
		data.dates[0].games[11].teams.home.score
	) {
		awayTeamScoreDiv12.appendChild(heading23).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv12.appendChild(heading23);
	}
	//Home Team Score #12
	if (typeof data.dates[0].games[11].teams.home.score === "number") {
		var homeTeamScore12 = data.dates[0].games[11].teams.home.score;
	} else {
		var homeTeamScore12 = "";
	}
	const homeTeamScoreDiv12 = document.getElementById("homeTeamScore12");
	const heading24 = document.createElement("span");
	heading24.innerHTML = homeTeamScore12;
	if (
		data.dates[0].games[11].teams.home.score >
		data.dates[0].games[11].teams.away.score
	) {
		homeTeamScoreDiv12.appendChild(heading24).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv12.appendChild(heading24);
	}
	//Away Team Score #13
	if (typeof data.dates[0].games[12].teams.away.score === "number") {
		var awayTeamScore13 = data.dates[0].games[12].teams.away.score;
	} else {
		var awayTeamScore13 = "";
	}
	const awayTeamScoreDiv13 = document.getElementById("awayTeamScore13");
	const heading25 = document.createElement("span");
	heading25.innerHTML = awayTeamScore13;
	if (
		data.dates[0].games[12].teams.away.score >
		data.dates[0].games[12].teams.home.score
	) {
		awayTeamScoreDiv13.appendChild(heading25).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv13.appendChild(heading25);
	}
	//Home Team Score #13
	if (typeof data.dates[0].games[12].teams.home.score === "number") {
		var homeTeamScore13 = data.dates[0].games[12].teams.home.score;
	} else {
		var homeTeamScore13 = "";
	}
	const homeTeamScoreDiv13 = document.getElementById("homeTeamScore13");
	const heading26 = document.createElement("span");
	heading26.innerHTML = homeTeamScore13;
	if (
		data.dates[0].games[12].teams.home.score >
		data.dates[0].games[12].teams.away.score
	) {
		homeTeamScoreDiv13.appendChild(heading26).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv13.appendChild(heading26);
	}
	//Away Team Score #14
	if (typeof data.dates[0].games[13].teams.away.score === "number") {
		var awayTeamScore14 = data.dates[0].games[13].teams.away.score;
	} else {
		var awayTeamScore14 = "";
	}
	const awayTeamScoreDiv14 = document.getElementById("awayTeamScore14");
	const heading27 = document.createElement("span");
	heading27.innerHTML = awayTeamScore14;
	if (
		data.dates[0].games[13].teams.away.score >
		data.dates[0].games[13].teams.home.score
	) {
		awayTeamScoreDiv14.appendChild(heading27).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv14.appendChild(heading27);
	}
	//Home Team Score #14
	if (typeof data.dates[0].games[13].teams.home.score === "number") {
		var homeTeamScore14 = data.dates[0].games[13].teams.home.score;
	} else {
		var homeTeamScore14 = "";
	}
	const homeTeamScoreDiv14 = document.getElementById("homeTeamScore14");
	const heading28 = document.createElement("span");
	heading28.innerHTML = homeTeamScore14;
	if (
		data.dates[0].games[13].teams.home.score >
		data.dates[0].games[13].teams.away.score
	) {
		homeTeamScoreDiv14.appendChild(heading28).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv14.appendChild(heading28);
	}
	//Away Team Score #15
	if (typeof data.dates[0].games[14].teams.away.score === "number") {
		var awayTeamScore15 = data.dates[0].games[14].teams.away.score;
	} else {
		var awayTeamScore15 = "";
	}
	const awayTeamScoreDiv15 = document.getElementById("awayTeamScore15");
	const heading29 = document.createElement("span");
	heading29.innerHTML = awayTeamScore15;
	if (
		data.dates[0].games[14].teams.away.score >
		data.dates[0].games[14].teams.home.score
	) {
		awayTeamScoreDiv15.appendChild(heading29).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv15.appendChild(heading29);
	}
	//Home Team Score #15
	if (typeof data.dates[0].games[14].teams.home.score === "number") {
		var homeTeamScore15 = data.dates[0].games[14].teams.home.score;
	} else {
		var homeTeamScore15 = "";
	}
	const homeTeamScoreDiv15 = document.getElementById("homeTeamScore15");
	const heading30 = document.createElement("span");
	heading30.innerHTML = homeTeamScore15;
	if (
		data.dates[0].games[14].teams.home.score >
		data.dates[0].games[14].teams.away.score
	) {
		homeTeamScoreDiv15.appendChild(heading30).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv15.appendChild(heading30);
	}
	//Away Team Score #16
	if (typeof data.dates[0].games[15].teams.away.score === "number") {
		var awayTeamScore16 = data.dates[0].games[15].teams.away.score;
	} else {
		var awayTeamScore16 = "";
	}
	const awayTeamScoreDiv16 = document.getElementById("awayTeamScore16");
	const heading31 = document.createElement("span");
	heading31.innerHTML = awayTeamScore16;
	if (
		data.dates[0].games[15].teams.away.score >
		data.dates[0].games[15].teams.home.score
	) {
		awayTeamScoreDiv16.appendChild(heading31).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv16.appendChild(heading31);
	}
	//Home Team Score #16
	if (typeof data.dates[0].games[15].teams.home.score === "number") {
		var homeTeamScore16 = data.dates[0].games[15].teams.home.score;
	} else {
		var homeTeamScore16 = "";
	}
	const homeTeamScoreDiv16 = document.getElementById("homeTeamScore16");
	const heading32 = document.createElement("span");
	heading32.innerHTML = homeTeamScore16;
	if (
		data.dates[0].games[15].teams.home.score >
		data.dates[0].games[15].teams.away.score
	) {
		homeTeamScoreDiv16.appendChild(heading32).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv16.appendChild(heading32);
	}
	//Away Team Score #17
	if (typeof data.dates[0].games[16].teams.away.score === "number") {
		var awayTeamScore17 = data.dates[0].games[16].teams.away.score;
	} else {
		var awayTeamScore17 = "";
	}
	const awayTeamScoreDiv17 = document.getElementById("awayTeamScore17");
	const heading33 = document.createElement("span");
	heading33.innerHTML = awayTeamScore17;
	if (
		data.dates[0].games[16].teams.away.score >
		data.dates[0].games[16].teams.home.score
	) {
		awayTeamScoreDiv17.appendChild(heading33).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv17.appendChild(heading33);
	}
	//Home Team Score #17
	if (typeof data.dates[0].games[16].teams.home.score === "number") {
		var homeTeamScore17 = data.dates[0].games[16].teams.home.score;
	} else {
		var homeTeamScore17 = "";
	}
	const homeTeamScoreDiv17 = document.getElementById("homeTeamScore17");
	const heading34 = document.createElement("span");
	heading34.innerHTML = homeTeamScore17;
	if (
		data.dates[0].games[16].teams.home.score >
		data.dates[0].games[16].teams.away.score
	) {
		homeTeamScoreDiv17.appendChild(heading34).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv17.appendChild(heading34);
	}
	//Away Team Score #18
	if (typeof data.dates[0].games[17].teams.away.score === "number") {
		var awayTeamScore18 = data.dates[0].games[17].teams.away.score;
	} else {
		var awayTeamScore18 = "";
	}
	const awayTeamScoreDiv18 = document.getElementById("awayTeamScore18");
	const heading35 = document.createElement("span");
	heading35.innerHTML = awayTeamScore18;
	if (
		data.dates[0].games[17].teams.away.score >
		data.dates[0].games[17].teams.home.score
	) {
		awayTeamScoreDiv18.appendChild(heading35).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv18.appendChild(heading35);
	}
	//Home Team Score #18
	if (typeof data.dates[0].games[17].teams.home.score === "number") {
		var homeTeamScore18 = data.dates[0].games[17].teams.home.score;
	} else {
		var homeTeamScore18 = "";
	}
	const homeTeamScoreDiv18 = document.getElementById("homeTeamScore18");
	const heading36 = document.createElement("span");
	heading36.innerHTML = homeTeamScore18;
	if (
		data.dates[0].games[17].teams.home.score >
		data.dates[0].games[17].teams.away.score
	) {
		homeTeamScoreDiv18.appendChild(heading36).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv18.appendChild(heading36);
	}
	//Away Team Score #19
	if (typeof data.dates[0].games[18].teams.away.score === "number") {
		var awayTeamScore19 = data.dates[0].games[18].teams.away.score;
	} else {
		var awayTeamScore19 = "";
	}
	const awayTeamScoreDiv19 = document.getElementById("awayTeamScore19");
	const heading37 = document.createElement("span");
	heading37.innerHTML = awayTeamScore19;
	if (
		data.dates[0].games[18].teams.away.score >
		data.dates[0].games[18].teams.home.score
	) {
		awayTeamScoreDiv19.appendChild(heading37).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv19.appendChild(heading37);
	}
	//Home Team Score #19
	if (typeof data.dates[0].games[18].teams.home.score === "number") {
		var homeTeamScore19 = data.dates[0].games[18].teams.home.score;
	} else {
		var homeTeamScore19 = "";
	}
	const homeTeamScoreDiv19 = document.getElementById("homeTeamScore19");
	const heading38 = document.createElement("span");
	heading38.innerHTML = homeTeamScore19;
	if (
		data.dates[0].games[18].teams.home.score >
		data.dates[0].games[18].teams.away.score
	) {
		homeTeamScoreDiv19.appendChild(heading38).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv19.appendChild(heading38);
	}
	//Away Team Score #20
	if (typeof data.dates[0].games[19].teams.away.score === "number") {
		var awayTeamScore20 = data.dates[0].games[19].teams.away.score;
	} else {
		var awayTeamScore20 = "";
	}
	const awayTeamScoreDiv20 = document.getElementById("awayTeamScore20");
	const heading39 = document.createElement("span");
	heading39.innerHTML = awayTeamScore20;
	if (
		data.dates[0].games[19].teams.away.score >
		data.dates[0].games[19].teams.home.score
	) {
		awayTeamScoreDiv20.appendChild(heading39).style.fontWeight = "bold";
	} else {
		awayTeamScoreDiv20.appendChild(heading39);
	}
	//Home Team Score #20
	if (typeof data.dates[0].games[19].teams.home.score === "number") {
		var homeTeamScore20 = data.dates[0].games[19].teams.home.score;
	} else {
		var homeTeamScore20 = "";
	}
	const homeTeamScoreDiv20 = document.getElementById("homeTeamScore20");
	const heading40 = document.createElement("span");
	heading40.innerHTML = homeTeamScore20;
	if (
		data.dates[0].games[19].teams.home.score >
		data.dates[0].games[19].teams.away.score
	) {
		homeTeamScoreDiv20.appendChild(heading40).style.fontWeight = "bold";
	} else {
		homeTeamScoreDiv20.appendChild(heading40);
	}
}
