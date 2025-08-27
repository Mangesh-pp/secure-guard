// =================== GLOBAL =================== //
// Smooth navigation for all nav links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = this.getAttribute('href');
  });
});

// =================== HOME PAGE =================== //
const services = document.querySelectorAll('.service');
services.forEach(service => {
  service.addEventListener('mouseenter', () => {
    service.style.transform = 'scale(1.05)';
    service.style.transition = 'transform 0.3s ease';
  });
  service.addEventListener('mouseleave', () => {
    service.style.transform = 'scale(1)';
  });
});

// =================== ABOUT PAGE =================== //
const teamMembers = document.querySelectorAll('.team .member');
teamMembers.forEach(member => {
  member.addEventListener('mouseenter', () => {
    member.style.transform = 'scale(1.05)';
    member.style.transition = 'transform 0.3s ease';
  });
  member.addEventListener('mouseleave', () => {
    member.style.transform = 'scale(1)';
  });
});

const cards = document.querySelectorAll('.mission-vision .card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.03)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// =================== CONTACT PAGE =================== //
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    if (email) {
      alert(`✅ Thank you for subscribing, ${email}!`);
      this.reset();
    } else {
      alert("❌ Please enter a valid email address.");
    }
  });
}

const infoBoxes = document.querySelectorAll('.contact-info .info-box');
infoBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.05)';
    box.style.transition = 'transform 0.3s ease';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});

// =================== LOGIN PAGE =================== //
const loginForm = document.querySelector('.loginphase form');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('exampleInputEmail1').value.trim();
    const password = document.getElementById('exampleInputPassword1').value.trim();

    if (!email || !password) {
      alert("❌ Please enter both email and password.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    alert(`✅ Welcome back, ${email}! (Demo login successful)`);
    loginForm.reset();
  });
}

// =================== SIGNUP PAGE =================== //
const signupForm = document.querySelector('.signupphase form');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelectorAll('input[type="password"]')[0].value.trim();
    const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value.trim();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("❌ Please fill in all fields.");
      return;
    }

    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email.match(gmailPattern)) {
      alert("❌ Please enter a valid Gmail address.");
      return;
    }

    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }

    alert(`✅ Welcome, ${fullName}! Your account has been created (demo).`);
    signupForm.reset();
  });
}
alert(`✅ Welcome, ${fullName}! Your account has been created.`);
window.location.href = "login.html"; // redirect after signup
