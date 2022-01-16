const images = ["revue1.png", "revue2.png", "revue3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `../images/${chosenImage}`;

document.body.appendChild(bgImages);