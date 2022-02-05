
function f() {
	var a1 = document.createElement("div"); a1.setAttribute("id", "bullet");
  document.getElementById("demo").appendChild(a1);
  setTimeout(function(){document.getElementById("bullet").remove(); }, 500);

        gun.classList.add("gunanm");
        setTimeout(function(){
        gun.classList.remove("gunanm");
        },300);

var ball = document.getElementById("ball");
var bullet = document.getElementById("bullet");

  document.getElementById("shoot").disabled = true;
  document.getElementById("dialogue").innerHTML = "Loading...";
    setTimeout(function(){document.getElementById("shoot").disabled = false;
                          document.getElementById("dialogue").innerHTML = "Shoot!"; }, 1000);
    
    
  setInterval(function() {
        var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("margin-top"));
        var bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("margin-left"));


        if(bulletLeft>788 && bulletLeft<807 && ballTop>=-34 && ballTop<=-9){
              ball.style.background = "red";
              ball.style.boxShadow = "0 0 1px #f00,0 0 2px #f00,0 0 4px #fee,0 0 8px #f0e,0 0 16px #f00,0 0 2px #f00,0 0 4px #fee,0 0 8px #f0e,0 0 16px #f00";
              ball.style.animationPlayState = "paused";

                setTimeout(function(){ball.style.background = "radial-gradient(#9794e3,blue)"; 
                ball.style.boxShadow = "10px 5px 10px #444";
                ball.style.animationPlayState = "running";
                }, 1000);
                
    var score = document.getElementById("score2").value;
   document.getElementById("score2").value = (score -(- 25));
            }
            
        if((bulletLeft>788 && bulletLeft<807 && ballTop<=-34) || (bulletLeft>788 && bulletLeft<807 && ballTop>=-9)){
    var score = document.getElementById("score2").value;
   document.getElementById("score2").value = (score - 5);}


  }, 10);

};

     setTimeout(function(){alert("Time over!\nScore: " + document.getElementById("score2").value); location.href = location.href}, 60000);


