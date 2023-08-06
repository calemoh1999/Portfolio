document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.querySelector(".read-more-link");
    const hiddenContent = document.querySelector(".hidden-content");
    const content = document.querySelector(".content");
    const initialHeight = 200; // Adjust the initial height as needed
  
    // Function to toggle the visibility of the hidden content
    function toggleHiddenContent() {
      hiddenContent.classList.toggle("expanded");
      if (hiddenContent.classList.contains("expanded")) {
        readMoreLink.textContent = "Read Less";
        content.style.maxHeight = hiddenContent.scrollHeight + "px";
      } else {
        readMoreLink.textContent = "Read More";
        content.style.maxHeight = initialHeight + "px";
      }
    }
  
    // Show/hide content based on the initial height
    content.style.maxHeight = initialHeight + "px";
  
    // Show "Read More" link if content exceeds initial height
    if (hiddenContent.scrollHeight > initialHeight) {
      readMoreLink.style.display = "inline";
    }
  
    // Toggle content visibility when "Read More" link is clicked
    readMoreLink.addEventListener("click", function (event) {
      event.preventDefault();
      toggleHiddenContent();
    });
  });
  