// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

mobileMenuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenuToggle.innerHTML = navList.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Search toggle functionality
const searchToggle = document.querySelector('.search-toggle');
const searchInput = document.querySelector('.search-input');

searchToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    searchInput.classList.toggle('show');
    if (searchInput.classList.contains('show')) {
        searchInput.focus();
    }
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchInput.classList.remove('show');
    }
});

// Profile picture hover effect
const profilePic = document.querySelector('.profile-pic');
let isHovering = false;

profilePic.addEventListener('mouseenter', () => {
    isHovering = true;
});

profilePic.addEventListener('mouseleave', () => {
    isHovering = false;
    profilePic.style.transform = 'scale(1)';
});

document.addEventListener('mousemove', (e) => {
    if (isHovering && window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        profilePic.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    }
});

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
        
        if (isVisible && !bar.dataset.animated) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            bar.dataset.animated = 'true';
        }
    });
};

// Set initial progress values
document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.style.width;
    bar.setAttribute('data-progress', width);
});

// Initial check
animateProgressBars();

// Check on scroll
window.addEventListener('scroll', animateProgressBars);

// Responsive adjustments
function handleResize() {
    if (window.innerWidth > 768) {
        navList.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

window.addEventListener('resize', handleResize);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover effects
document.querySelectorAll('.custom-button, .resume-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});
