// Natural Gelato Learning App - Main Application

class GelatoApp {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.loadInitialContent();
    }

    setupLanguageToggle() {
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'zh' : 'en';
        const toggleButton = document.getElementById('language-toggle');
        if (toggleButton) {
            toggleButton.textContent = this.currentLanguage === 'en' ? '中文' : 'English';
        }
        this.loadContent();
    }

    loadInitialContent() {
        const content = document.getElementById('content');
        if (content) {
            content.innerHTML = `
                <div class="welcome-section">
                    <h2>Welcome to Natural Gelato Learning</h2>
                    <p>Learn to make delicious gelato with natural ingredients using simple kitchen tools!</p>
                    <div class="feature-grid">
                        <div class="feature-card">
                            <h3>Machine-Free Recipes</h3>
                            <p>No special equipment needed - just your kitchen basics</p>
                        </div>
                        <div class="feature-card">
                            <h3>Natural Ingredients</h3>
                            <p>Learn to use natural colorants and flavorings</p>
                        </div>
                        <div class="feature-card">
                            <h3>Step-by-Step Guides</h3>
                            <p>Interactive tutorials for every skill level</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    loadContent() {
        // This will be expanded as we implement more features
        this.loadInitialContent();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GelatoApp();
});