
var stadium = ["Wembley Stadium, London",
"Emirates Stadium, London",
"Old Trafford, Manchester",
"Elland Road, Leets",
"Villa PerformanceMark, Birmingham",
"St. Mary's Stadium, Southampton",
"Stamford Bridge, London",
"Tottenham Hotspur Stadium, London",
"King Power Stadium, Leicester",
"Anfield, Liverpool"];

var div = document.getElementById('show');
 async function teams() {
    var res = await fetch("./Json-data/info.json");
    var data = await res.json();
    var arr = data.matches.slice(310, 330);
    
    

}


teams();    



async function first(){
    document.getElementById('first').style.visibility = "visible"
    document.getElementById('pl2').style.visibility = "hidden"
    document.getElementById('u18').style.visibility = "hidden"

    var div1 = document.getElementById('team1');
    var div2 = document.getElementById('team2');
    var div3 = document.getElementById('stdm');
    var div4 = document.getElementById('img-show');

    
    

    var res = await fetch("./Json-data/info.json");
    var data = await res.json();
    var arr = data.matches.slice(310, 330);
    div.textContent = ""
    console.log(arr);
    var temp = 0;
    
    var h1 = document.createElement('h1');
    // h1.textContent = "Saturday 17 April 2021";
    div.appendChild(h1);
    for(var i = 0; i < arr.length; i++)
    {
        var img1 = document.createElement('img');
        img1.setAttribute('src', "./img/disney.png");
        img1.style.width = "60px"
        var para = document.createElement('p')
        var para1 = document.createElement('p')
        var para2 = document.createElement('p')
        
        if(stadium.length > temp){
              
             para.textContent = `${arr[i].team1}`
             para1.textContent = `${arr[i].team2}`
             para2.textContent = `${stadium[temp]}`
             div1.appendChild(para)
             div2.appendChild(para1)
             div3.appendChild(para2)
            //  div4.style.visibility = "visible";
            // div4.appendChild(img1);
             
        temp++;
        }
      
      else{
        //   h1.textContent = "Saturday 24 April 2021"
        temp = 0;
        // div.appendChild(h1)
      }
      
      div.appendChild(div1)
      div.appendChild(div2)
      div.appendChild(div3)
      div.appendChild(div4)
    }

    document.getElementById('firstbtn').style.backgroundColor = "white";
    document.getElementById('pl12btn').style.backgroundColor = "#EBEBE6";
    document.getElementById('u18btn').style.backgroundColor = "#EBEBE6";
}


async function pl12(){
    document.getElementById('first').style.visibility = "hidden"
    document.getElementById('pl2').style.visibility = "visible"
    document.getElementById('u18').style.visibility = "hidden"

    var div1 = document.getElementById('team1');
    var div2 = document.getElementById('team2');
    var div3 = document.getElementById('stdm');
    var div4 = document.getElementById('img-show');

    
    

    var res = await fetch("./Json-data/info.json");
    var data = await res.json();
    var arr = data.matches.slice(220, 250);
    div.textContent = ""
    console.log(arr);
    var temp = 0;
    
    var h1 = document.createElement('h1');
    // h1.textContent = "Saturday 17 April 2021";
    div.appendChild(h1);
    for(var i = 0; i < arr.length; i++)
    {
        var img1 = document.createElement('img');
        img1.setAttribute('src', "./img/disney.png");
        img1.style.width = "60px"
        var para = document.createElement('p')
        var para1 = document.createElement('p')
        var para2 = document.createElement('p')
        
        if(stadium.length > temp){
              
             para.textContent = `${arr[i].team1}`
             para1.textContent = `${arr[i].team2}`
             para2.textContent = `${stadium[temp]}`
             div1.appendChild(para)
             div2.appendChild(para1)
             div3.appendChild(para2)
            //  div4.style.visibility = "visible";
            // div4.appendChild(img1);
             
        temp++;
        }
      
      else{
        //   h1.textContent = "Saturday 24 April 2021"
        temp = 0;
        // div.appendChild(h1)
      }
      
      div.appendChild(div1)
      div.appendChild(div2)
      div.appendChild(div3)
      div.appendChild(div4)
    }

    document.getElementById('firstbtn').style.backgroundColor = "#EBEBE6";
    document.getElementById('pl12btn').style.backgroundColor = "white";
    document.getElementById('u18btn').style.backgroundColor = "#EBEBE6";
} 
async function u18(){
    document.getElementById('first').style.visibility = "hidden"
    document.getElementById('pl2').style.visibility = "hidden"
    document.getElementById('u18').style.visibility = "visible"

    var div1 = document.getElementById('team1');
    var div2 = document.getElementById('team2');
    var div3 = document.getElementById('stdm');
    var div4 = document.getElementById('img-show');

    
    

    var res = await fetch("./Json-data/info.json");
    var data = await res.json();
    var arr = data.matches.slice(280, 320);
    div.textContent = ""
    console.log(arr);
    var temp = 0;
    
    var h1 = document.createElement('h1');
    // h1.textContent = "Saturday 17 April 2021";
    div.appendChild(h1);
    for(var i = 0; i < arr.length; i++)
    {
        // var img1 = document.createElement('img');
        // img1.setAttribute('src', "./img/disney.png");
        // img1.style.width = "60px"
        var para = document.createElement('p')
        var para1 = document.createElement('p')
        var para2 = document.createElement('p')
        
        if(stadium.length > temp){
              
             para.textContent = `${arr[i].team1}`
             para1.textContent = `${arr[i].team2}`
             para2.textContent = `${stadium[temp]}`
             div1.appendChild(para)
             div2.appendChild(para1)
             div3.appendChild(para2)
            //  div4.style.visibility = "visible";
            // div4.appendChild(img1);
             
        temp++;
        }
      
      else{
        //   h1.textContent = "Saturday 24 April 2021"
        temp = 0;
        // div.appendChild(h1)
      }
      
      div.appendChild(div1)
      div.appendChild(div2)
      div.appendChild(div3)
      div.appendChild(div4)
    }

    document.getElementById('firstbtn').style.backgroundColor = "#EBEBE6";
    document.getElementById('pl12btn').style.backgroundColor = "#EBEBE6";
    document.getElementById('u18btn').style.backgroundColor = "white";
}

