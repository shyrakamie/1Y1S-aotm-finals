const buttons = document.querySelectorAll('.menu-btn');
const panels = document.querySelectorAll('.panel-content');
const aotmImg = document.querySelector('.damsel-personal-aotm');
const aotmAudio = document.getElementById('aotm-audio');
const songAudio = document.getElementById('song-audio');

aotmAudio.volume = 0.1;
aotmAudio.loop = true;

if (songAudio) {
    songAudio.volume = 0.1;
    songAudio.loop = false;
}

function playTrackAudio() {
    if (!songAudio) return;
    aotmAudio.pause();
    songAudio.currentTime = 0;
    songAudio.play();
}

function playBgAudio() {
    if (songAudio) {
        songAudio.pause();
        songAudio.currentTime = 0;
    }
    aotmAudio.play();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));
        button.classList.add('active');

        const targetId = button.getAttribute('data-target');
        if (targetId) {
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }

            if (targetId === 'play') {
                playTrackAudio();
            } else if (songAudio && !songAudio.paused) {
                playBgAudio();
            }
        }
    });
});
window.addEventListener('DOMContentLoaded', async () => {
  try {
    await aotmAudio.play();
    aotmImg.classList.add('locked');
  } catch (err) {
    const startOnFirstGesture = (e) => {
      if (e.target === aotmImg || aotmImg.contains(e.target)) return;
      setPlayingState(true);
    };

    window.addEventListener('pointerdown', startOnFirstGesture, { once: true });
    window.addEventListener('keydown', startOnFirstGesture, { once: true });
  }
});