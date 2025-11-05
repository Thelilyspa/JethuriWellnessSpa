// Testimonial auto-slider
let testimonials = document.querySelectorAll('.testimonial');
let i = 0;
function cycleTestimonials() {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[i].classList.add('active');
  i = (i + 1) % testimonials.length;
}
setInterval(cycleTestimonials, 4000);

// Gallery description popup
function showDescription(text) {
  const box = document.getElementById('descriptionBox');
  box.innerHTML = text;
  box.style.display = 'block';
  setTimeout(() => { box.style.display = 'none'; }, 5000);
}
