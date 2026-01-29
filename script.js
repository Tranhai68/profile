// Smooth scroll for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .project-card, .pricing-card, .award-card, .about-card');
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        observer.observe(el);

        // Add stagger class
        if (index % 3 === 1) el.classList.add('stagger-1');
        if (index % 3 === 2) el.classList.add('stagger-2');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }

    lastScroll = currentScroll;
});

// Add hover effect for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

console.log('Portfolio initialized ✓');

// ===========================
// LOAD DATA FROM ADMIN PANEL
// ===========================

function loadPortfolioData() {
    const saved = localStorage.getItem('portfolioData');
    if (!saved) return;

    try {
        const data = JSON.parse(saved);
        updatePageContent(data);
        console.log('Portfolio data loaded from admin ✓');
    } catch (e) {
        console.error('Error loading portfolio data:', e);
    }
}

function updatePageContent(data) {
    // Update Logo
    if (data.logo) {
        const logoElements = document.querySelectorAll('.logo');
        logoElements.forEach(logo => {
            logo.innerHTML = `${data.logo.main}<span style="color: var(--color-accent);">${data.logo.accent}</span>`;
        });
    }

    // Update Hero Section
    if (data.hero) {
        const subtitle = document.querySelector('.hero-subtitle');
        const title = document.querySelector('.hero-title');
        const description = document.querySelector('.hero-description');

        if (subtitle) subtitle.textContent = data.hero.subtitle;
        if (title) title.innerHTML = `${data.hero.title1}<br>${data.hero.title2}`;
        if (description) description.textContent = data.hero.description;
    }

    // Update Stats
    if (data.stats && data.stats.length >= 3) {
        const statElements = document.querySelectorAll('.hero-stats .stat');
        data.stats.forEach((stat, i) => {
            if (statElements[i]) {
                const value = statElements[i].querySelector('.stat-value');
                const label = statElements[i].querySelector('.stat-label');
                if (value) value.textContent = stat.value;
                if (label) label.textContent = stat.label;
            }
        });
    }

    // Update Media
    if (data.media) {
        if (data.media.heroImage) {
            const heroBanner = document.querySelector('.hero-banner-image');
            if (heroBanner) heroBanner.src = data.media.heroImage;
        }
        if (data.media.profileImage) {
            const profile = document.querySelector('.profile-image');
            if (profile) profile.src = data.media.profileImage;
        }
        if (data.media.personalPhoto) {
            const personal = document.querySelector('.personal-photo');
            if (personal) personal.src = data.media.personalPhoto;
        }

        // Update Product Images
        if (data.media.productImages && data.media.productImages.length > 0) {
            const scrollCards = document.querySelectorAll('.scroll-card-image');
            data.media.productImages.forEach((img, i) => {
                if (scrollCards[i]) scrollCards[i].src = img;
            });
        }

        // YouTube Embed
        if (data.media.youtubeUrl) {
            const ytSection = document.getElementById('youtube-video-section');
            const ytContainer = document.getElementById('youtube-embed-container');
            if (ytSection && ytContainer) {
                const videoId = extractYouTubeId(data.media.youtubeUrl);
                if (videoId) {
                    ytSection.style.display = 'block';
                    ytContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
                }
            }
        }
    }

    // Update Projects
    if (data.projects && data.projects.length > 0) {
        const projectWrapper = document.querySelector('.projects-scroll-wrapper');
        if (projectWrapper) {
            projectWrapper.innerHTML = data.projects.map(p => `
                <a href="${p.link}" class="project-card project-link" target="_blank" rel="noopener noreferrer">
                    <div class="project-card-inner">
                        <img src="${p.image}" alt="${p.title}" class="project-image">
                        <div class="project-info">
                            <p class="project-category">${p.category}</p>
                            <h3 class="project-title">${p.title}</h3>
                            <p class="project-description">${p.description}</p>
                            <span class="project-link-indicator">
                                <svg class="external-link-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V7h7V5H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-7h-2v7z"/>
                                </svg>
                                Xem sản phẩm
                            </span>
                        </div>
                    </div>
                </a>
            `).join('');
        }
    }

    // Update Contact
    if (data.contact) {
        const emailLink = document.querySelector('a[href^="mailto:"]');
        const phoneLink = document.querySelector('a[href^="tel:"]');
        const websiteLink = document.querySelector('.contact-info a[target="_blank"]');

        if (emailLink) {
            emailLink.href = `mailto:${data.contact.email}`;
            emailLink.textContent = data.contact.email;
        }
        if (phoneLink) {
            phoneLink.href = `tel:${data.contact.phone.replace(/\s/g, '')}`;
            phoneLink.textContent = data.contact.phone;
        }
        if (websiteLink) {
            websiteLink.href = data.contact.website;
            websiteLink.textContent = data.contact.website.replace(/^https?:\/\//, '');
        }
    }

    // Update Social Links
    if (data.social) {
        const socialMap = {
            facebook: 'a[href*="facebook.com"]',
            instagram: 'a[href*="instagram.com"]',
            telegram: 'a[href*="t.me"]',
            zalo: 'a[href*="zalo.me"]',
            linkedin: 'a[href*="linkedin.com"]',
            github: 'a[href*="github.com"]'
        };

        Object.entries(socialMap).forEach(([key, selector]) => {
            const link = document.querySelector(selector);
            if (link && data.social[key]) {
                link.href = data.social[key];
            }
        });
    }

    // Update About Me Extended
    if (data.about) {
        // Bio
        const bioIntro = document.getElementById('bio-intro');
        const bioDetail = document.getElementById('bio-detail');
        if (bioIntro) bioIntro.textContent = data.about.bioIntro;
        if (bioDetail) bioDetail.textContent = data.about.bioDetail;

        // Birthday & Age
        if (data.about.birthday) {
            const displayBirthday = document.getElementById('display-birthday');
            const displayAge = document.getElementById('display-age');

            if (displayBirthday) {
                const date = new Date(data.about.birthday);
                displayBirthday.textContent = date.toLocaleDateString('vi-VN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
            }
            if (displayAge && data.about.age) {
                displayAge.textContent = `${data.about.age} tuổi`;
            }
        }

        // Vision & Mission
        if (data.about.vision || data.about.mission) {
            const vmSection = document.getElementById('vision-mission-section');
            const displayVision = document.getElementById('display-vision');
            const displayMission = document.getElementById('display-mission');

            if (vmSection && (data.about.vision || data.about.mission)) {
                vmSection.style.display = 'grid';
                if (displayVision) displayVision.textContent = data.about.vision;
                if (displayMission) displayMission.textContent = data.about.mission;
            }
        }

        // Career Goals
        if (data.about.careerGoals) {
            const careerSection = document.getElementById('career-goals-section');
            const displayCareer = document.getElementById('display-career');

            if (careerSection && displayCareer) {
                careerSection.style.display = 'block';
                displayCareer.textContent = data.about.careerGoals;
            }
        }

        // Bio Highlights
        if (data.about.highlights && data.about.highlights.length >= 3) {
            for (let i = 1; i <= 3; i++) {
                const val = document.getElementById(`highlight-${i}-val`);
                const lbl = document.getElementById(`highlight-${i}-lbl`);
                if (val) val.textContent = data.about.highlights[i - 1].value;
                if (lbl) lbl.textContent = data.about.highlights[i - 1].label;
            }
        }
    }
}

function extractYouTubeId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=)([^&]+)/,
        /(?:youtu\.be\/)([^?]+)/,
        /(?:youtube\.com\/embed\/)([^?]+)/
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

// Load data when page is ready
document.addEventListener('DOMContentLoaded', loadPortfolioData);
