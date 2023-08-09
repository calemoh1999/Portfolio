function myFunction(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none" || dots.style.display === "") {
    dots.style.display = "inline";
    btnText.textContent = "Read more"; 
    moreText.style.maxHeight = "0";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Read less"; 
    moreText.style.maxHeight = "1000px"; // Set an appropriate max height value
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Call the function for each read more button
  myFunction('dots1', 'more1', 'myBtn1');
  myFunction('dots2', 'more2', 'myBtn2');
  myFunction('dots3', 'more3', 'myBtn3');
});
