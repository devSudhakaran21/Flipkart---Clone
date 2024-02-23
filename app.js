                    // row1***   slidePics    ***

// Array of img's to cycle through
const images = ['assets/slide/slide1.jpg', 'assets/slide/slide2.jpg', 'assets/slide/slide3.jpg', 'assets/img/slide4.jpg.webp'];

// Get the slide element
const slideImage = document.getElementById('slideImage');
// const dotsContainer = document.getElementById('dotsContainer');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');


let currentIndex = 0;

// function createDots() {
//   dotsContainer.innerHTML = '';
//   for (let i = 0; i < images.length; i++) {
//     const dot = document.createElement('span');
//     dot.classList.add('dot');
//     if (i === currentIndex) {
//       dot.classList.add('active');
//     }
//     dotsContainer.appendChild(dot);
//   }
// }


function changeImg() {
  // Set the current img
    slideImage.src = images[currentIndex];

      // Increment the index
  currentIndex = (currentIndex + 1) % images.length;

    // const dots = dotsContainer.querySelectorAll('.dot');

    // dots.forEach((dot, index) => {
      // dot.classList.toggle('active', index === currentIndex);
    };


    // for prev and next button

  // const dots = dotsContainer.querySelectorAll('.dot');
  // dots.forEach((dot, index) => {
  //   dot.classList.toggle('active', index === currentIndex);
  // });







// function showPreviousImage() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   changeImg();
// }

// function showNextImage() {
//   currentIndex = (currentIndex + 1) % images.length;
//   changeImg();
// }

// Call the changeText function every 1 second
// createDots();
changeImg();

// Add event listeners to the previous and next buttons
// prevButton.addEventListener('click', showPreviousImage);
// nextButton.addEventListener('click', showNextImage);


setInterval(changeImg, 3000);



