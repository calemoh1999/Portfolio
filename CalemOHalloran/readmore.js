document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".read-more-link");
  
    // Function to toggle the visibility of the hidden content
    function toggleHiddenContent(event) {
      event.preventDefault();
      const skillText = event.target.parentNode;
      const content = skillText.querySelector(".content");
      const hiddenContent = skillText.querySelector(".hidden-content");
      hiddenContent.classList.toggle("expanded");
      if (hiddenContent.classList.contains("expanded")) {
        event.target.textContent = "Read Less";
        content.style.display = "none";
        hiddenContent.style.display = "block";
      } else {
        event.target.textContent = "Read More";
        content.style.display = "block";
        hiddenContent.style.display = "none";
      }
    }
  
    // Attach click event to all "Read More" links
    readMoreLinks.forEach(function (link) {
      link.addEventListener("click", toggleHiddenContent);
    });
  });
  