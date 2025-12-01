// =================== IMAGE SLIDER =================== //
let currentSlideIndex = 1;

function changeSlide(n) {
  showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
  showSlide(currentSlideIndex = n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  if (n > slides.length) {
    currentSlideIndex = 1;
  }
  if (n < 1) {
    currentSlideIndex = slides.length;
  }
  
  slides.forEach(slide => slide.classList.remove('show'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  if (slides[currentSlideIndex - 1]) {
    slides[currentSlideIndex - 1].classList.add('show');
  }
  if (indicators[currentSlideIndex - 1]) {
    indicators[currentSlideIndex - 1].classList.add('active');
  }
}

// Auto-advance slider every 5 seconds
let autoSlideInterval = setInterval(() => {
  changeSlide(1);
}, 5000);

// Reset auto-slide timer on user interaction
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
  sliderContainer.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      changeSlide(1);
    }, 5000);
  });
}

// Initialize slider on page load
window.addEventListener('load', () => {
  showSlide(currentSlideIndex);
});

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

// =================== LOGIN PAGE (REAL) =================== //
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
      alert("❌ Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`✅ Welcome back, ${data.name || email}!`);
        window.location.href = "index.html"; // redirect after successful login
      } else {
        alert(`❌ ${data.message || "Login failed"}`);
      }
    } catch (err) {
      alert("❌ Server error. Please try again.");
      console.error(err);
    }
  });
}

// =================== SIGNUP PAGE (REAL) =================== //
const signupForm = document.querySelector('.signupphase form');
if (signupForm) {
  signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

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

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`✅ Welcome, ${fullName}! Your account has been created.`);
        window.location.href = "login.html"; // redirect after signup
      } else {
        alert(`❌ ${data.message || "Signup failed"}`);
      }
    } catch (err) {
      alert("❌ Server error. Please try again.");
      console.error(err);
    }
  });
}
