class Tab {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.tabs = [];
        this.tabButtonsContainer = this.createElement('div', 'tab-buttons');
        this.tabContentsContainer = this.createElement('div', 'tab-contents');
        
        this.container.appendChild(this.tabButtonsContainer);
        this.container.appendChild(this.tabContentsContainer);
    }

    // Utility function to create an element with class
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    addTab(title, content) {
        const tabButton = this.createElement('div', 'tab-button');
        tabButton.textContent = title;
        tabButton.onclick = () => this.switchTab(tabButton, tabContent);

        const tabContent = this.createElement('div', 'tab-content');
        tabContent.innerHTML = content;

        this.tabs.push({ tabButton, tabContent });
        
        this.tabButtonsContainer.appendChild(tabButton);
        this.tabContentsContainer.appendChild(tabContent);

        // Automatically switch to the first tab
        if (this.tabs.length === 1) {
            this.switchTab(tabButton, tabContent);
        }
    }

    switchTab(tabButton, tabContent) {
        // Reset the active class for all tabs
        this.tabs.forEach(tab => {
            tab.tabButton.classList.remove('active');
            tab.tabContent.classList.remove('active');
        });

        // Mark the clicked tab as active
        tabButton.classList.add('active');
        tabContent.classList.add('active');
    }
}

// Instantiate the Tab class for a container with the ID 'tabs-container'
const tabs = new Tab('tabs-container');

// Add new tabs with updated content
tabs.addTab('Home', '<h2>Welcome to the Home Tab</h2><p>This is the content of the home tab...</p>');
tabs.addTab('Services', '<h2>Our Services</h2><p>Details about the services we offer...</p>');
tabs.addTab('Contact', '<h2>Contact Us</h2><p>Get in touch with us through the contact page...</p>');
