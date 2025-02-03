class Slider {
    constructor(containerId, orientation = 'horizontal') {
        this.container = document.getElementById(containerId);
        this.orientation = orientation;
        this.sliderTrack = document.createElement('div');
        this.sliderTrack.classList.add('slider-track');
        
        if (this.orientation === 'vertical') {
            this.sliderTrack.classList.add('vertical');
        }
        
        this.container.appendChild(this.sliderTrack);
        this.slides = [];
        this.currentIndex = 0;

        this.createButtons();
    }

    addSlide(content) {
        const slide = document.createElement('div');
        slide.classList.add('slider-item');
        slide.innerHTML = content;
        this.sliderTrack.appendChild(slide);
        this.slides.push(slide);
    }

    nextSlide() {
        if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
            this.updateSliderPosition();
        }
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSliderPosition();
        }
    }

    updateSliderPosition() {
        const offset = -this.currentIndex * 100;
        
        if (this.orientation === 'horizontal') {
            this.sliderTrack.style.transform = `translateX(${offset}%)`;
        } else {
            this.sliderTrack.style.transform = `translateY(${offset}%)`;
        }
    }

    toggleOrientation() {
        this.orientation = this.orientation === 'horizontal' ? 'vertical' : 'horizontal';
        this.sliderTrack.classList.toggle('vertical');
        this.updateSliderPosition();
    }

    createButtons() {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('slider-buttons');

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Попередній';
        prevButton.onclick = () => this.prevSlide();

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Наступний';
        nextButton.onclick = () => this.nextSlide();

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Змінити орієнтацію';
        toggleButton.onclick = () => this.toggleOrientation();

        buttonContainer.append(prevButton, nextButton, toggleButton);
        this.container.parentNode.insertBefore(buttonContainer, this.container.nextSibling);
    }
}

const slider = new Slider('slider-container', 'horizontal');

slider.addSlide('<img src="./360_F_550334715_0d2cdaljV4Xd3x7yVUhRxfmLLEUyMdXr.jpg" alt="1">');
slider.addSlide('<img src="./452.jpg" alt="2">');
slider.addSlide('<img src="./ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg" alt="6">');
