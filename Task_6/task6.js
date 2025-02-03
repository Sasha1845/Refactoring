class Notification {
    create(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const closeButton = document.createElement('button');
        closeButton.textContent = '✖';
        closeButton.className = 'close-btn';
        closeButton.onclick = () => this.close(notification);
        
        const textNode = document.createTextNode(message);
        notification.appendChild(textNode);
        notification.appendChild(closeButton);
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            this.close(notification);
        }, 5000);
    }

    close(notification) {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }
}

const notification = new Notification();

// Створення кнопок за допомогою JavaScript
const successButton = document.createElement('button');
successButton.textContent = 'Показати успіх';
successButton.onclick = () => notification.create('Ви успішно зареєстровані.', 'success');
document.body.appendChild(successButton);

const errorButton = document.createElement('button');
errorButton.textContent = 'Показати помилку';
errorButton.onclick = () => notification.create('Спробуйте будь ласка пізніше.', 'error');
document.body.appendChild(errorButton);
