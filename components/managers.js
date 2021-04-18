function managersData() {
  var data = document.createElement("div");

  data.setAttribute("id", "managerCont");

  data.innerHTML = `
<div id="managers">
    <h1>Managers</h1><input type="text" placeholder="Search.." name="search" id="inp">
  <button type="submit" id="search"><i class="fa fa-search"></i></button>
    <button id="sharebtn"><i class="fa fa-share-square-o"></i> &nbsp;Share</button>
    </div>
  
 <div id="sorting">
   <div class="sort1">          <label for=""><i>Filter by Season</i></label>
      <select id="sort2" onchange="changeTwo()">
      <option name="Season" value="Season">All Season</option>
      <option name="2020/21" value="2020/21">2020/21</option>
      <option name="2019/20" value="2019/20">2019/20</option>
           <option name="2018/19" value="2018/19">2018/19</option>
      <option name="2017/18" value="2017/18">2017/18</option>     <option name="2016/17" value="2016/17">2016/17</option>
      <option name="2015/16" value="2015/16">2015/16</option>     <option name="2014/15" value="2014/15">2014/15</option>
      <option name="2013/14" value="2013/14">2013/14</option>     <option name="2012/13" value="2012/13">2012/13</option>
      <option name="2011/12" value="2011/12">2011/12</option>     <option name="2010/11" value="2010/11">2010/11</option>
      <option name="2009/10" value="2009/10">2009/10</option>     <option name="2008/09" value="2008/09">2008/09</option>
      <option name="2007/08" value="2007/08">2007/08</option>     <option name="2006/07" value="2006/07">2006/07</option>
      <option name="2005/06" value="2005/06">2005/06</option>     <option name="2004/05" value="2004/05">2004/05</option>
      <option name="2003/04" value="2003/04">2003/04</option>     <option name="2002/03" value="2002/03">2002/03</option>
      <option name="2001/02" value="2001/02">2001/02</option>     <option name="2000/01" value="2000/01">2000/01</option>
      <option name="1999/00" value="1999/00">1999/00</option>     <option name="1998/99" value="1998/99">1998/99</option>
      <option name="1997/98" value="1997/98">1997/98</option>     <option name="1996/97" value="1996/97">1996/97</option>
      <option name="1995/96" value="1995/96">1995/96</option>     <option name="1994/95" value="1994/95">1994/95</option>
      <option name="1993/94" value="1993/94">1993/94</option>     <option name="1992/93" value="1992/93">1992/93</option>      
</select></div>
   <div class="sort1">
          <label for=""><i>Filter by Clubs</i></label>
      <select id="sort3">
      <option name="AllMatchweeks" value="AllMatchweeks">All Clubs</option>
      <option name="Arsenal" value="Arsenal">Arsenal</option>
      <option name="Aston Villa" value="Aston Villa">Aston Villa</option>
           <option name="Brighton" value="Brighton">Brighton and Hove Albion</option>
      <option name="Burnley" value="Burnley">Burnley</option>     <option name="Chelsea" value="Chelsea">Chelsea</option>
      <option name="Crystal" value="Crystal">Crystal Palace</option>     <option name="Everton" value="Everton">Everton</option>
      <option name="Fulham" value="Fulham">Fulham</option>     <option name="Leads United" value="Leads United">Leads United</option>
      <option name="Liecester City" value="Liecester City">Liecester City</option>     <option name="Liverpool" value="Liverpool">Liverpool</option>
      <option name="Manchester City" value="Manchester City">Manchester City</option>     <option name="Manchester United" value="Manchester United">Manchester United</option>
      <option name="Sheffield United" value="Sheffield United">Sheffield United</option>     <option name="Southampton" value="Southampton">Southampton</option>
      <option name="Tottenham Hotspur" value="Tottenham Hotspur">Tottenham Hotspur</option>     <option name="West Bromwich Albion" value="West Bromwich Albion">West Bromwich Albion</option>
      <option name="West Ham United" value="West Ham United">West Ham United</option>     <option name="Wolverhampton Wanderers" value="Wolverhampton Wanderers">Wolverhampton Wanderers</option>
      
      
</select>
   </div>
   <div style="float: right;color: grey;padding-top:15px" id="resetbtn">
<i class="material-icons" style="float:left;margin-right:5px">&#xe5d5;</i>  Reset Filters</div>
 </div>

 

<div id="scores">
  <label for="" style="margin-left: 30px;">Manager</label>
  <label for="" style="margin-left: 300px;">Club</label>
  <label for="" style="margin-left: 450px;">Nationality</label>
</div>


`;

  async function teams() {
    var res = await fetch("./Json data/manager.json");
    var data = await res.json();

    // console.log(data);

    let { managers } = data;
    // console.log(managers);

    var displayData = document.getElementById("bodyContent");

    var input = document.getElementById("inp").value;

    document.getElementById("search").addEventListener("click", (e) => {
      // var input = document.getElementById("inp").value;
      // console.log(input);
    });

    console.log(input);
    for (var i = 0; i < managers.length; i++) {
      // console.log(managers[i]);

      var div = document.createElement("div");
      div.setAttribute("id", "managerDetails");
      div.innerHTML = `<label id="mlbl1">${managers[i].name}</label><label id="mlbl2"><img src="${managers[i].image}"/>${managers[i].country}</label><label id="mlbl3"><img src="${managers[i].flag}"/>${managers[i].nation}</label>`;
      displayData.appendChild(div);
    }
  }
  teams();
  return data;
}

document.getElementById("bodyContent").appendChild(managersData());
export default managersData;
