import { Analytics } from "@vercel/analytics/next"

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// WhatsApp and Top Chevron Functionality
const whatsappBtn = document.getElementById('whatsapp-btn');
const topChevron = document.getElementById('topChevron');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // WhatsApp hide/show
  if (currentScroll > lastScroll && currentScroll > 300) {
    whatsappBtn.classList.add('whatsapp-hidden');
  } else {
    whatsappBtn.classList.remove('whatsapp-hidden');
  }
  
  // Chevron visibility
  if (currentScroll > 300) {
    topChevron.classList.add('visible');
  } else {
    topChevron.classList.remove('visible');
  }
  
  lastScroll = currentScroll;
  
  // Animate elements on scroll
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('revealed');
    }
  });
});

// Scroll to top
topChevron.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  // Add revealed class to visible elements on page load
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('revealed');
    }
  });
});