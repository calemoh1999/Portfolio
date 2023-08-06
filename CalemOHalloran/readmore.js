document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.querySelector(".read-more-link");
    const content = document.querySelector(".content");
  
    readMoreLink.addEventListener("click", function (event) {
      event.preventDefault();
      content.classList.toggle("expanded");
      if (content.classList.contains("expanded")) {
        readMoreLink.textContent = "Read Less";
      } else {
        readMoreLink.textContent = "Read More";
      }
    });
  });
  