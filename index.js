function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.style.getPropertyValue('--background-color');

    if (currentTheme === '#f4f4f4') {
        root.style.setProperty('--background-color', '#333');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--link-color', '#66a3ff');
    } else {
        root.style.setProperty('--background-color', '#f4f4f4');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--link-color', '#0066cc');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");
    const closeBtn = document.getElementById("close-btn");

    // Adding event listener to each image for click
    document.querySelectorAll(".photo").forEach(function (photo) {
        photo.addEventListener("click", function () {
            const imgSrc = this.getAttribute("src");
            openLightbox(imgSrc);
        });
    });

    // Open lightbox with clicked image
    function openLightbox(imgSrc) {
        lightboxContent.src = imgSrc;
        lightbox.style.display = "flex";
    }

    // Close lightbox
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close lightbox on outside click
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Close lightbox with Esc key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
});
