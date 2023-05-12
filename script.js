window.onload=function() {
  console.log('loaded');
};


document.querySelector('.loadingScreen').addEventListener('animationend', function() {
  document.getElementById('load').remove();  
  document.querySelector('body').style.top = '0px';
  document.querySelector('body').style.left = '0px';
  document.querySelector('body').style.width = '100%';
  document.querySelector('body').style.height = '100%';
  document.querySelector('body').style.overflowY = 'auto';
  window.scrollTo(0, 0);
});


function changeBackground() {
  if (document.getElementById('inspButton').checked) {
    document.getElementById('inspList').style.top = 0;
    document.getElementById('inspBg').style.opacity = 1;
    document.getElementById('inspBg').style.zIndex = 2;
  } else {
    document.getElementById('inspList').style.top = '100%';
    document.getElementById('inspBg').style.opacity = 0;
    document.getElementById('inspBg').style.zIndex = -2;
  }
}



const video = document.getElementById("gal1vid");
const gal1 = document.getElementById("gal1");
const windowHeight = window.innerHeight;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const top = entry.target.getBoundingClientRect().top;
      const clipTop = 50 - top / windowHeight * 50;
      const clipPath = `inset(${clipTop}% 0 0 0)`;

      video.style.clipPath = clipPath;
    }
  });
});

observer.observe(gal1);

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const gal1Bottom = gal1.offsetTop + gal1.offsetHeight;
  const videoHeight = video.offsetHeight;
  const videoTop = windowHeight - videoHeight;

  if (scrolled > gal1Bottom - videoHeight) {
    const clipBottom = (scrolled - (gal1Bottom - videoHeight)) / windowHeight * 50;
    const clipPath = `inset(0 0 ${clipBottom}% 0)`;

    video.style.clipPath = clipPath;
  }
});