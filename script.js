document.addEventListener('DOMContentLoaded', function () {
  const typingText = document.querySelector('.typing-text');
  const roles = ['Web Developer', 'Java Programmer', 'Frontend Designer'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 300;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });

  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => link.classList.remove('active'));
  const homeLink = document.querySelector('.navbar a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }
});
