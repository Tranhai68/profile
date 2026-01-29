// ===========================
// ADMIN PANEL JAVASCRIPT
// ===========================

// Data Store
let siteData = {
    logo: { main: 'Folio', accent: 'dex' },
    hero: {
        subtitle: "Hi ! i'm Trần Hải",
        title1: 'Business Grouwth',
        title2: 'Manager',
        description: '"Growth isn\'t a matter of luck — it\'s a formula. I help businesses implement it through strategy and data."'
    },
    stats: [
        { value: '10+', label: 'Years Experience' },
        { value: '100+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction' }
    ],
    contact: {
        email: 'your.email@example.com',
        phone: '+84 123 456 789',
        website: 'https://yourwebsite.com'
    },
    social: {
        facebook: 'https://facebook.com/yourprofile',
        instagram: 'https://instagram.com/yourprofile',
        telegram: 'https://t.me/yourprofile',
        zalo: 'https://zalo.me/yourphone',
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/yourprofile'
    },
    media: {
        heroImage: './images/hero-banner.png',
        profileImage: './images/profile.jpg',
        personalPhoto: './images/personal-photo.jpg',
        productImages: [
            './images/product-1.jpg',
            './images/product-2.jpg',
            './images/product-3.jpg',
            './images/product-4.jpg',
            './images/product-5.jpg'
        ],
        youtubeUrl: '',
        videoIntro: './videos/introduction.mp4'
    },
    projects: [
        {
            title: 'Brand Evolution',
            category: 'Strategy & Planning',
            description: 'Complete brand redesign for a fintech startup',
            image: './images/project-1.jpg',
            link: 'https://drive.google.com/your-project-1'
        },
        {
            title: 'Digital Commerce',
            category: 'Design & Development',
            description: 'E-commerce platform with seamless UX',
            image: './images/project-2.jpg',
            link: 'https://docs.google.com/spreadsheets/your-project-2'
        },
        {
            title: 'Luxury Appeal',
            category: 'Fashion & Branding',
            description: 'High-end fashion brand identity',
            image: './images/project-3.jpg',
            link: 'https://www.behance.net/your-project-3'
        },
        {
            title: 'Art Direction',
            category: 'Creative Support',
            description: 'Campaign visuals for global agency',
            image: './images/project-4.jpg',
            link: 'https://drive.google.com/your-project-4'
        },
        {
            title: 'App Experience',
            category: 'Mobile App Design',
            description: 'User-centered mobile application design',
            image: './images/project-5.jpg',
            link: 'https://drive.google.com/your-project-5'
        }
    ],
    about: {
        name: 'Trần Hải',
        birthday: '',
        age: 0,
        bioIntro: 'Xin chào! Tôi là một nhà thiết kế sáng tạo với niềm đam mê biến ý tưởng thành hiện thực. Với hơn nhiều năm kinh nghiệm trong lĩnh vực thiết kế, tôi đã có cơ hội làm việc với nhiều dự án đa dạng từ branding đến UI/UX.',
        bioDetail: 'Tôi tin rằng thiết kế tốt không chỉ đẹp mắt mà còn phải giải quyết được vấn đề thực tế. Mỗi dự án tôi thực hiện đều được đầu tư tâm huyết để mang lại giá trị tốt nhất.',
        vision: '',
        mission: '',
        careerGoals: '',
        highlights: [
            { value: '5+', label: 'Năm Kinh Nghiệm' },
            { value: '50+', label: 'Dự Án Hoàn Thành' },
            { value: '100%', label: 'Hài Lòng' }
        ]
    },
    lastUpdated: null
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initTabs();
    initEventListeners();
    updateDashboard();
    populateForm();
    renderProjects();
    renderProductGallery();
});

// ===========================
// DATA MANAGEMENT
// ===========================

function loadData() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
        try {
            siteData = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading data:', e);
        }
    }
}

function saveData() {
    siteData.lastUpdated = new Date().toISOString();
    localStorage.setItem('portfolioData', JSON.stringify(siteData));

    // Try to save to local server (auto-sync to index.html)
    saveToServer();

    showToast('Changes saved successfully!');
    updateDashboard();
}

// Save to local server for auto-sync
async function saveToServer(autoGit = false) {
    try {
        const response = await fetch(`http://localhost:3001/api/save?git=${autoGit}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(siteData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Server sync:', result.message);
            if (result.gitPushed) {
                showToast('Changes saved & pushed to GitHub!');
            }
            return true;
        }
    } catch (e) {
        console.log('ℹ️ Local server not running. Changes saved to localStorage only.');
        console.log('   Run "node server.js" to enable auto-sync to index.html');
    }
    return false;
}

// Save and push to GitHub
async function saveAndPush() {
    collectFormData();
    siteData.lastUpdated = new Date().toISOString();
    localStorage.setItem('portfolioData', JSON.stringify(siteData));

    const success = await saveToServer(true);
    if (success) {
        showToast('✅ Saved & pushed to GitHub!');
    } else {
        showToast('⚠️ Saved locally. Start server for GitHub push.');
    }
    updateDashboard();
}

// ===========================
// TAB NAVIGATION
// ===========================

function initTabs() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.dataset.tab;
            switchTab(tab);
        });
    });
}

function switchTab(tabName) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tabName);
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `${tabName}-tab`);
    });

    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        media: 'Media Management',
        navigation: 'Navigation & Content',
        projects: 'Project Management',
        about: 'About Me'
    };
    document.querySelector('.page-title').textContent = titles[tabName] || 'Dashboard';
}

// ===========================
// EVENT LISTENERS
// ===========================

function initEventListeners() {
    // Save All Button
    document.getElementById('saveAllBtn').addEventListener('click', saveAllChanges);

    // Image Upload Handlers
    setupImageUpload('hero-upload', 'hero-preview', 'heroImage');
    setupImageUpload('profile-upload', 'profile-preview', 'profileImage');
    setupImageUpload('personal-upload', 'personal-preview', 'personalPhoto');

    // URL Input Handlers
    setupUrlInput('hero-url', 'hero-preview', 'heroImage');
    setupUrlInput('profile-url', 'profile-preview', 'profileImage');
    setupUrlInput('personal-url', 'personal-preview', 'personalPhoto');

    // Birthday auto-calculate age
    document.getElementById('about-birthday').addEventListener('change', calculateAge);

    // Project image upload
    document.getElementById('project-image-upload').addEventListener('change', handleProjectImageUpload);
}

function setupImageUpload(inputId, previewId, dataKey) {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    document.getElementById(previewId).src = event.target.result;
                    siteData.media[dataKey] = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

function setupUrlInput(inputId, previewId, dataKey) {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener('blur', () => {
            const url = input.value.trim();
            if (url) {
                document.getElementById(previewId).src = url;
                siteData.media[dataKey] = url;
            }
        });
    }
}

// ===========================
// FORM POPULATION
// ===========================

function populateForm() {
    // Logo
    document.getElementById('logo-main').value = siteData.logo.main;
    document.getElementById('logo-accent').value = siteData.logo.accent;

    // Hero
    document.getElementById('hero-subtitle').value = siteData.hero.subtitle;
    document.getElementById('hero-title-1').value = siteData.hero.title1;
    document.getElementById('hero-title-2').value = siteData.hero.title2;
    document.getElementById('hero-description').value = siteData.hero.description;

    // Stats
    siteData.stats.forEach((stat, i) => {
        document.getElementById(`stat-${i + 1}-value`).value = stat.value;
        document.getElementById(`stat-${i + 1}-label`).value = stat.label;
    });

    // Contact
    document.getElementById('contact-email').value = siteData.contact.email;
    document.getElementById('contact-phone').value = siteData.contact.phone;
    document.getElementById('contact-website').value = siteData.contact.website;

    // Social
    document.getElementById('social-facebook').value = siteData.social.facebook;
    document.getElementById('social-instagram').value = siteData.social.instagram;
    document.getElementById('social-telegram').value = siteData.social.telegram;
    document.getElementById('social-zalo').value = siteData.social.zalo;
    document.getElementById('social-linkedin').value = siteData.social.linkedin;
    document.getElementById('social-github').value = siteData.social.github;

    // Media previews
    document.getElementById('hero-preview').src = siteData.media.heroImage;
    document.getElementById('profile-preview').src = siteData.media.profileImage;
    document.getElementById('personal-preview').src = siteData.media.personalPhoto;

    // YouTube
    if (siteData.media.youtubeUrl) {
        document.getElementById('youtube-url').value = siteData.media.youtubeUrl;
    }

    // About
    document.getElementById('about-name').value = siteData.about.name;
    if (siteData.about.birthday) {
        document.getElementById('about-birthday').value = siteData.about.birthday;
        calculateAge();
    }
    document.getElementById('about-bio-intro').value = siteData.about.bioIntro;
    document.getElementById('about-bio-detail').value = siteData.about.bioDetail;
    document.getElementById('about-vision').value = siteData.about.vision || '';
    document.getElementById('about-mission').value = siteData.about.mission || '';
    document.getElementById('about-career').value = siteData.about.careerGoals || '';

    // Highlights
    siteData.about.highlights.forEach((hl, i) => {
        document.getElementById(`highlight-${i + 1}-value`).value = hl.value;
        document.getElementById(`highlight-${i + 1}-label`).value = hl.label;
    });
}

// ===========================
// COLLECT FORM DATA
// ===========================

function collectFormData() {
    // Logo
    siteData.logo.main = document.getElementById('logo-main').value;
    siteData.logo.accent = document.getElementById('logo-accent').value;

    // Hero
    siteData.hero.subtitle = document.getElementById('hero-subtitle').value;
    siteData.hero.title1 = document.getElementById('hero-title-1').value;
    siteData.hero.title2 = document.getElementById('hero-title-2').value;
    siteData.hero.description = document.getElementById('hero-description').value;

    // Stats
    for (let i = 0; i < 3; i++) {
        siteData.stats[i] = {
            value: document.getElementById(`stat-${i + 1}-value`).value,
            label: document.getElementById(`stat-${i + 1}-label`).value
        };
    }

    // Contact
    siteData.contact.email = document.getElementById('contact-email').value;
    siteData.contact.phone = document.getElementById('contact-phone').value;
    siteData.contact.website = document.getElementById('contact-website').value;

    // Social
    siteData.social.facebook = document.getElementById('social-facebook').value;
    siteData.social.instagram = document.getElementById('social-instagram').value;
    siteData.social.telegram = document.getElementById('social-telegram').value;
    siteData.social.zalo = document.getElementById('social-zalo').value;
    siteData.social.linkedin = document.getElementById('social-linkedin').value;
    siteData.social.github = document.getElementById('social-github').value;

    // YouTube
    siteData.media.youtubeUrl = document.getElementById('youtube-url').value;

    // About
    siteData.about.name = document.getElementById('about-name').value;
    siteData.about.birthday = document.getElementById('about-birthday').value;
    siteData.about.bioIntro = document.getElementById('about-bio-intro').value;
    siteData.about.bioDetail = document.getElementById('about-bio-detail').value;
    siteData.about.vision = document.getElementById('about-vision').value;
    siteData.about.mission = document.getElementById('about-mission').value;
    siteData.about.careerGoals = document.getElementById('about-career').value;

    // Highlights
    for (let i = 0; i < 3; i++) {
        siteData.about.highlights[i] = {
            value: document.getElementById(`highlight-${i + 1}-value`).value,
            label: document.getElementById(`highlight-${i + 1}-label`).value
        };
    }
}

function saveAllChanges() {
    collectFormData();
    saveData();
}

// ===========================
// DASHBOARD
// ===========================

function updateDashboard() {
    document.getElementById('media-count').textContent =
        siteData.media.productImages.length + 3; // +3 for hero, profile, personal
    document.getElementById('project-count').textContent = siteData.projects.length;
    document.getElementById('video-count').textContent =
        (siteData.media.youtubeUrl ? 1 : 0) + (siteData.media.videoIntro ? 1 : 0);

    if (siteData.lastUpdated) {
        const date = new Date(siteData.lastUpdated);
        document.getElementById('last-updated').textContent =
            date.toLocaleDateString('vi-VN') + ' ' + date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    }
}

// ===========================
// PRODUCT GALLERY
// ===========================

function renderProductGallery() {
    const gallery = document.getElementById('product-gallery');
    gallery.innerHTML = siteData.media.productImages.map((img, index) => `
        <div class="product-item">
            <img src="${img}" alt="Product ${index + 1}">
            <button class="delete-btn" onclick="deleteProductImage(${index})">✕</button>
        </div>
    `).join('');
}

function addProductImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                siteData.media.productImages.push(event.target.result);
                renderProductGallery();
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function deleteProductImage(index) {
    if (confirm('Delete this image?')) {
        siteData.media.productImages.splice(index, 1);
        renderProductGallery();
    }
}

// ===========================
// YOUTUBE PREVIEW
// ===========================

function previewYouTube() {
    const url = document.getElementById('youtube-url').value;
    const preview = document.getElementById('youtube-preview');

    const videoId = extractYouTubeId(url);
    if (videoId) {
        preview.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
        siteData.media.youtubeUrl = url;
    } else {
        preview.innerHTML = '<p>Invalid YouTube URL</p>';
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

// ===========================
// PROJECTS CRUD
// ===========================

function renderProjects() {
    const list = document.getElementById('projects-list');
    list.innerHTML = siteData.projects.map((project, index) => `
        <div class="project-item">
            <div class="project-thumb">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-details">
                <h4>${project.title}</h4>
                <p class="category">${project.category}</p>
                <p class="description">${project.description}</p>
            </div>
            <div class="project-actions">
                <button class="edit-btn" onclick="editProject(${index})">✏️ Edit</button>
                <button class="delete-btn" onclick="deleteProject(${index})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

function openProjectModal(index = -1) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const editIndex = document.getElementById('project-edit-index');

    if (index >= 0) {
        // Edit mode
        title.textContent = 'Edit Project';
        editIndex.value = index;
        const project = siteData.projects[index];
        document.getElementById('project-title').value = project.title;
        document.getElementById('project-category').value = project.category;
        document.getElementById('project-description').value = project.description;
        document.getElementById('project-link').value = project.link;
        document.getElementById('project-image-url').value = project.image.startsWith('data:') ? '' : project.image;
        document.getElementById('project-image-preview').innerHTML = `<img src="${project.image}" alt="Preview">`;
    } else {
        // Add mode
        title.textContent = 'Add New Project';
        editIndex.value = -1;
        document.getElementById('project-title').value = '';
        document.getElementById('project-category').value = '';
        document.getElementById('project-description').value = '';
        document.getElementById('project-link').value = '';
        document.getElementById('project-image-url').value = '';
        document.getElementById('project-image-preview').innerHTML = '';
    }

    modal.classList.add('active');
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.getElementById('project-image-upload').value = '';
}

function editProject(index) {
    openProjectModal(index);
}

function deleteProject(index) {
    if (confirm('Are you sure you want to delete this project?')) {
        siteData.projects.splice(index, 1);
        renderProjects();
        saveData();
    }
}

let currentProjectImage = '';

function handleProjectImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            currentProjectImage = event.target.result;
            document.getElementById('project-image-preview').innerHTML =
                `<img src="${event.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
}

function saveProject() {
    const editIndex = parseInt(document.getElementById('project-edit-index').value);
    const imageUrl = document.getElementById('project-image-url').value;

    const project = {
        title: document.getElementById('project-title').value,
        category: document.getElementById('project-category').value,
        description: document.getElementById('project-description').value,
        link: document.getElementById('project-link').value,
        image: currentProjectImage || imageUrl || './images/project-placeholder.jpg'
    };

    if (editIndex >= 0) {
        // Keep existing image if no new one provided
        if (!currentProjectImage && !imageUrl) {
            project.image = siteData.projects[editIndex].image;
        }
        siteData.projects[editIndex] = project;
    } else {
        siteData.projects.push(project);
    }

    currentProjectImage = '';
    closeProjectModal();
    renderProjects();
    saveData();
}

// ===========================
// ABOUT ME - AGE CALCULATION
// ===========================

function calculateAge() {
    const birthdayInput = document.getElementById('about-birthday').value;
    if (birthdayInput) {
        const birthday = new Date(birthdayInput);
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const monthDiff = today.getMonth() - birthday.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        siteData.about.age = age;
        document.getElementById('about-age').value = age + ' tuổi';
    }
}

// ===========================
// TOAST NOTIFICATION
// ===========================

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Make switchTab globally accessible
window.switchTab = switchTab;
