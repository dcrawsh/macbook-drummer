const snare = document.querySelector('.snare');
const highHat = document.querySelector('.high-hat');
const kick = document.querySelector('.kick');
const low = document.querySelector('.low');
const middle = document.querySelector('.middle');
const crash = document.querySelector('.crash');
const high = document.querySelector('.high');
const kickSound = document.getElementById('kickSound');

document.addEventListener('keypress', (e) => {
   if(e.key === 'k'){
    var audio = new Audio("sounds/kicks/Bass-Drum-1.wav");
    audio.play();
    kick.style.color = 'blue';
   }
   if(e.key === 's'){
    var audio = new Audio("sounds/snares/Kawai-K11-Bob-Snare.wav");
    audio.play();
   }
   if(e.key === 'h'){
    var audio = new Audio("sounds/highs/Hi-Tom-1.wav");
    audio.play();
   }
   if(e.key === 'c'){
    var audio = new Audio("sounds/crashes/Crash-Cymbal-1.wav");
    audio.play();
   }
   if(e.key === 'e'){
    var audio = new Audio("sounds/high-hat/Closed-Hi-Hat-1.wav");
    audio.play();
   }
   if(e.key === 'm'){
    var audio = new Audio("sounds/middles/Korg-N1R-Mid-Tom-2.wav");
    audio.play();
   }
   if(e.key === 'l'){
    var audio = new Audio("sounds/lows/Low-Tom-1.wav");
    audio.play();
   }
})

