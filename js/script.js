// ===========================
// CS ROADMAP 2025 - MAIN SCRIPT
// ===========================

// Global Variables
let isScrolling = false;
let currentSection = 'overview';
let userData = {
    progress: {},
    completedTopics: [],
    bookmarks: [],
    preferences: {
        theme: 'light',
        notifications: true
    }
};

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadUserData();
    setupEventListeners();
    loadDynamicContent();
    hideLoadingScreen();
});

function initializeApp() {
    // Check for saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Initialize progress tracking
    updateProgressBar();
    
    // Set up intersection observers
    setupIntersectionObservers();
    
    // Initialize tooltips
    initializeTooltips();
}

function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1000);
}

// ===========================
// USER DATA MANAGEMENT
// ===========================

function loadUserData() {
    const savedData = localStorage.getItem('csRoadmapProgress');
    if (savedData) {
        userData = JSON.parse(savedData);
    }
}

function saveUserData() {
    localStorage.setItem('csRoadmapProgress', JSON.stringify(userData));
}

function markTopicComplete(topicId) {
    if (!userData.completedTopics.includes(topicId)) {
        userData.completedTopics.push(topicId);
        userData.progress[topicId] = 100;
        saveUserData();
        updateProgressBar();
        showNotification('Topic completed! 🎉', 'success');
    }
}

function updateProgressBar() {
    const totalTopics = 11; // Updated to 11 topics
    const completedTopics = userData.completedTopics.length;
    const progressPercentage = (completedTopics / totalTopics) * 100;
    
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
}

// ===========================
// NAVIGATION
// ===========================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const navHeight = document.getElementById('navbar').offsetHeight;
    const sectionTop = section.offsetTop - navHeight - 20;
    
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
    
    // Update active navigation
    updateActiveNavigation(sectionId);
    currentSection = sectionId;
    
    // Close mobile menu if open
    closeMobileNav();
}

function updateActiveNavigation(sectionId) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current section nav items
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
        if (item.onclick && item.onclick.toString().includes(sectionId)) {
            item.classList.add('active');
        }
    });
}

function toggleMobileNav() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const toggle = document.querySelector('.mobile-nav-toggle');
    
    if (mobileMenu && mobileOverlay) {
        mobileMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        toggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
}

function closeMobileNav() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const toggle = document.querySelector('.mobile-nav-toggle');
    
    if (mobileMenu && mobileOverlay) {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===========================
// SCROLL HANDLERS
// ===========================

function setupEventListeners() {
    // Scroll event for navbar and back to top
    window.addEventListener('scroll', throttle(handleScroll, 100));
    
    // Resize event
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

function handleScroll() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const scrollPosition = window.scrollY;
    
    // Navbar scroll effect
    if (navbar) {
        if (scrollPosition > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Back to top button
    if (backToTop) {
        if (scrollPosition > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // Update active section based on scroll
    updateActiveSection();
}

function updateActiveSection() {
    const sections = document.querySelectorAll('.section');
    const navHeight = document.getElementById('navbar').offsetHeight;
    const scrollPosition = window.scrollY + navHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (currentSection !== sectionId) {
                currentSection = sectionId;
                updateActiveNavigation(sectionId);
            }
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===========================
// DYNAMIC CONTENT LOADING
// ===========================

function loadDynamicContent() {
    loadLearningTopics();
    loadCareerPaths();
    loadResources();
}

function loadLearningTopics() {
    const container = document.getElementById('dynamicContent');
    if (!container || !window.roadmapData) return;
    
    const topics = window.roadmapData.topics;
    
    topics.forEach((topic, index) => {
        const topicHTML = createTopicSection(topic, index + 1);
        container.insertAdjacentHTML('beforeend', topicHTML);
    });
    
    // Re-initialize animations for new content
    setupIntersectionObservers();
}

function createTopicSection(topic, number) {
    return `
        <section class="section" id="${topic.id}">
            <div class="section-header">
                <div class="section-number">${number}</div>
                <div class="section-info">
                    <h2 class="section-title">${topic.title}</h2>
                    <p class="section-subtitle">${topic.subtitle}</p>
                </div>
            </div>
            
            <div class="cards-grid">
                ${topic.cards.map(card => createCard(card)).join('')}
            </div>
            
            ${topic.projects ? createProjectsSection(topic.projects) : ''}
            ${topic.resources ? createResourcesSection(topic.resources) : ''}
        </section>
    `;
}

function createCard(card) {
    return `
        <div class="card">
            <div class="card-header">
                <div class="card-icon">
                    <i class="${card.icon}"></i>
                </div>
                <h3>${card.title}</h3>
            </div>
            <div class="card-content">
                ${card.content}
            </div>
        </div>
    `;
}

function createProjectsSection(projects) {
    return `
        <div class="projects-box">
            <h3><i class="fas fa-rocket"></i> Practical Projects</h3>
            ${projects.map(project => `
                <div class="project-item">
                    <h4>${project.level}</h4>
                    <p>${project.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function createResourcesSection(resources) {
    return `
        <div class="resources-box">
            <h3><i class="fas fa-book-open"></i> Resources & Learning Materials</h3>
            <div class="resource-list">
                ${resources.map(resource => `
                    <a href="${resource.url}" target="_blank" class="resource-link">
                        <i class="${resource.icon}"></i> 
                        ${resource.title}
                        ${resource.description ? `<span class="resource-desc">- ${resource.description}</span>` : ''}
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

// ===========================
// CAREER PATHS
// ===========================

function loadCareerPaths() {
    const container = document.getElementById('careersGrid');
    if (!container || !window.roadmapData) return;
    
    const careers = window.roadmapData.careers;
    
    careers.forEach(career => {
        const careerCard = createCareerCard(career);
        container.insertAdjacentHTML('beforeend', careerCard);
    });
}

function createCareerCard(career) {
    return `
        <div class="career-card" data-category="${career.category}">
            <div class="career-icon">
                <i class="${career.icon}"></i>
            </div>
            <h3 class="career-title">${career.title}</h3>
            <p class="career-desc">${career.description}</p>
            
            <div class="career-requirements">
                <h4>CS Fundamentals Required</h4>
                <div class="requirement-percentage">${career.csRequired}</div>
                <p class="requirement-details">${career.requiredFromCS}</p>
            </div>
            
            <div class="career-requirements">
                <h4>Additional Skills Needed</h4>
                <p>${career.additionalSkills}</p>
            </div>
            
            <div class="tech-stack">
                ${career.technologies.slice(0, 6).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <a href="${career.roadmapLink}" target="_blank" class="career-link">
                View Complete Roadmap <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
}

function filterCareers(category) {
    const cards = document.querySelectorAll('.career-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(category)) {
            btn.classList.add('active');
        }
    });
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
}

// ===========================
// RESOURCES
// ===========================

function loadResources() {
    showResourceTab('books'); // Default tab
}

function showResourceTab(tabName) {
    const container = document.getElementById('resourcesContent');
    const buttons = document.querySelectorAll('.tab-btn');
    
    if (!container || !window.roadmapData) return;
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(tabName)) {
            btn.classList.add('active');
        }
    });
    
    // Load resources for the selected tab
    const resources = window.roadmapData.resources[tabName];
    if (resources) {
        container.innerHTML = createResourcesList(resources, tabName);
    }
}

function createResourcesList(resources, type) {
    return resources.map(category => `
        <div class="resource-category">
            <h3><i class="${category.icon}"></i> ${category.title}</h3>
            <div class="resource-list">
                ${category.items.map(item => createResourceItem(item, type)).join('')}
            </div>
        </div>
    `).join('');
}

function createResourceItem(item, type) {
    return `
        <div class="resource-item">
            <div class="resource-icon">
                <i class="${getResourceIcon(type)}"></i>
            </div>
            <div class="resource-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <div class="resource-meta">
                    ${item.author ? `<span><i class="fas fa-user"></i> ${item.author}</span>` : ''}
                    ${item.level ? `<span><i class="fas fa-signal"></i> ${item.level}</span>` : ''}
                    ${item.duration ? `<span><i class="fas fa-clock"></i> ${item.duration}</span>` : ''}
                    ${item.price ? `<span><i class="fas fa-tag"></i> ${item.price}</span>` : ''}
                    ${item.members ? `<span><i class="fas fa-users"></i> ${item.members}</span>` : ''}
                </div>
                <a href="${item.url}" target="_blank" class="resource-link">
                    ${type === 'books' ? 'View Book' : type === 'courses' ? 'View Course' : 'Visit'} 
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
}

function getResourceIcon(type) {
    const icons = {
        books: 'fas fa-book',
        courses: 'fas fa-video',
        practice: 'fas fa-code',
        communities: 'fas fa-users'
    };
    return icons[type] || 'fas fa-link';
}

// ===========================
// UTILITIES
// ===========================

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    return icons[type] || icons.info;
}

// ===========================
// INTERSECTION OBSERVERS
// ===========================

function setupIntersectionObservers() {
    // Fade in animation for sections
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.section').forEach(section => {
        fadeInObserver.observe(section);
    });
}

// ===========================
// KEYBOARD NAVIGATION
// ===========================

function handleKeyboardNavigation(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileNav();
    }
    
    // Arrow keys for section navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sections = Array.from(document.querySelectorAll('.section'));
        const currentIndex = sections.findIndex(s => s.id === currentSection);
        
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            scrollToSection(sections[currentIndex + 1].id);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            scrollToSection(sections[currentIndex - 1].id);
        }
    }
}

// ===========================
// TOOLTIPS
// ===========================

function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const text = e.target.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-popup';
    tooltip.textContent = text;
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    
    setTimeout(() => tooltip.classList.add('show'), 10);
}

function hideTooltip(e) {
    const tooltip = document.querySelector('.tooltip-popup');
    if (tooltip) {
        tooltip.classList.remove('show');
        setTimeout(() => tooltip.remove(), 300);
    }
}

// ===========================
// MISCELLANEOUS
// ===========================

function handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 1024) {
        closeMobileNav();
    }
}

function downloadRoadmap() {
    showNotification('Preparing CS Roadmap PDF...', 'info');
    
    setTimeout(() => {
        // Remove all notifications before printing
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        window.print();
        
        // Show success message after print dialog closes
        setTimeout(() => {
            showNotification('Use Print Dialog to save as PDF', 'success');
        }, 100);
    }, 500);
    
    // Alternative Method 2: Create downloadable HTML file
    // Uncomment below if you prefer downloadable HTML that opens in new tab
    /*
    setTimeout(() => {
        generateDownloadableHTML();
    }, 500);
    */
}

// ===========================
// THEME SWITCHER
// ===========================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    showNotification(`Switched to ${newTheme} mode`, 'info');
}

// ===========================
// NOTIFICATION STYLES
// ===========================

const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 1000;
        max-width: 350px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left: 4px solid #10b981;
        color: #10b981;
    }
    
    .notification-error {
        border-left: 4px solid #ef4444;
        color: #ef4444;
    }
    
    .notification-warning {
        border-left: 4px solid #f59e0b;
        color: #f59e0b;
    }
    
    .notification-info {
        border-left: 4px solid #3b82f6;
        color: #3b82f6;
    }
    
    .tooltip-popup {
        position: absolute;
        background: #1e293b;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        white-space: nowrap;
        opacity: 0;
        transform: translateY(4px);
        transition: all 0.2s ease;
        pointer-events: none;
        z-index: 1000;
    }
    
    .tooltip-popup.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .tooltip-popup::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #1e293b;
    }
`;

// Add notification styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Export functions for use in other modules
window.csRoadmap = {
    scrollToSection,
    toggleTheme,
    downloadRoadmap,
    markTopicComplete,
    filterCareers,
    showResourceTab
};

// ===========================
// PDF GENERATION HELPERS
// ===========================

function generateDownloadableHTML() {
    // Clone the current document
    const printWindow = window.open('', '_blank');
    
    // Create a complete HTML document for PDF
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CS Fundamentals Roadmap 2025 - PDF Version</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        ${getPrintStyles()}
    </style>
</head>
<body>
    <div class="pdf-container">
        ${generatePDFContent()}
    </div>
    <script>
        // Auto-trigger print dialog
        window.onload = function() {
            window.print();
        }
    </script>
</body>
</html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

function getPrintStyles() {
    return `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
            padding: 20px;
        }
        
        h1 {
            color: #3b82f6;
            margin-bottom: 10px;
            font-size: 36px;
            text-align: center;
        }
        
        h2 {
            color: #1e293b;
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 24px;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 5px;
        }
        
        h3 {
            color: #475569;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 18px;
        }
        
        h4 {
            color: #64748b;
            margin-top: 15px;
            margin-bottom: 8px;
            font-size: 16px;
        }
        
        ul, ol {
            margin-left: 30px;
            margin-bottom: 15px;
        }
        
        li {
            margin-bottom: 5px;
        }
        
        .section {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }
        
        .card {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            background: #f8fafc;
            page-break-inside: avoid;
        }
        
        .timeline-item {
            background: #f1f5f9;
            border-left: 3px solid #3b82f6;
            padding: 10px 15px;
            margin-bottom: 10px;
        }
        
        .tip-box {
            background: #dbeafe;
            border-left: 4px solid #3b82f6;
            padding: 10px;
            margin: 10px 0;
        }
        
        .warning-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 10px;
            margin: 10px 0;
        }
        
        .example-box {
            background: #d1fae5;
            border-left: 4px solid #10b981;
            padding: 10px;
            margin: 10px 0;
        }
        
        @media print {
            body {
                padding: 0;
            }
            
            .section {
                page-break-before: always;
            }
            
            .section:first-child {
                page-break-before: auto;
            }
        }
    `;
}

function generatePDFContent() {
    const topics = window.roadmapData.topics;
    const careers = window.roadmapData.careers;
    
    let content = `
        <h1>CS Fundamentals Roadmap 2025</h1>
        <p style="text-align: center; font-size: 18px; margin-bottom: 30px;">
            Complete guide to master computer science fundamentals in 12-14 months
        </p>
        
        <div class="section">
            <h2>Overview</h2>
            <p>This roadmap covers 11 essential computer science topics that form the foundation of software engineering. Follow this guide to build a strong foundation in CS fundamentals.</p>
            
            <h3>Timeline</h3>
            <ul>
                <li><strong>Phase 1 (Months 0-3):</strong> Programming, OOP, OOD</li>
                <li><strong>Phase 2 (Months 3-7):</strong> DS&A, Design Patterns, Software Engineering, Databases</li>
                <li><strong>Phase 3 (Months 8-10):</strong> Operating Systems, Networking, Architecture</li>
                <li><strong>Phase 4 (Months 11-14):</strong> Security Fundamentals, Specialization</li>
            </ul>
        </div>
    `;
    
    // Add each topic
    topics.forEach((topic, index) => {
        content += `
            <div class="section">
                <h2>${index + 1}. ${topic.title}</h2>
                <p><em>${topic.subtitle}</em></p>
                
                ${topic.cards.map(card => `
                    <div class="card">
                        <h3>${card.title}</h3>
                        ${card.content}
                    </div>
                `).join('')}
                
                ${topic.resources ? `
                    <h3>Resources</h3>
                    <ul>
                        ${topic.resources.map(resource => `
                            <li><strong>${resource.title}</strong> - ${resource.description}</li>
                        `).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    });
    
    // Add career paths summary
    content += `
        <div class="section">
            <h2>Career Paths</h2>
            <p>After mastering the fundamentals, you can specialize in:</p>
            <ul>
                ${careers.map(career => `
                    <li><strong>${career.title}</strong> - Requires ${career.csRequired} of CS fundamentals</li>
                `).join('')}
            </ul>
        </div>
    `;
    
    return content;
}