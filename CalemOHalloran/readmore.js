function myFunction(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (moreText.style.maxHeight === "0px" || moreText.style.maxHeight === "") {
    moreText.style.maxHeight = "1000px"; // Adjust the value as needed
    btnText.textContent = "Read less"; 
  } else {
    moreText.style.maxHeight = "0";
    btnText.textContent = "Read more"; 
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Call the function for each read more button
  myFunction('dots1', 'more1', 'myBtn1');
  myFunction('dots2', 'more2', 'myBtn2');
  myFunction('dots3', 'more3', 'myBtn3');
});
