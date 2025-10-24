// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Menu Tabs
  const tabs = document.querySelectorAll('#menuTabs .nav-link');
  const panes = document.querySelectorAll('.tab-pane');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      panes.forEach(p => p.classList.remove('active'));
      document.querySelector(target).classList.add('active');
    });
  });
  
  // Scroll Animations (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-zoom-in').forEach(el => {
    observer.observe(el);
  });
  
  // Forms
  document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservation booked successfully! We\'ll confirm soon.');
    this.reset();
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    this.reset();
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});