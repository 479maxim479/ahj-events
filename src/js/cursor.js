const hammerCursor = document.querySelector('.cursor');

export default function cursor(event) {
  hammerCursor.style.top = `${event.pageY}px`;
  hammerCursor.style.left = `${event.pageX}px`;
}

window.addEventListener('mousemove', cursor);
