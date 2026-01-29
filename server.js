// ===========================
// PORTFOLIO AUTO-SYNC SERVER
// ===========================
// Chạy: node server.js
// Server sẽ tự động cập nhật index.html khi bạn Save từ Admin panel

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'data.json');
const INDEX_FILE = path.join(__dirname, 'index.html');

// Default data structure
const defaultData = {
    logo: { main: 'PortFolio', accent: 'dex' },
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
        email: 'tranhai68.home@gmail.com',
        phone: '+84 868 258 686',
        website: 'https://tranhai68.github.io/profile/'
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
        productImages: [],
        youtubeUrl: '',
        videoIntro: './videos/introduction.mp4'
    },
    projects: [],
    about: {
        name: 'Trần Hải',
        birthday: '1997-12-25',
        age: 28,
        bioIntro: '',
        bioDetail: '',
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

// Load or create data file
function loadData() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        }
    } catch (e) {
        console.error('Error loading data:', e);
    }
    return defaultData;
}

// Save data to file
function saveDataToFile(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Generate index.html from data
function generateIndexHTML(data) {
    // Read current index.html as template
    let html = fs.readFileSync(INDEX_FILE, 'utf8');

    // Update Logo
    html = html.replace(
        /<div class="logo">.*?<span style="color: var\(--color-accent\);">.*?<\/span><\/div>/g,
        `<div class="logo">${data.logo.main}<span style="color: var(--color-accent);">${data.logo.accent}</span></div>`
    );

    // Update Hero Section
    html = html.replace(
        /<p class="hero-subtitle">.*?<\/p>/,
        `<p class="hero-subtitle">${escapeHtml(data.hero.subtitle)}</p>`
    );
    html = html.replace(
        /<h1 class="hero-title">.*?<\/h1>/s,
        `<h1 class="hero-title">${escapeHtml(data.hero.title1)}<br>${escapeHtml(data.hero.title2)}</h1>`
    );
    html = html.replace(
        /<p class="hero-description">.*?<\/p>/,
        `<p class="hero-description">${escapeHtml(data.hero.description)}</p>`
    );

    // Update Hero Stats
    if (data.stats && data.stats.length >= 3) {
        const statsHtml = data.stats.map(stat => `
                        <div class="stat">
                            <span class="stat-value">${escapeHtml(stat.value)}</span>
                            <span class="stat-label">${escapeHtml(stat.label)}</span>
                        </div>`).join('');
        html = html.replace(
            /<div class="hero-stats">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
            `<div class="hero-stats">${statsHtml}
                    </div>
                </div>
            </div>
        </div>
    </section>`
        );
    }

    // Update Contact Info
    html = html.replace(
        /<a href="mailto:.*?" class="contact-value">.*?<\/a>/,
        `<a href="mailto:${data.contact.email}" class="contact-value">${escapeHtml(data.contact.email)}</a>`
    );
    html = html.replace(
        /<a href="tel:.*?" class="contact-value">.*?<\/a>/,
        `<a href="tel:${data.contact.phone.replace(/\s/g, '')}" class="contact-value">${escapeHtml(data.contact.phone)}</a>`
    );

    // Update Website
    const websiteUrl = data.contact.website.startsWith('http') ? data.contact.website : `https://${data.contact.website}`;
    const websiteDisplay = data.contact.website.replace(/^https?:\/\//, '');
    html = html.replace(
        /<a href="https?:\/\/[^"]*" target="_blank" class="contact-value">[^<]*<\/a>(\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- Social Media Links -->)/,
        `<a href="${websiteUrl}" target="_blank" class="contact-value">${websiteDisplay}</a>$1`
    );

    // Update Social Links
    const socialMappings = {
        facebook: 'facebook',
        instagram: 'instagram',
        telegram: 't.me',
        zalo: 'zalo.me',
        linkedin: 'linkedin',
        github: 'github'
    };

    for (const [key, pattern] of Object.entries(socialMappings)) {
        if (data.social[key]) {
            const regex = new RegExp(`<a href="https?://[^"]*${pattern}[^"]*"`, 'g');
            html = html.replace(regex, `<a href="${data.social[key]}"`);
        }
    }

    // Update Bio
    if (data.about.bioIntro) {
        html = html.replace(
            /<p class="bio-intro" id="bio-intro">[\s\S]*?<\/p>/,
            `<p class="bio-intro" id="bio-intro">\n                        ${escapeHtml(data.about.bioIntro)}\n                    </p>`
        );
    }
    if (data.about.bioDetail) {
        html = html.replace(
            /<p class="bio-detail" id="bio-detail">[\s\S]*?<\/p>/,
            `<p class="bio-detail" id="bio-detail">\n                        ${escapeHtml(data.about.bioDetail)}\n                    </p>`
        );
    }

    // Update Projects
    if (data.projects && data.projects.length > 0) {
        const projectsHtml = data.projects.map(project => `
                    <!-- Project: ${escapeHtml(project.title)} -->
                    <a href="${project.link || '#'}" class="project-card project-link" target="_blank"
                        rel="noopener noreferrer">
                        <div class="project-card-inner">
                            <img src="${project.image}" alt="${escapeHtml(project.title)}" class="project-image">
                            <div class="project-info">
                                <p class="project-category">${escapeHtml(project.category)}</p>
                                <h3 class="project-title">${escapeHtml(project.title)}</h3>
                                <p class="project-description">${escapeHtml(project.description)}</p>
                                <span class="project-link-indicator">
                                    <svg class="external-link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V7h7V5H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-7h-2v7z" />
                                    </svg>
                                    Xem chi tiết
                                </span>
                            </div>
                        </div>
                    </a>`).join('\n');

        html = html.replace(
            /<div class="projects-scroll-wrapper">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- About Me Extended -->/,
            `<div class="projects-scroll-wrapper">${projectsHtml}
                </div>
            </div>
        </div>
    </section>

    <!-- About Me Extended -->`
        );
    }

    // Update Highlights
    if (data.about.highlights && data.about.highlights.length >= 3) {
        for (let i = 0; i < 3; i++) {
            const hl = data.about.highlights[i];
            html = html.replace(
                new RegExp(`<span class="highlight-number" id="highlight-${i + 1}-val">.*?</span>`),
                `<span class="highlight-number" id="highlight-${i + 1}-val">${escapeHtml(hl.value)}</span>`
            );
            html = html.replace(
                new RegExp(`<span class="highlight-text" id="highlight-${i + 1}-lbl">.*?</span>`),
                `<span class="highlight-text" id="highlight-${i + 1}-lbl">${escapeHtml(hl.label)}</span>`
            );
        }
    }

    return html;
}

// Escape HTML special characters
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Git auto-commit and push
function gitPush(message) {
    return new Promise((resolve, reject) => {
        exec(`git add . && git commit -m "${message}" && git push`, { cwd: __dirname }, (error, stdout, stderr) => {
            if (error) {
                console.log('Git push skipped or failed:', error.message);
                resolve(false);
            } else {
                console.log('✅ Git push successful');
                resolve(true);
            }
        });
    });
}

// CORS headers
function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Create HTTP server
const server = http.createServer(async (req, res) => {
    setCorsHeaders(res);

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);

    // API: Get current data
    if (url.pathname === '/api/data' && req.method === 'GET') {
        const data = loadData();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
        return;
    }

    // API: Save data and update index.html
    if (url.pathname === '/api/save' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                data.lastUpdated = new Date().toISOString();

                // Save to data.json
                saveDataToFile(data);
                console.log('📁 Data saved to data.json');

                // Update index.html
                const newHtml = generateIndexHTML(data);
                fs.writeFileSync(INDEX_FILE, newHtml, 'utf8');
                console.log('📄 index.html updated');

                // Auto git push (optional)
                const autoGit = url.searchParams.get('git') === 'true';
                let gitResult = false;
                if (autoGit) {
                    gitResult = await gitPush(`Auto-update: ${new Date().toLocaleString('vi-VN')}`);
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Changes saved and index.html updated!',
                    gitPushed: gitResult,
                    timestamp: data.lastUpdated
                }));
            } catch (e) {
                console.error('Error saving:', e);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: e.message }));
            }
        });
        return;
    }

    // API: Git push only
    if (url.pathname === '/api/git-push' && req.method === 'POST') {
        const result = await gitPush(`Manual push: ${new Date().toLocaleString('vi-VN')}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: result }));
        return;
    }

    // Serve static files
    let filePath = path.join(__dirname, url.pathname === '/' ? 'index.html' : url.pathname);

    // Security check
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    // Get file extension for content type
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.mp4': 'video/mp4',
        '.webm': 'video/webm'
    };

    try {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const content = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
            res.end(content);
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    } catch (e) {
        res.writeHead(500);
        res.end('Server Error');
    }
});

server.listen(PORT, () => {
    console.log('');
    console.log('🚀 ═══════════════════════════════════════════════════════');
    console.log('   PORTFOLIO AUTO-SYNC SERVER');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('');
    console.log(`   📍 Website:  http://localhost:${PORT}`);
    console.log(`   📍 Admin:    http://localhost:${PORT}/admin.html`);
    console.log('');
    console.log('   ✅ Khi bạn Save từ Admin, sẽ tự động:');
    console.log('      1. Lưu vào data.json');
    console.log('      2. Cập nhật index.html');
    console.log('      3. (Tùy chọn) Push lên GitHub');
    console.log('');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('   Nhấn Ctrl+C để dừng server');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('');
});
