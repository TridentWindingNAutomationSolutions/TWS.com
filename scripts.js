// Get main image and all thumbnails
const largeImage = document.getElementById('largeImage');
const thumbnails = document.querySelectorAll('.thumbnail');

// Add click listener to each thumbnail
thumbnails.forEach(function (thumb) {
  thumb.addEventListener('click', function () {
    // Change main image source based on data-large attribute
    const largeSrc = this.getAttribute('data-large');
    largeImage.src = largeSrc;

    // Optional: highlight active thumbnail
    thumbnails.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});
