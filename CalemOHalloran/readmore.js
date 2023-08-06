document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".read-more-link");
    const readLessLinks = document.querySelectorAll(".read-less-link");
    const skillTexts = document.querySelectorAll(".skill-text");

    readMoreLinks.forEach((readMoreLink, index) => {
        readMoreLink.addEventListener("click", function (event) {
            event.preventDefault();
            skillTexts[index].classList.add("expanded");
            readMoreLink.style.display = "none";
            readLessLinks[index].style.display = "inline";
        });

        readLessLinks[index].addEventListener("click", function (event) {
            event.preventDefault();
            skillTexts[index].classList.remove("expanded");
            readMoreLink.style.display = "inline";
            readLessLinks[index].style.display = "none";
        });
    });
});
