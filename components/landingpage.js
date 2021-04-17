// main-clubNews
function mainClubNewsData() {
  var div = document.getElementById("clubNewsFlex");
  var mainClubNews = [
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t1.png",
      note: "Solskjaer: We'll welcome Jesse back",
      news:
        "https://www.manutd.com/en/news/detail/solskjaer-comments-on-jesse-lingard-west-ham-form-and-man-utd-future?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t1.png",
      note: "Solskjaer: We'll welcome Jesse back",
      news:
        "https://www.manutd.com/en/news/detail/solskjaer-comments-on-jesse-lingard-west-ham-form-and-man-utd-future?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t4.png",
      note:
        "Focused Fernández hammers home importance of building on Burnley victory",
      news:
        "https://www.nufc.co.uk/nufc-tv/latest-videos/focused-fernandez-hammers-home-importance-of-building-on-burnley-victory/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t1.png",
      note: "Ole's reveals team news for Granada",
      news:
        "https://www.manutd.com/en/news/detail/ole-confirms-team-news-for-man-united-v-granada-europa-league-second-leg?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t39.png",
      note: "Wolves TV to cover Wolves Women's Blackburn tie",
      news:
        "https://www.wolves.co.uk/news/wolves-women/20210414-wolves-tv-to-cover-wolves-womens-blackburn-tie/",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t43.png",
      note: "De Bruyne named Etihad Player of the Month",
      news:
        "https://www.mancity.com/citytv/mens/kevin-de-bruyne-etihad-player-of-the-month-63753988?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t21.png",
      note:
        "On This Day: West Ham United leave Eintracht Frankfurt stuck in the mud",
      news:
        "https://www.whufc.com/news/articles/2021/april/14-april/day-west-ham-united-leave-eintracht-frankfurt-stuck-mud?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t3.png",
      note: "Team news: Auba, Odegaard, Saka, Smith Rowe",
      news:
        "https://www.arsenal.com/news/team-news-auba-odegaard-saka-smith-rowe?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    },
  ];
  mainClubNews.forEach((el) => {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "clubNewsFlex");

    div1.innerHTML = `
        <div><img src="${el.img}" alt=""></div><div class="hover-border"></div><br><a href="${el.news}">Club News</a><br><a href="${el.news}"><p>${el.note} <i style="font-size: 11px; color: grey" class="fa"
              >&#xf08e;</i
            ></p></a>`;

    div.appendChild(div1);
  });
}
mainClubNewsData();

// Data function
function showDiv(data, div) {
  data.forEach((el) => {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "main-oneteam-flex");

    div1.innerHTML = `
    <div class="main-oneTeam-flex-a">
    <div>
      <img
        src=${el.image}
        alt=""
      />
    </div>
    <div class="main-oneTeam-flex-border"></div>
    <div>
      <p>${el.head}</p>
      <a href="${el.link}">${el.note}</a>
    </div>
  </div>
  <div class="main-oneTeam-flex-b">
    <div>
      <span
        ><img
          src=${el.logo1}
          alt="" /></span
      ><span><a href="${el.link1}">${el.note1}</a></span>
    </div>
    <div>
      <span
        ><img
          src=${el.logo2}
          alt="" /></span
      ><span><a href="${el.link2}">${el.note2}</a></span>
    </div>
  </div>
    `;
    div.appendChild(div1);
  });
}

//weAreOneTeam
function weAreOneTeam() {
  var div = document.getElementById("main-oneTeam-flex");
  var teamdata = [
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/07/368eb88d-0b76-46c0-bb57-da60f8a6fbcb/dermot-oleary-plps-challenge.png?width=500&height=333",
      head: "communities",
      note: "O'Leary: Do Wellbeing Stars Challenge to help others",
      logo1: "./img/copy_logo.png",
      logo2: "./img/copy_logo.png",
      link: "",
      note1: "Show your acts of kindness with Wellbeing Stars",
      note2: "PL Primary Stars celebrates free books landmark",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/02/557075b1-8eca-47be-9504-60113c6e83a4/WAOT-Man-Utd-Wes-Brown.png?width=500&height=333",
      head: "communities",
      note: "Man Utd Foundation continues support for local families",
      logo1:
        "https://resources.premierleague.com/premierleague/badges/25/t1.png",
      logo2: "./img/copy_logo.png",
      link: "",
      note1: "The Foundation and FareShare donate over 380,000 food items",
      note2: "Coronavirus: Latest on how clubs support community",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2021/03/31/a981bcc1-498c-49c4-9636-b41845768faa/WAOT-Southampton-Michael.png?width=500&height=333",
      head: "communities",
      note: "How Southampton made Michael feel part of a team",
      logo1:
        "https://resources.premierleague.com/premierleague/badges/25/t20.png",
      logo2: "./img/copy_logo.png",
      link: "",
      note1: "Saints Foundation: Michael’s Story",
      note2: "Coronavirus: Latest on how clubs support community",
      link1: "",
      link2: "",
    },
  ];
  showDiv(teamdata, div);
}
weAreOneTeam();

function latestNews() {
  var div = document.getElementById("main-latestNews-flex");

  var data = [
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/13/148976a0-70c2-4711-b9ed-3bab7056ea17/EVETOT.jpg?width=500&height=333",
      head: "Preview: Everton v Spurs",
      note: "Everton eye first Premier League double over Spurs",
      logo1: "./img/play_logo.png",
      logo2: "./img/play_logo.png",
      link: "",
      note1: "Flashback: Spurs hit six past Everton",
      note2: "Classic match: Arteta inspires Everton win at Spurs",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/13/512871b6-44bb-480d-a29e-71c14a6c15b9/ShearerTOTW-LeadTeamplate-MW31.png?width=500&height=333",
      head: "Feature",
      note: "Shearer: Pogba was unplayable against Spurs",
      logo1:
        "https://resources.premierleague.com/premierleague/badges/25/t1.png",
      logo2: "./img/play_logo.png",
      link: "",
      note1: "Cavani or Pogba? Our Man of the Match was...",
      note2: "Saint-Maximin made Newcastle a different team",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2020/09/16/27361830-f929-44c8-b034-527bb501d39a/Anthony-Taylor.jpg?width=500&height=333",
      head: "Referees",
      note: "Match officials for Matchweek 32",
      logo1: "./img/copy_logo.png",
      logo2: "./img/copy_logo.png",
      link: "",
      note1: "VAR - Frequently Asked Questions",
      note2: "How offsides are determined by VAR",
      link1: "",
      link2: "",
    },
  ];

  showDiv(data, div);
}
latestNews();

function FPLNews() {
  var div = document.getElementById("main-FPLnews-flex");

  var data = [
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/15/61412697-aa4a-49ce-8def-b3c5be5d6a2b/GettyImages-1231434479.jpg?width=500&height=333",
      head: "Fantasy Premier League",
      note: "Who to captain in GW32? What the experts say",
      logo1:
        "https://resources.premierleague.com/premierleague/badges/25/t6.png",
      logo2: "./img/copy_logo.png",
      link: "",
      note1: "Gallery - players train ahead of Everton trip",
      note2: "he Scout's panel of FPL experts",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/13/b51e2e16-928d-4af3-9cea-a2ab0e48230e/2021-03-13T192456Z_400556029_UP1EH3D1HXKLW_RTRMADP_3_SOCCER-ENGLAND-EVE-BUR-REPORT.JPG?width=500&height=333",
      head: "Fantasy Premier League",
      note: "FPL team news: Calvert-Lewin to miss Gameweek 32",
      logo1:
        "https://resources.premierleague.com/premierleague/badges/25/t11.png",
      logo2:
        "https://resources.premierleague.com/premierleague/badges/25/t39.png",
      link: "",
      note1: "Everton boss delivers team news update",
      note2: "Injury update on Neto, Marcal and Jonny",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/15/d75f6c01-fe27-46ea-a276-ee1dcfc0a9c7/c59qa3wb.jpg?width=500&height=333",
      head: "Fantasy Premier League",
      note: "Scout Selection: Iheanacho can extend scoring streak",
      logo1: "./img/copy_logo.png",
      logo2: "./img/play_logo.png",
      link: "",
      note1: "GW32 Differentials: Ricardo Pereira",
      note2: "FPL Gameweek 32 Kings to watch",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2019/08/08/d5a7ca63-bb14-4d08-b6e0-24d5a526eb8b/audioboomgraphics_editorial_964x643.png?width=500&height=333",
      head: "Fantasy Premier League",
      note: "Official FPL Podcast: Backing the Baggies and upcoming blanks",
      logo1: "./img/play_logo.png",
      logo2: "./img/play_logo.png",
      link: "",
      note1: "FPL Gameweek 32 Kings to watch",
      note2: "FPL Gameweek 32 Differentials",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/13/5a35d40b-a19d-45f2-bdae-cbc07040825d/BudKingsToWatch_FPL_Lead.png?width=500&height=333",
      head: "Fantasy Premier League",
      note: "GW32 Kings to watch: Alexandre Lacazette",
      logo1:
        "https://resources.premierleague.com/premierleague/badges/25/t3.png",
      logo2: "./img/play_logo.png",
      link: "",
      note1: "Arteta on... Aubameyang, Odegaard, Slavia",
      note2: "FPL Gameweek 32 Differentials",
      link1: "",
      link2: "",
    },
    {
      image:
        "https://resources.premierleague.com/photos/2021/04/14/772f8570-a95d-4753-b971-8b1b8901f909/GettyImages-1232114734.jpg?width=500&height=333",
      head: "Fantasy Premier League",
      note: "GW32 Differentials: Paul Pogba",
      logo1: "./img/copy_logo.png",
      logo2:
        "https://resources.premierleague.com/premierleague/badges/25/t1.png",
      link: "",
      note1: "Shearer: Pogba was unplayable against Spurs",
      note2: "Early team news for Granada second leg",
      link1: "",
      link2: "",
    },
  ];

  showDiv(data, div);
}
FPLNews();

// showing best players
function playerProfile(data, div) {
  data.forEach((el) => {
    var div1 = document.createElement("div");

    div1.innerHTML = `
      <h4>
        Featured Player<span style="float: right">
          <i style="font-size: 14px; color: grey" class="fa"
            >&#xf08e;</i
          ></span
        >
      </h4>
      <div>
        <img
          style="width: 100%; height: 100%; border-radius: 5px; margin: 1vh auto"
          src="${el.player_pic}"
          alt=""
        />
        </div>
      <p>
        <span style="float: left; font-size:14px"> Club </span>
        <span style="float: right; margin-left: 10px">
          <img
            style="width: 25px; height: 25px"
            src="${el.clublogo}"
            alt=""
        /></span>
        <span style="float: right"
          ><h5>
            <a class="featured-link" href="">${el.club}</a>
          </h5></span
        >
      </p>
      <br />
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Appearances </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.appearances}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Goals </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.goals}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Assists </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.assists}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Big Chances Created </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.bigChance}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 5px" />
      <a class="featured-player-profile" href="${el.profileLink}">Player Profile </a
      ><span style="color: #E90052">&rarr;</span>
      `;
    div.append(div1);
  });
}

function playerProfile1() {
  var div = document.getElementById("featured");

  var data = [
    {
      player_pic: "./img/featured_player1.png",
      clublogo:
        "https://resources.premierleague.com/premierleague/badges/20/t43.png",
      club: "Manchester City",
      appearances: 65,
      goals: 12,
      assists: 8,
      bigChance: 8,
      profileLink: "",
    },
  ];

  playerProfile(data, div);
}
playerProfile1();

function playerProfile2() {
  var div = document.getElementById("featured1");

  var data = [
    {
      player_pic: "./img/featured_player2.png",
      clublogo:
        "https://resources.premierleague.com/premierleague/badges/20/t8.png",
      club: "Chelsea ",
      appearances: 131,
      goals: 8,
      assists: 19,
      bigChance: 25,
      profileLink: "",
    },
  ];

  playerProfile(data, div);
}
playerProfile2();

function playerProfile3() {
  var div = document.getElementById("featured2");

  var data = [
    {
      player_pic: "./img/featured_player3.png",
      clublogo:
        "https://resources.premierleague.com/premierleague/badges/20/t21.png",
      club: "West Ham United ",
      appearances: 142,
      goals: 26,
      assists: 13,
      bigChance: 20,
      profileLink: "",
    },
  ];

  playerProfile(data, div);
}
playerProfile3();

// showing best manager
function managerProfile(data, div) {
  data.forEach((el) => {
    var div1 = document.createElement("div");

    div1.innerHTML = `
      <h4>
        Manager<span style="float: right">
          <i style="font-size: 14px; color: grey" class="fa"
            >&#xf08e;</i
          ></span
        >
      </h4>
      <div>
        <img
          style="width: 100%; height: 100%; border-radius: 5px; margin: 1vh auto"
          src="${el.manager_pic}"
          alt=""
        />
        </div>
      <p>
        <span style="float: left; font-size:14px"> Club </span>
        <span style="float: right; margin-left: 10px">
          <img
            style="width: 25px; height: 25px"
            src="${el.clublogo}"
            alt=""
        /></span>
        <span style="float: right"
          ><h5>
            <a class="featured-link" href="">${el.club}</a>
          </h5></span
        >
      </p>
      <br />
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Matches </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.matches}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Wins </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.wins}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Draws </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.draws}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 8px" />
      <p>
        <span style="float: left; font-size:14px"> Losses </span>
        <span
          ><h5 style="float: right; margin-right: 2.5%; margin-bottom: 1vh">
            ${el.losses}
          </h5></span
        >
      </p>
      <hr style="width: 100%; margin-bottom: 5px" />
      <a class="featured-player-profile" href="${el.profileLink}">Manager Profile </a
      ><span style="color: #E90052">&rarr;</span>
      `;
    div.append(div1);
  });
}
function managerProfile1() {
  var div = document.getElementById("featured3");

  var data = [
    {
      manager_pic: "./img/manager_pic.png",
      clublogo:
        "https://resources.premierleague.com/premierleague/badges/20/t21.png",
      club: "West Ham United ",
      matches: 530,
      wins: 178,
      draws: 143,
      losses: 209,
      profileLink: "",
    },
  ];

  managerProfile(data, div);
}
managerProfile1();

// Ranking
async function landingRank() {
  var res = await fetch("./Json data/landingPage_table.json");

  var data = await res.json();

  console.log(data.records);
  // console.log("working");
  var rank = data.records;

  var table = document.getElementById("landing-table-ranking");
  for (var i = 0; i < rank.length; i++) {
    var tr = document.createElement("tr");
    // tr.style.padding = "10px auto";
    console.log(rank[i]);

    var position = 1;
    if (position <= rank.length) {
      position = i + 1;
    }

    tr.innerHTML = `
          <td style="text-align: center;">${position} &#9642</td>
          <td><span><img style="width: 20px; height:20px; margin-right: 10px; float: left; margin-left: 10px" src="${rank[i].icon}" alt=""></span> <a href="">${rank[i].team}</a></td>
          <td style="text-align: center;">${rank[i].played}</td>
          <td style="text-align: center;">${rank[i].gd}</td>
          <td style="text-align: center;"><h4>${rank[i].points}</h4></td>
      `;

    table.append(tr);
  }
}
landingRank();

// music player
var audio = document.getElementById("audio");
var playpause = document.getElementById("play");

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    playpause.title = "Pause";
    audio.play();
  } else {
    playpause.title = "Play";
    audio.pause();
  }
}

// export default landingPage;
