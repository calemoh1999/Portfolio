document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.querySelector(".read-more-link");
    const hiddenContent = document.querySelector(".hidden-content");
    const content = document.querySelector(".content");
  
    readMoreLink.addEventListener("click", function (event) {
      event.preventDefault();
      hiddenContent.classList.toggle("expanded");
      if (hiddenContent.classList.contains("expanded")) {
        readMoreLink.textContent = "Read Less";
        content.style.maxHeight = "none";
      } else {
        readMoreLink.textContent = "Read More";
        content.style.maxHeight = "50px"; // Adjust the height back to the original value
      }
    });
  });
  