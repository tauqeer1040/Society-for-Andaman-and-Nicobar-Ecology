// POSSIBLE FIX, USE PUBLIC FOLDER INSTEAD OF IMAGES FOLDER

// const imageContainer = document.getElementById("gallery");

// // Your images folder path
// // const imagesFolderPath = "./images/";

// let imageFilenames = [];

// for(let i = 1; i <= 23; i++){
//     imageFilenames.push(`${i}.jpg`)
// }

// // Loop through image filenames and create <img> elements
// imageFilenames.forEach(filename => {
//     const img = document.createElement("img");
//     img.src = "/images/" + filename;
//     img.alt = filename;
//     img.classList.add("image");
//     img.setAttribute("data-filename", filename); // Store filename as a data attribute
//     imageContainer.appendChild(img);
// });



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1500,
      },
  });
  

  const imgElements = document.getElementsByTagName("img");
  const videoElements = document.getElementsByTagName("video");
  
  // Convert NodeList to an array using Array.from()
  const revealEl = Array.from(imgElements).concat(Array.from(videoElements));
  
  revealEl.forEach(element => {
    element.classList.add("reveal");
    element.classList.add(".data-scroll");
  });


// ScrollReveal({ duration: 900, reset: true }).reveal('.reveal', {distance: '20px'});

// const scroll = new LocomotiveScroll({
//   el: revealEl,
//   // smooth: true,
//   direction: "vertical"
// });