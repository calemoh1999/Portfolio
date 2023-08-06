document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.querySelector(".read-more-link");
    const content = document.querySelector(".content");
    const hiddenContent = document.querySelector(".hidden-content");
  
    readMoreLink.addEventListener("click", function (event) {
      event.preventDefault();
      content.classList.toggle("expanded");
  
      if (content.classList.contains("expanded")) {
        readMoreLink.textContent = "Read Less";
        content.style.maxHeight = hiddenContent.clientHeight + "px";
      } else {
        readMoreLink.textContent = "Read More";
        content.style.maxHeight = "200px"; // Adjust the height back to the original value
      }
    });
  
    // Set initial state based on whether content is taller than the max-height
    if (content.clientHeight > 200) {
      readMoreLink.style.display = "inline"; // Show "Read More" link if content exceeds max-height
      content.style.maxHeight = "200px"; // Hide additional content initially
    } else {
      readMoreLink.style.display = "none"; // Hide "Read More" link if content does not exceed max-height
    }
  });
  