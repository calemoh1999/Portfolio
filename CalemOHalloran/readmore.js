document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.querySelector(".read-more-link");
    const hiddenContent = document.querySelector(".hidden-content");
  
    // Function to toggle the visibility of the hidden content
    function toggleHiddenContent() {
      hiddenContent.classList.toggle("expanded");
      if (hiddenContent.classList.contains("expanded")) {
        readMoreLink.textContent = "Read Less";
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
      } else {
        readMoreLink.textContent = "Read More";
        hiddenContent.style.maxHeight = ""; // Remove the maxHeight property
      }
    }
  
    // Show "Read More" link if content exceeds initial height
    if (hiddenContent.scrollHeight > hiddenContent.clientHeight) {
      readMoreLink.style.display = "inline";
    }
  
    // Toggle content visibility when "Read More" link is clicked
    readMoreLink.addEventListener("click", function (event) {
      event.preventDefault();
      toggleHiddenContent();
    });
  });
  