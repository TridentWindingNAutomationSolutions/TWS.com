const scrollList = document.getElementById('scroll-list');
const scrollContainer = document.querySelector('.scroll-container');

// 1. Clone the content for a seamless loop
const clone = scrollList.innerHTML;
scrollList.innerHTML += clone; 

let scrollLeft = 0;
const speed = 1; // Adjust this number to change speed (0.5 slow, 2 fast)

function autoScroll() {
  scrollLeft += speed;
  
  // 2. Reset scroll position when the first half finishes
  if (scrollLeft >= scrollList.scrollWidth / 2) {
    scrollLeft = 0;
  }
  
  scrollContainer.scrollLeft = scrollLeft;
  requestAnimationFrame(autoScroll);
}

// 3. Start the animation
autoScroll();

// Optional: Pause on hover
let isPaused = false;
scrollContainer.addEventListener('mouseenter', () => { /* Add logic to pause if desired */ });