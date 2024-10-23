
if (window.innerHeight>window.innerWidth){
  styles = `
  background: url('https://raunak1089.github.io/Required-files/rotatedevice.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 50%;
  background-position: center;
  display: flex;
  justify-content: center;
  font-size: 3em;
`;

  document.body.setAttribute('style', styles);
  document.body.innerHTML='<div style="margin-top: 80vh;">PLEASE ROTATE YOUR DEVICE</div>';
}

function refresh() {
    if (!document.fullscreenElement) {
      console.log('Window resized, but not in fullscreen.');
      location.href=location.href;
    } else {
      console.log('Resize during fullscreen mode, skipping.');
    }
  }

window.addEventListener('resize', refresh);


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

if(localStorage.highestScore!=undefined){document.querySelector('#score4').innerText=localStorage.highestScore;}


function startGame() {

    let counted = false; let started = false;
    var ball = document.querySelector('#ball');
    var score2 = document.getElementById("score2");

    document.getElementById("gun").addEventListener('click', fire);
    window.addEventListener('keydown',fire_with_key)

    // START BALL DROPPING
    ball.classList.add("dropanim");

    function fire() {
      started = true;
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



          document.getElementById("gun").removeEventListener('click', fire);
          window.removeEventListener('keydown',fire_with_key)

          document.getElementById("dialogue").innerText = "Loading...";
        setTimeout(()=>{
          document.getElementById("gun").addEventListener('click', fire);
          window.addEventListener('keydown',fire_with_key)

          document.getElementById("dialogue").innerText = "Shoot!";
        }, 1000);

        // MAKE COUNTED VARIABLE FALSE TO ENABLE SCORE COUNTING
        setTimeout(()=>{
          counted = false;
        }, 500);


        // console.log(gun.getBoundingClientRect());


    };


            // if(ball.getBoundingClientRect().y>270){play_audio('Balldrop.mp3');}
            // if(ballTop=145){drop1.pause(); drop1.currentTime = 0;}


      setInterval(function() {
    if (started){
    ball.getAnimations()[0].playbackRate = 0.8+document.timeline.currentTime/100000;

        if (counted==false){

            ball_coords = ball.getBoundingClientRect();
            bullet_coords = bullet.getBoundingClientRect();
            ly = bullet_coords.y; bx = ball_coords.x;


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
    }
      }, 10);
        setInterval(()=>{document.querySelector('#timeleft').innerText-=1},1000)

}
     setTimeout(()=>{
      score_now = Number(document.getElementById("score2").innerText);
      highest = Number(document.getElementById("score4").innerText);
      alert("Time over!\nScore: " + score_now);
      if(isNaN(highest)){localStorage.setItem('highestScore',Math.max(score_now,highest));}
      else{localStorage.setItem('highestScore',score_now)}
      location.href = location.href;
    }, 60000);


