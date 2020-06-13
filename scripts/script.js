
// Acoustic Drum Kit Selectors
const acousticSnare = document.querySelector('#acoustic-snare');
const acousticKick = document.querySelector('#acoustic-kick');
const acousticHho = document.querySelector('#acoustic-hho');
const acousticHhcl = document.querySelector('#acoustic-hhcl');
const acousticTom1 = document.querySelector('#acoustic-tom1');
const acousticTom2 = document.querySelector('#acoustic-tom2');
const acousticRide = document.querySelector('#acoustic-tom3');
const acousticCrash = document.querySelector('#acoustic-tom4');

// Electro Drum Kit Selectors

const electroClap = document.querySelector('#electro-clap');
const electroBass = document.querySelector('#electro-bass');
const electroSizzle = document.querySelector('#electro-sizzle');
const electroTick = document.querySelector('#electro-tick');
const electroTom1 = document.querySelector('#electro-tom1');
const electroTom2 = document.querySelector('#electro-tom2');
const electroPing = document.querySelector('#electro-ping');
const electroLaser = document.querySelector('#electro-laser');


//Keyboard Sound Function
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum-div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    this.console.log(audio);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
})

// Click Drum Function
let drumDivs = document.querySelectorAll('div.drum-div');
drumDivs.forEach((drum) => {
    drum.addEventListener('click', (e) => {
        let sound = e.srcElement.id;
        let audio = new Audio(`sounds/${sound}.mp3`);
        this.console.log(audio);
        audio.currentTime = 0;
        audio.play();
        drum.classList.add('playing')
    });
  });

  
  function removeTransition(e) {
      if(e.propertyName !== 'transform') return
      this.classList.remove('playing')
  }


  drumDivs.forEach(drum => drum.addEventListener('transitionend', removeTransition));