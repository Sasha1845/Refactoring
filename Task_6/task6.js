class Notification {
  create(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;

    const closeButton = document.createElement("button");
    closeButton.textContent = "✖";
    closeButton.className = "close-btn";
    closeButton.onclick = () => this.close(notification);

    notification.textContent = message;
    notification.appendChild(closeButton);

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      this.close(notification);
    }, 5000);
  }

  close(notification) {
    notification.classList.add("hide");
    setTimeout(() => notification.remove(), 300);
  }
}

const notification = new Notification();

document.getElementById("success-btn").onclick = () =>
  notification.create("Ви успішно зареєстровані.", "success");

document.getElementById("error-btn").onclick = () =>
  notification.create("Спробуйте будь ласка пізніше.", "error");
