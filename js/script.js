function openConsultationForm() {
  alert("Thank you for your interest! A consultation form will be added here soon.");
}

// Scroll Animation using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(fader => observer.observe(fader));
});
