
function play_audio(link){
  var put = document.createElement('audio');
  put.src = 'https://raunak1089.github.io/Required-files/' + link; 
  document.body.appendChild(put);
  put.play();
  setTimeout(()=>{
    setTimeout(()=>{put.remove();}, put.duration*1000);
  }, 500);
}

function fire_with_key(event){
    if (event.key.toLowerCase() === 'd'){
        fire();
    }
}

document.querySelector('#score4').innerText=localStorage.highestScore;

let counted = false;
let bullet = document.createElement("div");
var ball = document.querySelector('#ball');
var score2 = document.getElementById("score2");
document.getElementById("demo").addEventListener('click', fire);
window.addEventListener('keydown',fire_with_key)

function fire() {
  play_audio('GunShot.mp3'); 

  // CREATE BULLET
	bullet = document.createElement("div"); bullet.id='bullet';
  bullet.style.marginTop = gun.getBoundingClientRect().y+'px';
  document.getElementById("demo").appendChild(bullet);
  setTimeout(()=>{bullet.remove(); }, 500);


        gun.classList.add("gunanm");
        setTimeout(()=>{
        gun.classList.remove("gunanm");
        },300);



      document.getElementById("demo").removeEventListener('click', fire);
      window.removeEventListener('keydown',fire_with_key)

      document.getElementById("dialogue").innerText = "Loading...";
    setTimeout(()=>{
      document.getElementById("demo").addEventListener('click', fire);
      window.addEventListener('keydown',fire_with_key)

      document.getElementById("dialogue").innerText = "Shoot!";
    }, 1000);

    // MAKE COUNTED VARIABLE FALSE TO ENABLE SCORE COUNTING
    setTimeout(()=>{
      counted = false;
    }, 500);

};

  setInterval(function() {
ball.getAnimations()[0].playbackRate = 0.8+document.timeline.currentTime/100000;

    if (counted==false){

        ball_coords = ball.getBoundingClientRect();
        bullet_coords = bullet.getBoundingClientRect();
        ly = bullet_coords.y; bx = ball_coords.x;


        if(ball_coords.y>270){play_audio('Balldrop.mp3');}
        // if(ballTop=145){drop1.pause(); drop1.currentTime = 0;}

        if(bullet_coords.x<=(bx+ball_coords.width) && bullet_coords.x>=(bx-bullet_coords.width) && ball_coords.y<=(ly+bullet_coords.height) && ball_coords.y>=(ly-ball_coords.height)){hit();}
          
        if((bullet_coords.x<=(bx+ball_coords.width) && bullet_coords.x>=(bx-bullet_coords.width) && ball_coords.y<=(ly-ball_coords.height)) || (bullet_coords.x<=(bx+ball_coords.width) && bullet_coords.x>=(bx-bullet_coords.width) && ball_coords.y>=(ly+bullet_coords.height))){miss();};

        function hit() {
            play_audio('CymbalCrash.mp3');
            ball.classList.add("hit");
            setTimeout(()=>{
              ball.classList.remove("hit")
            }, 1000);
            score2.innerText -= -25;
            counted = true;
        }

        function miss(){
            score2.innerText -= 5;
            counted = true;
        }

    }
  }, 10);


     setTimeout(()=>{
      score_now = Number(document.getElementById("score2").innerText);
      highest = Number(document.getElementById("score4").innerText);
      alert("Time over!\nScore: " + score_now);
      if(highest!=NaN){localStorage.setItem('highestScore',Math.max(score_now,highest));}
      else{localStorage.setItem('highestScore',score_now)}
      location.href = location.href;
    }, 60000);


