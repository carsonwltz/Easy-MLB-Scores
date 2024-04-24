// Place of Origin
fetch('https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  // What to do with data
  .then(data => displaySchedule(data))
  .catch((error) => console.error("FETCH ERROR:", error));

function displaySchedule(data) {

// Finds what directory
const schedule = data.dates[0]; 
const games = schedule.games[0];
const teams = games.teams[0];
const away = teams.away[0];
const awayTeam = away.team [0];
// Finds what item from directory
const awayTeamName = awayTeam.name;
// Finds ID on HTML file
  const awayTeamDiv = document.getElementById("dates");
// Creates header    
  const heading = document.createElement("h1");
// Places item in header in HTML file
  heading.innerHTML = awayTeamName;
// Places header in ID in HTML file
  awayTeamDiv.appendChild(heading);
}


