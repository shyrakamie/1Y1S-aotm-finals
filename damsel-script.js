const aotmImg = document.querySelector('.aotm-img');
const aotmAudio = document.getElementById('aotm-audio');

aotmAudio.volume = 0.05;

aotmImg.addEventListener('click',() => {
  const isLocked = aotmImg.classList.toggle('locked');
  if (isLocked) {
    aotmAudio.currentTime = 0;
    aotmAudio.play();
  }
  else {
    aotmAudio.pause();
  }  
});


const links = document.querySelectorAll('.name-aotm');
const nameImg = document.getElementById('artist-img');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    nameImg.src = link.getAttribute('data-img');
  });
});