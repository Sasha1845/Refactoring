class Shape {
  static total = 100;
  static size = 50;
  static paintUsage = 10;

  static fill() {
    Shape.total = 100;
    Shape.updateShapes();
  }

  static updateShapes() {
    document.querySelectorAll(".shape").forEach((shapeElement) => {
      shapeElement.style.backgroundColor = `rgba(255, 0, 0, ${
        Shape.total / 100
      })`;
    });
  }

  draw() {
    const shapeElement = document.createElement("div");
    shapeElement.classList.add("shape");
    shapeElement.style.width = `${Shape.size}px`;
    shapeElement.style.height = `${Shape.size}px`;

    if (Shape.total < Shape.paintUsage) {
      shapeElement.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
      Shape.total -= Shape.paintUsage;
      shapeElement.style.backgroundColor = `rgba(255, 0, 0, ${
        Shape.total / 100
      })`;
    }

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
  Shape.fill();
});
