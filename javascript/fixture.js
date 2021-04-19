var stadium = [
  "Wembley Stadium, London",
  "Emirates Stadium, London",
  "Old Trafford, Manchester",
  "Elland Road, Leets",
  "Villa PerformanceMark, Birmingham",
  "St. Mary's Stadium, Southampton",
  "Stamford Bridge, London",
  "Tottenham Hotspur Stadium, London",
  "King Power Stadium, Leicester",
  "Anfield, Liverpool",
];

var div = document.getElementById("show");

async function first() {
  console.log("first");

  document.getElementById("first").style.visibility = "visible";
  document.getElementById("pl2").style.visibility = "hidden";
  document.getElementById("u18").style.visibility = "hidden";
  // div.innerHTML = ""
  var div1 = document.getElementById("team1");
  var div2 = document.getElementById("team2");
  var div3 = document.getElementById("stdm");
  var div4 = document.getElementById("img-show");
  // div.innerHTML = ""

  var res = await fetch("./Json data/info.json");
  var data = await res.json();
  let arr = data.matches.slice(110, 120);
  console.log(arr);
  // div.innerHTML = ""
  // console.log(arr);
  var temp = 0;

  // var h1 = document.createElement('h1');
  // h1.textContent = "Saturday 17 April 2021";
  // div.appendChild(h1);
  // div.innerHTML = ""
  div.textContent = "";
  for (var i = 0; i < arr.length; i++) {
    // var img1 = document.createElement('img');
    // img1.setAttribute('src', "./img/disney.png");
    // img1.style.width = "60px"
    var para = document.createElement("p");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    var hr = document.createElement("hr");
    var hr1 = document.createElement("hr");
    var hr2 = document.createElement("hr");
    var hr3 = document.createElement("hr");

    if (stadium.length > temp) {
      para.textContent = `${arr[i].team1}`;
      para1.textContent = `${arr[i].team2}`;
      para2.textContent = `${stadium[temp]}`;
      para3.textContent = `${arr[i].date}`;
      div1.appendChild(para);
      div2.appendChild(para1);
      div3.appendChild(para2);
      div4.appendChild(para3);
      console.log("first" + arr[i].team1);
      div1.appendChild(hr);
      div2.appendChild(hr1);
      div3.appendChild(hr2);
      div4.appendChild(hr3);
      //  div4.style.visibility = "visible";
      // div4.appendChild(img1);

      temp++;
    } else {
      //   h1.textContent = "Saturday 24 April 2021"
      temp = 0;
      // div.appendChild(h1)
    }

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
  }

  document.getElementById("firstbtn").style.backgroundColor = "white";
  document.getElementById("pl12btn").style.backgroundColor = "#EBEBE6";
  document.getElementById("u18btn").style.backgroundColor = "#EBEBE6";
}

// --------------------PL12 Function-------------------------------
async function pl12() {
  console.log("pl12");
  // var div = document.getElementById('show');
  // div.innerHTML = ""

  document.getElementById("first").style.visibility = "hidden";
  document.getElementById("pl2").style.visibility = "visible";
  document.getElementById("u18").style.visibility = "hidden";
  // div.innerHTML = ""
  var div1 = document.getElementById("team1");
  var div2 = document.getElementById("team2");
  var div3 = document.getElementById("stdm");
  var div4 = document.getElementById("img-show");

  // div.innerHTML = ""

  var res = await fetch("./Json data/info.json");
  var data = await res.json();
  let arr = data.matches.slice(5, 10);
  console.log(arr);
  // div.innerHTML = "";
  // console.log(arr);
  var temp = 0;

  // var h1 = document.createElement('h1');
  // h1.textContent = "Saturday 17 April 2021";
  // div.appendChild(h1);
  // div.innerHTML = ""
  div.textContent = "";
  for (var i = 0; i < arr.length; i++) {
    // var img1 = document.createElement('img');
    // img1.setAttribute('src', "./img/disney.png");
    // img1.style.width = "60px"
    var para = document.createElement("p");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    var hr = document.createElement("hr");
    var hr1 = document.createElement("hr");
    var hr2 = document.createElement("hr");
    var hr3 = document.createElement("hr");

    if (stadium.length > temp) {
      console.log("p12" + arr[i].team1);
      para.textContent = `${arr[i].team1}`;
      para1.textContent = `${arr[i].team2}`;
      para2.textContent = `${stadium[temp]}`;
      para3.textContent = `${arr[i].date}`;
      div1.appendChild(para);
      div2.appendChild(para1);
      div3.appendChild(para2);
      div4.appendChild(para3);
      div1.appendChild(hr);
      div2.appendChild(hr1);
      div3.appendChild(hr2);
      div4.appendChild(hr3);
      //  div4.style.visibility = "visible";
      // div4.appendChild(img1);

      temp++;
    } else {
      //   h1.textContent = "Saturday 24 April 2021"
      temp = 0;
      // div.appendChild(h1)
    }

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
  }

  document.getElementById("firstbtn").style.backgroundColor = "#EBEBE6";
  document.getElementById("pl12btn").style.backgroundColor = "white";
  document.getElementById("u18btn").style.backgroundColor = "#EBEBE6";
}

// --------------------U18 Function-------------------------------

async function u18() {
  // div.innerHTML = ""
  // var div = document.getElementById('show');
  // div.innerHTML = ""
  document.getElementById("first").style.visibility = "hidden";
  document.getElementById("pl2").style.visibility = "hidden";
  document.getElementById("u18").style.visibility = "visible";

  var div1 = document.getElementById("team1");
  var div2 = document.getElementById("team2");
  var div3 = document.getElementById("stdm");
  var div4 = document.getElementById("img-show");

  var res = await fetch("./Json data/info.json");
  var data = await res.json();
  let arr = data.matches.slice(200, 210);
  console.log(arr);

  // console.log(arr);
  var temp = 0;

  // var h1 = document.createElement('h1');
  // h1.textContent = "Saturday 17 April 2021";
  // div.appendChild(h1);
  div.textContent = "";
  for (var i = 0; i < arr.length; i++) {
    // var img1 = document.createElement('img');
    // img1.setAttribute('src', "./img/disney.png");
    // img1.style.width = "60px"
    var para = document.createElement("p");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    var hr = document.createElement("hr");
    var hr1 = document.createElement("hr");
    var hr2 = document.createElement("hr");
    var hr3 = document.createElement("hr");

    if (stadium.length > temp) {
      console.log("u18" + arr[i].team1);
      para.textContent = `${arr[i].team1}`;
      para1.textContent = `${arr[i].team2}`;
      para2.textContent = `${stadium[temp]}`;
      para3.textContent = `${arr[i].date}`;
      div1.appendChild(para);
      div2.appendChild(para1);
      div3.appendChild(para2);
      div4.appendChild(para3);
      div1.appendChild(hr);
      div2.appendChild(hr1);
      div3.appendChild(hr2);
      div4.appendChild(hr3);
      //  div4.style.visibility = "visible";
      // div4.appendChild(img1);

      temp++;
    } else {
      //   h1.textContent = "Saturday 24 April 2021"
      temp = 0;
      // div.appendChild(h1)
    }

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
  }

  document.getElementById("firstbtn").style.backgroundColor = "#EBEBE6";
  document.getElementById("pl12btn").style.backgroundColor = "#EBEBE6";
  document.getElementById("u18btn").style.backgroundColor = "white";
}
