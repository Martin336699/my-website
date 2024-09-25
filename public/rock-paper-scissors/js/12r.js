const seeScore={ties:0,losses:0,wins:0};updateScoreElement();document.querySelector('.js-rock-button').addEventListener('click',()=>{playGame('rock')});document.querySelector('.js-paper-button').addEventListener('click',()=>{playGame('paper')});document.querySelector('.js-scissors-button').addEventListener('click',()=>{playGame('scissors')});document.body.addEventListener('keydown',(event)=>{if(event.key==='r'){playGame('rock')}else if(event.key==='p'){playGame('paper')}else if(event.key==='s'){playGame('scissors')}else if(event.key==='a'){autoPlay()}else if(event.keyCode===32){showResetConfirmation();}});function playGame(playerMove){const computerMove=pickComputerMove();let result='';if(playerMove==='rock'){if(computerMove==='rock'){result='Tie'}else if(computerMove==='paper'){result='You lose'}else if(computerMove==='scissors'){result='You win'}}else if(playerMove==='paper'){if(computerMove==='paper'){result='Tie'}else if(computerMove==='scissors'){result='You lose'}else if(computerMove==='rock'){result='You win'}}else if(playerMove==='scissors'){if(computerMove==='scissors'){result='Tie'}else if(computerMove==='rock'){result='You lose'}else if(computerMove==='paper'){result='You win'}}if(result==='Tie'){seeScore.ties+=1}else if(result==='You lose'){seeScore.losses+=1}else if(result==='You win'){seeScore.wins+=1}document.querySelector('.js-result').innerHTML=result;document.querySelector('.js-moves').innerHTML=`You 
    <img src="./img/${ playerMove }-emoji.png" class="imgs">
    <img src="./img/${ computerMove }-emoji.png" class="imgs">
    Compuer`;updateScoreElement();}function updateScoreElement(){document.querySelector('.js-score').innerHTML=`Wins: ${seeScore.wins }, Losses: ${seeScore.losses }, Ties: ${seeScore.ties }`}function pickComputerMove(){const randomNumber=Math.random();let computerMove='';if(randomNumber>=0&&randomNumber<1/3){computerMove='rock'}else if(randomNumber>=1/3&&randomNumber<2/3){computerMove='paper'}else if(randomNumber>=2/3&&randomNumber<1){computerMove='scissors'}return computerMove}function resetScore(){seeScore.ties=0;seeScore.losses=0;seeScore.wins=0;document.querySelector('.js-result').innerHTML=``;document.querySelector('.js-moves').innerHTML=``;updateScoreElement()};let isAutoPlaying=false;let intervalId;function autoPlay(){if(!isAutoPlaying){intervalId=setInterval(()=>{playerMove=pickComputerMove();playGame(playerMove)},1500);isAutoPlaying=true;document.querySelector('.js-autoplay-btn').innerHTML='Stop Playing';}else{clearInterval(intervalId);isAutoPlaying=false;document.querySelector('.js-autoplay-btn').innerHTML='Auto Play';}}document.querySelector('.js-autoplay-btn').addEventListener('click',()=>{autoPlay()});document.querySelector('.js-reset-btn').addEventListener('click',()=>{showResetConfirmation()});function showResetConfirmation(){document.querySelector('.js-reset-confirmation').innerHTML=`
      <br>
        Are you sure you want to reset the score?<br><br>
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;document.querySelector('.js-reset-confirm-yes').addEventListener('click',()=>{resetScore();hideResetConfirmation()});document.querySelector('.js-reset-confirm-no').addEventListener('click',()=>{hideResetConfirmation()})}function hideResetConfirmation(){document.querySelector('.js-reset-confirmation').innerHTML=''}