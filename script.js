/*
╔════════════════════════════════════════════════════════════════════════════════╗
║                                                                                ║
║     ██████╗ ██╗   ██╗    ██████╗ ███████╗ █████╗ ██╗  ██╗██╗    ██╗ █████╗ ███╗   ██╗ ║
║     ██╔══██╗╚██╗ ██╔╝    ██╔══██╗╚══███╔╝██╔══██╗██║ ██╔╝██║    ██║██╔══██╗████╗  ██║ ║
║     ██████╔╝ ╚████╔╝     ██║  ██║  ███╔╝ ███████║█████╔╝ ██║ █╗ ██║███████║██╔██╗ ██║ ║
║     ██╔══██╗  ╚██╔╝      ██║  ██║ ███╔╝  ██╔══██║██╔═██╗ ██║███╗██║██╔══██║██║╚██╗██║ ║
║     ██████╔╝   ██║       ██████╔╝███████╗██║  ██║██║  ██╗╚███╔███╔╝██║  ██║██║ ╚████║ ║
║     ╚═════╝    ╚═╝       ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ║
║                                                                                ║
║                  ██╗ ██████╗ ██████╗  █████╗ ██╗                                ║
║                  ██║██╔═══██╗██╔══██╗██╔══██╗██║                                ║
║                  ██║██║   ██║██████╔╝███████║██║                                ║
║                  ██║██║▄▄ ██║██╔══██╗██╔══██║██║                                ║
║                  ██║╚██████╔╝██████╔╝██║  ██║███████╗                           ║
║                  ╚═╝ ╚══▀▀═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                           ║
║                                                                                ║
║            ██████╗  █████╗ ███████╗██╗   ██╗███████╗██╗   ██╗ █████╗ ██████╗    ║
║            ██╔══██╗██╔══██╗██╔════╝╚██╗ ██╔╝██╔════╝╚██╗ ██╔╝██╔══██╗██╔══██╗   ║
║            ██████╔╝███████║███████╗ ╚████╔╝ ███████╗ ╚████╔╝ ███████║██████╔╝   ║
║            ██╔══██╗██╔══██║╚════██║  ╚██╔╝  ╚════██║  ╚██╔╝  ██╔══██║██╔══██╗   ║
║            ██████╔╝██║  ██║███████║   ██║   ███████║   ██║   ██║  ██║██║  ██║   ║
║            ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ║
║                                                                                ║
╠════════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   ⚡ JAVASCRIPT - PORTFOLIO WEBSITE                                            ║
║   👤 CREATED BY: DZAKWAN IQBAL BASYSYAR                                        ║
║   📅 YEAR: 2026                                                                ║
║   🏢 COMPANIES: MINESIVE | SIVELABS                                            ║
║                                                                                ║
║   ⚠️  ALL RIGHTS RESERVED - BY DZAKWAN IQBAL BASYSYAR                          ║
║   ⚠️  DO NOT COPY OR REDISTRIBUTE WITHOUT PERMISSION                           ║
║                                                                                ║
╚════════════════════════════════════════════════════════════════════════════════╝
*/

// ==========================================
// BY DZAKWAN IQBAL BASYSYAR
// OWNER OF MINESIVE | FOUNDER OF SIVELABS
// ==========================================

// ==========================================
// PORTFOLIO WEBSITE - DZAKWAN IQBAL BASYSYAR
// Modern Interactive JavaScript
// ==========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // LOADER
    // ==========================================
    const loader = document.getElementById('loader');

    window.addEventListener('load', function () {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    });

    // ==========================================
    // CUSTOM CURSOR
    // ==========================================
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (cursor && cursorFollower && window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 50);
        });

        // Cursor effects on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-toggle, .skill-item, .venture-card, .role-card');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.opacity = '0.3';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.opacity = '0.5';
            });
        });
    }

    // ==========================================
    // NAVIGATION
    // ==========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Update active nav link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ==========================================
    // TYPING EFFECT
    // ==========================================
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Entrepreneur & Investor',
        'Owner of Minesive',
        'Founder of SiveLabs',
        'Game Developer',
        'Full Scholarship Recipient'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (typingText) {
        setTimeout(typeEffect, 1500);
    }

    // ==========================================
    // COUNTER ANIMATION
    // ==========================================
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsAnimated = true;

            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats();

    // ==========================================
    // SKILL BARS ANIMATION
    // ==========================================
    const skillBars = document.querySelectorAll('.skill-bar');
    let skillsAnimated = false;

    function animateSkillBars() {
        if (skillsAnimated) return;

        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            skillsAnimated = true;

            skillBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                setTimeout(() => {
                    bar.style.width = level + '%';
                }, 300);
            });
        }
    }

    window.addEventListener('scroll', animateSkillBars);

    // ==========================================
    // SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll('.venture-card, .role-card, .skill-item, .timeline-item, .info-item, .skill-tag');

    function revealOnScroll() {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100) {
                el.classList.add('reveal', 'active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ==========================================
    // PARTICLES BACKGROUND
    // ==========================================
    const particlesContainer = document.getElementById('particles');

    if (particlesContainer) {
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 4 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            const opacity = Math.random() * 0.5 + 0.1;

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(0, 78, 146, ${opacity});
                border-radius: 50%;
                left: ${posX}%;
                top: ${posY}%;
                animation: particle-float ${duration}s ease-in-out ${delay}s infinite;
                pointer-events: none;
            `;

            particlesContainer.appendChild(particle);
        }

        // Create particles
        for (let i = 0; i < 30; i++) {
            createParticle();
        }

        // Add particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particle-float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0.5;
                }
                25% {
                    transform: translateY(-30px) translateX(20px);
                }
                50% {
                    transform: translateY(-10px) translateX(-20px);
                    opacity: 0.2;
                }
                75% {
                    transform: translateY(-25px) translateX(15px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
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

    // ==========================================
    // FORM HANDLING
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Show success message
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-check"></i> <span>Message Sent!</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            // Log form data (in production, you would send this to a server)
            console.log('Form submitted:', data);

            // Reset form
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalContent;
                submitBtn.style.background = '';
            }, 3000);
        });
    }

    // ==========================================
    // IMAGE LAZY LOADING
    // ==========================================
    const lazyImages = document.querySelectorAll('img[src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ==========================================
    // INTERSECTION OBSERVER FOR SECTIONS
    // ==========================================
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // ==========================================
    // TILT EFFECT ON CARDS
    // ==========================================
    const tiltCards = document.querySelectorAll('.venture-card, .image-wrapper');

    if (window.matchMedia('(hover: hover)').matches) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ==========================================
    // KEYBOARD NAVIGATION
    // ==========================================
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ==========================================
    // CONSOLE EASTER EGG
    // ==========================================
    console.log('%c Welcome to Dzakwan\'s Portfolio! 🚀', 'font-size: 20px; color: #6366f1; font-weight: bold;');
    console.log('%c Built with passion and code.', 'font-size: 14px; color: #a78bfa;');
    console.log('%c Minesive | SiveLabs | Investor', 'font-size: 12px; color: #71717a;');
});
