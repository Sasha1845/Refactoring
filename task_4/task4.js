class Shape {
  static total = 100;
  static size = 50;

  static fill() {
    Shape.total = 100;
  }

  draw() {
    const paintUsage = 10;

    if (Shape.total < paintUsage) {
      const shapeElement = document.createElement("div");
      shapeElement.classList.add("shape");
      shapeElement.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Білий колір
      shapeElement.style.width = `${Shape.size}px`;
      shapeElement.style.height = `${Shape.size}px`;
      document.getElementById("shapesContainer").appendChild(shapeElement);
      return;
    }

    Shape.total -= paintUsage;

    const shapeElement = document.createElement("div");
    shapeElement.classList.add("shape");
    shapeElement.style.backgroundColor = `rgba(255, 0, 0, ${
      Shape.total / 100
    })`; // Зміна насиченості червоного кольору
    shapeElement.style.width = `${Shape.size}px`;
    shapeElement.style.height = `${Shape.size}px`;

    document.getElementById("shapesContainer").appendChild(shapeElement);
  }
}

const drawButton = document.getElementById("drawButton");
const fillButton = document.getElementById("fillButton");

drawButton.addEventListener("click", () => {
  const shape = new Shape();
  shape.draw();
});

fillButton.addEventListener("click", () => {
  // статичний метод можна використовувати без створення обʼєкту
  Shape.fill();
});
