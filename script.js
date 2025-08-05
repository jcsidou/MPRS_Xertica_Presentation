// Função para rolar a timeline horizontalmente
function scrollTimeline(direction) {
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const scrollAmount = timeline.offsetWidth * 0.7;
    timeline.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-active');
            navToggle.classList.toggle('nav-toggle-active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Simple AOS-like animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });

    // Animate process flow steps
    const processSteps = document.querySelectorAll('.flow-step');
    let currentStep = 0;

    function animateSteps() {
        // Remove active class from all steps
        processSteps.forEach(step => step.classList.remove('active'));
        
        // Add active class to current step
        if (processSteps[currentStep]) {
            processSteps[currentStep].classList.add('active');
        }
        
        // Move to next step
        currentStep = (currentStep + 1) % processSteps.length;
    }

    // Start the animation
    if (processSteps.length > 0) {
        setInterval(animateSteps, 2000);
    }

    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${parallax * speed}px)`;
        });
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title-main');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Counter animation for statistics (if any)
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background:  linear-gradient(135deg, var(--cor_principal), #b85e0b) !important;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'translateY(10px)';
        }
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.pilar-card, .func-card, .beneficio-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Performance optimization: Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply throttling to scroll events
    const throttledScrollHandler = throttle(function() {
        // Any scroll-based animations here
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScrollHandler);
});

// Add CSS for mobile menu
const mobileMenuCSS = `
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .nav-menu.nav-menu-active {
        display: flex;
        transform: translateY(0);
        opacity: 1;
    }
    
    .nav-toggle.nav-toggle-active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.nav-toggle-active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.nav-toggle-active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}

.scroll-to-top:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.loaded {
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.lazy.loaded {
    opacity: 1;
}
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);
