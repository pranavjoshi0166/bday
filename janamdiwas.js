window.addEventListener('DOMContentLoaded', () => {
  // Start birthday song on first click anywhere
  document.body.addEventListener('click', () => {
    const song = document.getElementById('birthday-song');
    song.play().catch(() => {});
  }, { once: true });
  startCountdown();
  initializeMessages();
});

// Countdown function (hard-coded to FEB 21, 2026)
function startCountdown() {
  const timer = document.getElementById('timer');
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  let countDown = new Date('Feb 17, 2026 00:00:00').getTime();
  let x = setInterval(() => {
    let now = new Date().getTime(), distance = countDown - now;
    document.getElementById('days').innerText = Math.floor(distance / day);
    document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
    document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
    document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);
    if (distance < 0) {
      timer.classList.add('d-none');
      confetti({ particleCount: 100, spread: 70 });
      clearInterval(x);
      _slideSatu();
    }
  }, second);
}

// Initialize static messages
function initializeMessages() {
  new TypeIt("#teks1", {
    strings: ["Today, I'm sending all my best wishes to you.", "May the things that make you fall also be the reason you keep growing.", "May the world always watch over you, wherever you are.", "May your days always be filled with endless love.", "May every step you take be made easier until you achieve all you desire."],
    startDelay: 4000,
    speed: 75,
    waitUntilVisible: true
  }).go();

  new TypeIt("#teks2", {
    strings: ["With or without me, I hope the universe always finds a way to make you happy.", " ", "Happyyy Birthdayy to youu ❤️!!.", " ", "- Wishing you lots and lots of happiness and love."],
    startDelay: 200,
    speed: 100,
    waitUntilVisible: true
  }).go();

  new TypeIt("#trims", {
    strings: ["Thank you."],
    startDelay: 2000,
    speed: 150,
    loop: false,
    waitUntilVisible: true,
  }).go();
}

// Slide functions
const _slideSatu = () => {
  const slideSatu = document.getElementById('slideSatu');
  const tapSatu = document.getElementById('tapSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(() => {
    tapSatu.classList.remove('d-none');
    document.body.addEventListener('click', _slideDua, { once: true });
  }, 5000);
};

const _slideDua = () => {
  document.getElementById('slideSatu').classList.add('d-none');
  document.getElementById('tapSatu').classList.add('d-none');
  const slideDua = document.getElementById('slideDua');
  const tapDua = document.getElementById('tapDua');
  slideDua.classList.remove('d-none');
  setTimeout(() => {
    tapDua.classList.remove('d-none');
    document.body.addEventListener('click', _slideTiga, { once: true });
  }, 35000);
};

const _slideTiga = () => {
  document.getElementById('slideDua').classList.add('d-none');
  document.getElementById('tapDua').classList.add('d-none');
  const slideTiga = document.getElementById('slideTiga');
  const tapTiga = document.getElementById('tapTiga');
  slideTiga.classList.remove('d-none');
  setTimeout(() => {
    tapTiga.classList.remove('d-none');
    document.body.addEventListener('click', _slideEmpat, { once: true });
  }, 38000);
};

const _slideEmpat = () => {
  document.getElementById('slideTiga').classList.add('d-none');
  document.getElementById('tapTiga').classList.add('d-none');
  const slideEmpat = document.getElementById('slideEmpat');
  const noBtn = document.getElementById('gak');
  const yesBtn = document.getElementById('suka');
  let scale = 1; // Initial scale for YES button

  slideEmpat.classList.remove('d-none');

  noBtn.addEventListener('click', function () {
    scale += 0.1; // Increase scale by 10% each time NO! is clicked
    yesBtn.style.transform = `scale(${scale})`;
    yesBtn.style.transition = 'transform 0.3s ease';
  });

  yesBtn.addEventListener('click', function () {
    slideEmpat.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideEmpat.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideEmpat.remove();
      _slideCake();
    }, 1000);
  });
};

const _slideCake = () => {
  const slideCake = document.getElementById('slideCake');
  slideCake.classList.remove('d-none');
  document.getElementById('cutCakeBtn').addEventListener('click', () => {
    confetti({ particleCount: 150, spread: 90 });
    slideCake.classList.add('animate__fadeOut');
    setTimeout(() => {
      slideCake.remove();
      _slideFinal();
    }, 2000);
  });
};

const _slideFinal = () => {
  const slideFinal = document.getElementById('slideFinal');
  slideFinal.classList.remove('d-none');
  // Slide stays visible indefinitely
};