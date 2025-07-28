'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const clickedNavText = this.innerHTML.toLowerCase();

    // Remove active class from all navigation links and pages
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
    }

    // Add active class to clicked navigation link
    this.classList.add("active");

    // Find and activate the corresponding page
    for (let j = 0; j < pages.length; j++) {
      if (clickedNavText === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
        break;
      }
    }

  });
}


// AI-THEMED ENHANCEMENTS
// =======================

// Dynamic gradient background animation
function initDynamicBackground() {
  const body = document.body;
  let angle = 0;
  
  setInterval(() => {
    angle += 0.5;
    const hue1 = (angle * 2) % 360;
    const hue2 = (angle * 2 + 120) % 360;
    const hue3 = (angle * 2 + 240) % 360;
    
    body.style.background = `
      radial-gradient(circle at 20% 80%, hsla(${hue1}, 100%, 50%, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, hsla(${hue2}, 100%, 50%, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, hsla(${hue3}, 100%, 50%, 0.03) 0%, transparent 50%),
      var(--smoky-black)
    `;
  }, 100);
}

// Add typing effect to the name
function initTypingEffect() {
  const nameElement = document.querySelector('.name');
  if (!nameElement) return;
  
  const originalText = nameElement.textContent;
  nameElement.textContent = '';
  
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < originalText.length) {
      nameElement.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
      // Start the gradient animation after typing is complete
      nameElement.style.animation = 'gradient-shift 3s ease-in-out infinite alternate';
    }
  }, 100);
}

// Add fade-in animation to elements as they come into view
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all major elements
  const elementsToAnimate = document.querySelectorAll(
    '.project-item, .blog-post-item, .timeline-item, .skills-item, .service-item'
  );
  
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
}

// Enhanced cursor trail effect
function initCursorTrail() {
  const trail = [];
  const trailLength = 10;
  
  // Create trail elements
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.cssText = `
      position: fixed;
      width: ${8 - i * 0.5}px;
      height: ${8 - i * 0.5}px;
      background: radial-gradient(circle, rgba(0, 212, 255, ${1 - i * 0.1}) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: screen;
      transition: all 0.1s ease-out;
    `;
    document.body.appendChild(dot);
    trail.push(dot);
  }
  
  document.addEventListener('mousemove', (e) => {
    trail.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }, index * 10);
    });
  });
}

// Floating elements animation
function initFloatingElements() {
  const floatingElements = document.querySelectorAll('.project-item, .blog-post-item');
  
  floatingElements.forEach((el, index) => {
    const delay = index * 0.2;
    const duration = 3 + Math.random() * 2;
    
    el.style.animation = `float-gentle ${duration}s ease-in-out ${delay}s infinite alternate`;
  });
  
  // Add CSS for floating animation if not exists
  if (!document.querySelector('#floating-keyframes')) {
    const style = document.createElement('style');
    style.id = 'floating-keyframes';
    style.textContent = `
      @keyframes float-gentle {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(-10px) rotate(1deg); }
      }
    `;
    document.head.appendChild(style);
  }
}

// Interactive skill bars
function initInteractiveSkillBars() {
  const skillItems = document.querySelectorAll('.skills-item');
  
  skillItems.forEach(item => {
    const progressBar = item.querySelector('.skill-progress-fill');
    if (!progressBar) return;
    
    const percentage = progressBar.style.width;
    progressBar.style.width = '0%';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            progressBar.style.width = percentage;
            progressBar.style.transition = 'width 2s ease-out';
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(item);
  });
}

// Add glitch effect to name on hover
function initGlitchEffect() {
  const nameElement = document.querySelector('.name');
  if (!nameElement) return;
  
  const originalText = nameElement.textContent;
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  nameElement.addEventListener('mouseenter', () => {
    let iterations = 0;
    const maxIterations = 10;
    
    const glitchInterval = setInterval(() => {
      nameElement.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < iterations || char === ' ') {
            return originalText[index];
          }
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        })
        .join('');
      
      iterations++;
      
      if (iterations > maxIterations) {
        clearInterval(glitchInterval);
        nameElement.textContent = originalText;
      }
    }, 50);
  });
}

// Matrix-style rain effect (subtle)
function initMatrixRain() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.05;
  `;
  
  document.body.appendChild(canvas);
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const drops = [];
  const fontSize = 10;
  const columns = canvas.width / fontSize;
  
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00d4ff';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 100);
}

// Enhanced particle system
function initParticleSystem() {
  const particles = [];
  const numParticles = 50;
  
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    });
  }
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -2;
  `;
  
  document.body.appendChild(canvas);
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
      ctx.fill();
      
      // Connect nearby particles
      particles.slice(index + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
          ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

// AI Graph Interactive Features
function initAIGraphInteractions() {
  const researchNodes = document.querySelectorAll('.research-node');
  const techniqueNodes = document.querySelectorAll('.technique-node');
  
  // Add hover effects to research nodes
  researchNodes.forEach(node => {
    const circle = node.querySelector('.area-node');
    const text = node.querySelector('.node-text');
    
    node.addEventListener('mouseenter', () => {
      // Highlight connected lines
      const area = node.dataset.area;
      const connections = node.querySelectorAll('.connection-line');
      connections.forEach(line => {
        line.style.strokeWidth = '4';
        line.style.filter = 'drop-shadow(0 0 5px currentColor)';
      });
      
      // Show tooltip-like effect
      text.style.fontSize = '14px';
      text.style.fontWeight = '600';
    });
    
    node.addEventListener('mouseleave', () => {
      const connections = node.querySelectorAll('.connection-line');
      connections.forEach(line => {
        line.style.strokeWidth = '2';
        line.style.filter = 'none';
      });
      
      text.style.fontSize = '12px';
      text.style.fontWeight = '500';
    });
  });
  
  // Add click interactions
  researchNodes.forEach(node => {
    node.addEventListener('click', () => {
      const area = node.dataset.area;
      // Could add more interactive features here
      console.log(`Clicked on research area: ${area}`);
    });
  });
}

// Initialize all AI enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add a small delay to ensure all elements are rendered
  setTimeout(() => {
    initDynamicBackground();
    initTypingEffect();
    initScrollAnimations();
    initCursorTrail();
    initFloatingElements();
    initInteractiveSkillBars();
    initGlitchEffect();
    initMatrixRain();
    initParticleSystem();
    initAIGraphInteractions();
  }, 500);
});

// Add smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});