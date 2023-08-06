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
  });
  