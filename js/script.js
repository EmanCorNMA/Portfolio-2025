// var controller = new ScrollMagic.Controller();

// $(function () {
//   //var tween = TweenMax.to(".block-list", 1, {className: "+=scrollend"});

//   var $block_list = $('.block-list'),
//     $block_item = $block_list.find('.block-list__item'),
//     block_list_width = $block_list.outerWidth(),
//     block_item_width = $block_item.outerWidth(),
//     total_width = block_item_width * $block_item.length,
//     travel_distance = total_width - block_list_width + 228;

//   var scene = new ScrollMagic.Scene({
//     triggerElement: "#second",
//     duration: '200%',
//     triggerHook: 0
//   })
//     .setPin('.block-list')
//     //.setTween(tween)
//     .addTo(controller);

//   scene.on('progress', function (e) {
//     var progress = e.progress,
//       move = -travel_distance * progress + "px";
//     $block_list.css({
//       transform: "translateX(" + move + ")"
//     });
//   });
// });










// LOAD PAGE TO LAST SECTION ON REFRESH + COMMENT OUT WHEN EDITING

// window.addEventListener('load', function () {
//   // Check if there's a section in the URL (for example, #section2)
//   const sectionId = localStorage.getItem('lastScrollPosition');

//   if (sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }
// });

// // Store the current section when the user scrolls
// window.addEventListener('scroll', function () {
//   const sections = document.querySelectorAll('section');
//   sections.forEach(section => {
//     const rect = section.getBoundingClientRect();
//     if (rect.top <= 0 && rect.bottom >= 0) {
//       localStorage.setItem('lastScrollPosition', section.id);
//     }
//   });
// });










// HERO IMAGE SCALE WIDTH ON SCROLL

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // Get scroll position
  const newWidth = 0 + scrollY * 0.11; // Scale width with scroll position
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

    const newWidth = 0 + scrollY * 0.095; // Scale width with scroll position
    div.style.width = `${Math.min(newWidth, 100)}%`; // Set a maximum width of 100%

  });
}

// Apply the multiple ID's
scaleDivOnScroll('scalable-div-2');
scaleDivOnScroll('scalable-div-3');






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





// // PADDING EXPANDS WHEN STICKY

// function expandDivOnScroll(id) {
//   document.addEventListener('DOMContentLoaded', function () {
//     const textBoxSticky = document.getElementById(id);
//     const expand = textBoxSticky.offsetTop - 16;

//     function expandTextBoxSticky() {
//       if (window.pageYOffset > expand) {
//         textBoxSticky.classList.add('expand');
//       } else {
//         textBoxSticky.classList.remove('expand');
//       }
//     }

//     window.onscroll = function () {
//       expandTextBoxSticky();
//     };
//   });
// }

// // Apply the scaling behavior to both divs
// expandDivOnScroll('scroll-expand-1');








window.onscroll = function () {
  var scrollPosition = window.scrollY;
  var scrollExpand = document.getElementById("scrollexpand");
  var viewportHeight = window.innerHeight;

  const stickyElement = document.querySelector('.expand-container');
  const stickyRect = stickyElement.getBoundingClientRect();
  const stickyY = stickyRect.top + window.scrollY;

  var offset = stickyY - (viewportHeight / 2.4);

  console.log(offset);

  if (scrollPosition > offset) {
    // Adjust the height based on scroll position with a scaling factor
    var scalingFactor = 1; // Change this to adjust the expansion speed
    var newHeight = 0 + (scrollPosition - offset) * scalingFactor;

    // Apply the new height
    scrollExpand.style.height = newHeight + 'px';

    // Optional: Cap the height to 50% of the viewport height (50vh)
    if (newHeight > viewportHeight * 0.5) {
      scrollExpand.style.height = (viewportHeight * 0.5) + 'px';
    }
  } else {
    // If scroll is less than offset, keep the height at the initial value
    scrollExpand.style.height = '0';
  }
};

