const snare = document.querySelector('.snare');
const highHat = document.querySelector('.high-hat');
const kick = document.querySelector('.kick');
const low = document.querySelector('.low');
const middle = document.querySelector('.middle');
const crash = document.querySelector('.crash');
const high = document.querySelector('.high');

document.addEventListener('keypress', (e) => {
   if(e.key === 'k'){
       console.log('k');
   }
   if(e.key === 's'){
       console.log('s');
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

