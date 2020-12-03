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
   }
   if(e.key === 's'){
    var audio = new Audio("sounds/snares/Kawai-K11-Bob-Snare.wav");
    audio.play();
       
   }
   if(e.key === 'h'){
       console.log('h');
   }
   if(e.key === 'c'){
       console.log('c');
   }
   if(e.key === 'e'){
       console.log('e');
   }
   if(e.key === 'm'){
       console.log('m');
   }
   if(e.key === 'l'){
       console.log('l');
   }
})

