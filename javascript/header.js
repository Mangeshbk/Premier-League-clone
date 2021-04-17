function headerIcon() {
  var nav = document.createElement("div");

  nav.setAttribute("id", "navbar");

  nav.innerHTML = `    <nav>
      <div id="navbar">
        <label for="">CLUB SITES <i style="font-size: 11px; color: grey" class="fa"
                  >&#xf08e;</i
                ></label>

        <div id="img1">
          <a
            href="https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon1.png" alt=""
          /></a>
          <a
            href="https://www.avfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon2.png" alt=""
          /></a>
          <a
            href="https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon3.png" alt=""
          /></a>
          <a
            href="https://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon4.png" alt=""
          /></a>
          <a href="https://www.chelseafc.com/en"
            ><img src="./img/img_icon5.png" alt=""
          /></a>
          <a
            href="https://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon6.png" alt=""
          /></a>
          <a
            href="https://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon7.png" alt=""
          /></a>
          <a
            href="https://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon8.png" alt=""
          /></a>
          <a
            href="https://www.leedsunited.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon9.png" alt=""
          /></a>
          <a
            href="https://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon10.png" alt=""
          /></a>
          <a
            href="https://www.liverpoolfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon11.png" alt=""
          /></a>
          <a
            href="https://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon12.png" alt=""
          /></a>
          <a
            href="https://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon13.png" alt=""
          /></a>
          <a
            href="https://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon14.png" alt=""
          /></a>
          <a
            href="https://www.sufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon15.png" alt=""
          /></a>
          <a
            href="https://www.southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon16.png" alt=""
          /></a>
          <a
            href="https://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon17.png" alt=""
          /></a>
          <a
            href="https://www.wba.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon18.png" alt=""
          /></a>
          <a
            href="https://www.whufc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon19.png" alt=""
          /></a>
          <a
            href="https://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
            ><img src="./img/img_icon20.png" alt=""
          /></a>
        </div>
      </div>
    </nav>
`;

  return nav;
}

document.getElementById("header").appendChild(headerIcon());
export default headerIcon;
