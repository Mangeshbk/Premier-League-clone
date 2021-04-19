function headerSec() {
  var nav = document.createElement("div");

  nav.setAttribute("id", "header");

  nav.innerHTML = `
    <div id="headerCont">
      <div>
        <img src="./img/mainicons.png" alt="" width="100px" id="icons" />
      </div>
      <div>
      
       <div id="head1">

 
        
<div class="dropdown">


          <button style="margin-left: 60px" >
            <strong>Premier League &nbsp;&nbsp;&nbsp;&nbsp;
      <i class="fa fa-caret-down"></i></strong>
          </button>

            <div class="dropdown-content">
  <a href="#">Home</a>
  <a href="#">Players</a>
  <a href="#">Fixtures</a>
  <a href="#">Managers</a>
  <a href="#">Results</a>
  <a href="#">News</a>
  <a href="tables.html">Tables</a>
  <a href="#">Socials</a>
  <a href="#">Transfers</a>
  <a href="#">Youth</a>
  <a href="#">Broadcasts</a>
  <a href="#">SafeGuarding</a>
  <a href="#">Tickets</a> 
  <a href="#">History</a>
  <a href="#">Clubs</a>
  <a href="#">Referees</a>
  </div> 
 
  
</div>


        
<div class="dropdown">


          <button ><strong>Fantasy &nbsp;&nbsp;&nbsp;&nbsp;
      <i class="fa fa-caret-down"></i></strong></button>
            <div class="dropdown-content">
  <a href="#">Fantasy</a>
  <a href="#">Fantasy Draft</a>
  
  </div>
</div>

        



          <button id="headbtn"><strong>Video</strong></button>

<div class="dropdown">

          <button ><strong>Communities &nbsp;&nbsp;&nbsp;&nbsp;
      <i class="fa fa-caret-down"></i></strong></button>


                  <div class="dropdown-content">
  <a href="#">Latest</a>
  <a href="#">Strategy</a>
  <a href="#">programmes</a>
  <a href="#">Facilities</a>
  <a href="#">PL Charitable Funds</a>
  <a href="#">Supporting the Game</a>
  
  </div>
</div>

        
<div class="dropdown">




          <button ><strong>More &nbsp;&nbsp;&nbsp;&nbsp;
      <i class="fa fa-caret-down"></i></strong></button>


                  <div class="dropdown-content">
  <a href="#">Stats</a>
  <a href="#">ePremier League</a><a href="#">Stay Well</a>
  <a href="#">About</a>
    <a href="#">We are one Team</a>

  <a href="#">Season Review</a>
  <a href="#">Rainbow Laces</a>
  
  <a href="#">Nike Ball HUb</a>
  <a href="#">King of the Match</a>

  <a href="#">Contact Us</a>
  <a href="#">Transfers</a>
  
  <a href="#">Poppy</a>
    <a href="#">VAR</a>
  <a href="#">Asia Trophy</a>
  <a href="#">Photos</a>
  <a href="#">PL Live</a>
  <a href="#">Partners</a>  <a href="#">Publications</a>
  
  <a href="#">USA Bar Finder</a>
  <a href="#">Legal</a>
  </div>
</div>




          <button style="margin-left: 350px" id="headbtn">
            <strong>No Room for Racism</strong>
          </button>
          <button id="headbtn" style="margin-left:20px"><strong>Sign in</strong></button
          ><button
            type="submit"
            style="
              font-size: 22px;
              float: right;
              margin-left: -100px;
              margin-right: 60px;
            "
          >
          </button>
            <i class="fa fa-search" id="headbtn" style="font-size:25px; padding-top:12px;"> </i>
        </div>

        <!--  -->
        <div id="head2">
          <button style="margin-left: 60px">Home</button>
          <button>Fixtures</button>
          <button>Results</button>
          <button><a href="tables.html" style="text-decoration:none;color:#76766f">Tables</a></button>
          <button>Transfers</button>
          <button>Broadcast</button>
          <button>Tickets</button>
          <button>Clubs</button>
          <button>Players</button>
          <button>Managers</button>
          <button>News</button>
          <button>Social</button>
          <button>Youth</button>
          <button>Safeguarding</button>
          <button style="margin-left: 200px; text-decoration:none" id="btn13">More</button>
        </div>
      </div>
    </div>
    `;
  return nav;
}

document.getElementById("header1").appendChild(headerSec());
export default headerSec;
