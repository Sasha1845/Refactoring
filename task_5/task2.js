const input = document.getElementById('json-input');
const button = document.getElementById('show-btn');
const message = document.getElementById('message');
const container = document.getElementById('images-container');
let enlargedImage = null;

button.addEventListener('click', () => {
    const data = input.value.trim();
    message.textContent = '';
    container.innerHTML = '';

    try {
        const imageUrls = JSON.parse(data);

        if (!Array.isArray(imageUrls) || imageUrls.some(url => typeof url !== 'string')) {
            throw new Error();
        }

        message.textContent = 'ЧУДОВО';
        message.className = 'success';

        imageUrls.forEach(url => {
            const thumbnail = document.createElement('img');
            thumbnail.src = url;
            thumbnail.alt = 'Image';
            thumbnail.className = 'thumbnail';

            thumbnail.addEventListener('click', () => {
                enlargedImage?.remove();
                enlargedImage = document.createElement('img');
                enlargedImage.src = url;
                enlargedImage.alt = 'Full Size Image';
                enlargedImage.className = 'full-size';
                document.body.appendChild(enlargedImage);

                enlargedImage.addEventListener('click', () => {
                    enlargedImage.remove();
                    enlargedImage = null;
                });
            });

            container.appendChild(thumbnail);
        });
    } catch {
        message.textContent = 'Invalid JSON format';
        message.className = 'error';
    }
});
