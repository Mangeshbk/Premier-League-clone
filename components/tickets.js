function mainClubData() {
  var div = document.getElementById("club-data");
  var mainClubNews = [
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/6d5079d4-d2bb-4cc7-b878-d0bd8f2b77fe/Arsenal-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Arsenal tickets at Emirates Stadium",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/78271155-3b19-4a1e-9a21-9fcd4f8105fc/Aston_Villa-Thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Aston Villa tickets at Villa Park",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/c7c8e089-3675-4b1c-9be9-e4a3508f6bd3/Brighton-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Brighton tickets at the Amex Stadium",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/82c2c854-b308-4e61-8322-9500f49b1d30/Burnley-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Brighton tickets at the Amex Stadium",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/5e690f4a-2f7f-402b-9979-a5d19df70fe6/Chelsea-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Chelsea tickets at Stamford Bridge",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/caeb9ddd-0236-47c2-b636-a08988035c15/CrystalPalace-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Chelsea tickets at Stamford Bridge",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/80890918-6e01-4a37-8c32-f87ea4a58a9b/Everton-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Everton tickets at Goodison Park",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2020/08/05/23de748f-bf39-4abc-9579-97f72057c9a5/Fulham-1000x667.png?width=500&height=333",
      note: "Guide to buying Fulham tickets at Craven Cottage",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2020/08/04/9ba18d31-5c07-4e8b-bc99-2e474b2294f8/LeedsUnited-1000x667.png?width=500&height=333",
      note: "Guide to buying Leeds tickets at Elland Road",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/f698a8b0-d788-4816-919c-5a8bfee5914a/LeicesterCity-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Leicester tickets at King Power Stadium",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/9ed81272-835d-4ce8-9ed0-a2e96b9609b5/Liverpool-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Leicester tickets at King Power Stadium",
    },

    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/f062da8f-497a-4e81-b8e2-cc42a5ec40a2/ManchesterCity-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Man City tickets at Etihad Stadium",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/ff74db9f-f636-494a-b61a-86989e6c5db7/ManchesterUnited-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Man Utd tickets at Old Trafford",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/cd583621-77a7-4d90-87bd-ed48c0ff31a9/NewcastleUnited-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Newcastle tickets at St. James' Park",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/2530e1b2-1e59-4b9b-881a-d9a13bf3bfd3/SheffieldUnited-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Sheffield Utd tickets at Bramall Lane",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/af70d44f-bb44-4aa5-8679-55b2feeeebe6/Southampton-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Southampton tickets at St Mary's Stadium",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/38d84b54-120e-4038-b0f5-4b7754e2cfa5/TottenhamHotspur-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying Spurs tickets at Tottenham Hotspur Stadium",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2020/08/04/cae56a0a-6c84-48c0-bed3-42476f8d35c3/WestBrom-1000x667.png?width=500&height=333",
      note: "Guide to buying West Brom tickets at The Hawthorns",
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/577acbbc-8b8f-4e37-a381-58660222f659/WestHamUnited-thumbnail_new.png?width=500&height=333",
      note: "Guide to buying West Ham tickets at London Stadium",
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t39.png",
      note: "Guide to buying Liverpool tickets at Anfield",
    },
  ];
  mainClubNews.forEach((el) => {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "club-data");

    div1.innerHTML = `
          <div><img src="${el.img}" alt=""></div><div class="hover-border"></div><br><a href="${el.news}"><p>${el.note}</p></a>`;

    div.appendChild(div1);
  });
}
mainClubData();
