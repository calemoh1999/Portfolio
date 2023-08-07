function myFunction(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.querySelector("." + btnId); // Use querySelector to select by class name
  
  if (dots.style.display === "none" || dots.style.display === "") {
    dots.style.display = "inline";
    btnText.textContent = "Read more"; // Use textContent instead of innerHTML for simple text changes
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Read less"; // Use textContent instead of innerHTML for simple text changes
    moreText.style.display = "inline";
  }
}

  
  document.addEventListener("DOMContentLoaded", function () {
    // Call the function for each read more button
    myFunction('dots1', 'more1', 'myBtn1');
    myFunction('dots2', 'more2', 'myBtn2');
    myFunction('dots3', 'more3', 'myBtn3');
  });
  