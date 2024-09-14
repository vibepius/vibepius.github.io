document.addEventListener("DOMContentLoaded", () => {
            const images = document.querySelectorAll("img");

            function loadRandomImages() {
                images.forEach((image) => {
                    fetch("https://dog.ceo/api/breeds/image/random")
                    .then(response => response.json())
                    .then(data => {
                        image.src = data.message;
                    });
                });
            }

            // Load random images initially
            loadRandomImages();

            // Set interval to load new random images every 3 seconds
            setInterval(loadRandomImages, 3000);
        });
