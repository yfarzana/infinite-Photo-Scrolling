const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];

// Unsplash API
const count = 10;
const accessKey = 'F_0TiqCW1ssNaC0uibKcRz2H2LCkoZc43egp8vSIFM8';
const apiURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`;

// Helper Function for set Attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos() {
    photoArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });

        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        item.appendChild(img);
        imageContainer.appendChild(item);
    });

}

// Get photo 
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photoArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Error message here
    }
}

getPhotos();