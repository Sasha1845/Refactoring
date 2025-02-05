const input = document.getElementById("json-input");
const button = document.getElementById("show-btn");
const message = document.getElementById("message");
const container = document.getElementById("images-container");
const modal = document.createElement("div");
modal.className = "modal hidden";
document.body.appendChild(modal);

button.addEventListener("click", () => {
  const data = input.value.trim();
  message.textContent = "";
  container.innerHTML = "";

  if (!data) {
    message.textContent = "Введіть JSON!";
    message.className = "error";
    return;
  }

  try {
    const imageUrls = JSON.parse(data);

    if (
      !Array.isArray(imageUrls) ||
      imageUrls.some((url) => typeof url !== "string")
    ) {
      throw new Error("Неправильний формат JSON");
    }

    message.textContent = "ЧУДОВО";
    message.className = "success";

    imageUrls.forEach((url) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = url;
      thumbnail.alt = "Image";
      thumbnail.className = "thumbnail";

      thumbnail.addEventListener("click", () => {
        modal.innerHTML = `<img src="${url}" alt="Full Size Image" class="full-size">`;
        modal.classList.remove("hidden");
      });

      container.appendChild(thumbnail);
    });
  } catch (error) {
    message.textContent = `Помилка: ${error.message}`;
    message.className = "error";
  }
});

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
