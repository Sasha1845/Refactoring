class GeolocationTracker {
  constructor(locationElementId) {
    this.locationElement = document.getElementById(locationElementId);
    this.watchId = null;
    this.init();
  }

  init() {
    if ("geolocation" in navigator) {
      this.locationElement.textContent = "Requesting location permission...";
      this.watchId = navigator.geolocation.watchPosition(
        (position) => this.updateLocation(position.coords),
        (error) => this.handleError(error),
        { enableHighAccuracy: true }
      );
    } else {
      this.showMessage("Geolocation is not supported by your browser.");
    }
  }

  updateLocation(coords) {
    const { latitude, longitude } = coords;
    this.locationElement.textContent = `Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
    sessionStorage.setItem("lastLocation", JSON.stringify({ latitude, longitude }));
  }

  handleError(error) {
    let message;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "Geolocation permission denied.";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "Position unavailable.";
        break;
      case error.TIMEOUT:
        message = "Geolocation request timed out.";
        break;
      default:
        message = "An unknown error occurred.";
    }
    this.showMessage(message);
  }

  showMessage(message) {
    this.locationElement.textContent = message;
  }
}

// Ініціалізація геолокаційного трекера
document.addEventListener("DOMContentLoaded", () => {
  new GeolocationTracker("location");
});
