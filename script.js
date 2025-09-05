// Typing effect
const typingEl = document.querySelector('.typing');
if (typingEl){
  const words = JSON.parse(typingEl.getAttribute('data-words') || '[]');
  let i=0, j=0, deleting=false;
  function type(){
    if (!words.length) return;
    const word = words[i];
    typingEl.textContent = deleting ? word.slice(0, j--) : word.slice(0, ++j);
    if (!deleting && j === word.length){ deleting = true; setTimeout(type, 1200); return; }
    if (deleting && j === 0){ deleting = false; i = (i+1)%words.length; }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}
// function updateClock() {
//   const now = new Date();
//   document.getElementById("clock").innerText = 
//     now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
// }
// setInterval(updateClock, 1000);
// updateClock();
const quotes = [
  "Talk is cheap. Show me the code. – Preetham Velamala",
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Programs must be written for people to read."
];
let i = 0;
function changeQuote() {
  document.getElementById("quote").innerText = quotes[i];
  i = (i + 1) % quotes.length;
}
setInterval(changeQuote, 5000);
changeQuote();


//  window.addEventListener("load", () => {
//     const video = document.getElementById("bg-video");
//     video.pause();
//     setTimeout(() => {
//       video.play();
//     }, 1000);
//   }); 


// IntersectionObserver reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// Fake contact form submit
function sendMessage(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('Please fill all fields'); return false; }
  alert('Thanks, '+ name +'! Your message has been captured locally.');
  e.target.reset();
  return false;
}

