// HERO IMAGE SCALE WIDTH ON SCROLL

// if (window.innerWidth > 767) {} 

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // Get scroll position
  const newWidth = 0 + scrollY * 0.1112; // Scale width with scroll position
  const div = document.getElementById('scalable-div');

  // Apply the new width to the div (up to a max value)
  div.style.width = `${Math.min(newWidth, 100)}%`; // Set a maximum width of 500px
});





// CONTENT IMAGE SCALE WIDTH ON SCROLL
function scaleDivOnScroll(id) {
  window.addEventListener('scroll', () => {
    const div = document.getElementById(id);
    const rect = div.getBoundingClientRect(); // Get the position of the element relative to the viewport


    // Calculate the scroll position based on the element's position
    const offset = 900; // Example offset value (can be positive or negative)
    const scrollY = Math.max(0, -rect.top + offset); // Ensure it doesn't go negative

    const newWidth = 0 + scrollY * 0.1112; // Scale width with scroll position
    div.style.width = `${Math.min(newWidth, 100)}%`; // Set a maximum width of 100%

  });
}

// Apply the multiple ID's
scaleDivOnScroll('scalable-div-1');
scaleDivOnScroll('scalable-div-2');







// FOR FULL WIDTH IMAGE
function fullScaleDivOnScroll(id) {
  window.addEventListener('scroll', () => {
    const div = document.getElementById(id);
    const rect = div.getBoundingClientRect(); // Get the position of the element relative to the viewport


    // Calculate the scroll position based on the element's position
    const offset = 900; // Example offset value (can be positive or negative)
    const scrollY = Math.max(0, -rect.top + offset); // Ensure it doesn't go negative

    const newWidth = 0 + scrollY * 0.111; // Scale width with scroll position
    div.style.width = `${Math.min(newWidth, 100)}%`; // Set a maximum width of 100%

  });
}

// Apply the multiple ID's
fullScaleDivOnScroll('full-scalable-div-1');







function scrollExpand(id) {
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var scrollExpand = document.getElementById(id);
    var viewportHeight = window.innerHeight;

    // Get the position of the scrollExpand element relative to the viewport
    const elementRect = scrollExpand.getBoundingClientRect();
    const elementTop = elementRect.top + window.scrollY;

    // Offset position relative to when to start expanding the element
    var offset = elementTop - (viewportHeight / 2.4);

    console.log(offset);

    if (scrollPosition > offset) {
      // Adjust the height based on scroll position with a scaling factor
      var scalingFactor = 1; // Change this to adjust the expansion speed
      var newHeight = 0 + (scrollPosition - offset) * scalingFactor;

      // Apply the new height
      scrollExpand.style.height = newHeight + 'px';

      // Optional: Cap the height to 50% of the viewport height (50vh)
      if (newHeight > viewportHeight * 0.3) {
        scrollExpand.style.height = (viewportHeight * 0.3) + 'px';
      }
    } else {
      // If scroll is less than offset, keep the height at the initial value
      scrollExpand.style.height = '0';
    }
  });
}

// Apply the multiple IDs
scrollExpand('scrollexpand-1');
scrollExpand('scrollexpand-2');



// SCROLL PAST HERO SECTION LOGO SHRINKS

// Function to change the state of the logo
function changeLogoState(isIntersecting) {
  const logo = document.querySelector('.logo-mark');
  if (isIntersecting) {
    logo.classList.remove('scrolled');
  } else {
    logo.classList.add('scrolled');
  }
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    changeLogoState(entry.isIntersecting);
  });
}, {
  threshold: 0.41 // Adjust the threshold as needed
});

// Observe the hero section
const heroSection = document.querySelector('.screen-fit-column');
console.log(heroSection);
observer.observe(heroSection);







// SCROLL DOWN WEBPAGE HEADER HIDES - SCROLL UP HEADER SHOWS

let lastScrollY = window.scrollY;
const header = document.querySelector('header'); // Adjust the selector to match your header element
let timeoutId;
let isHiding = false; // Flag to track if the header is scheduled to be hidden

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    if (!isHiding) {
      isHiding = true;
      timeoutId = setTimeout(() => {
        header.classList.add('hidden');
      }, 500); // Adjust the delay as needed (200ms in this example)
    }
  } else {
    // Scrolling up
    clearTimeout(timeoutId);
    header.classList.remove('hidden');
    isHiding = false; // Reset the flag
  }

  lastScrollY = currentScrollY;
});