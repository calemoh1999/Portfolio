function myFunction(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none" || dots.style.display === "") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.maxHeight = "0"; // Set the max-height to 0 to hide the content
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.maxHeight = moreText.scrollHeight + "px"; // Set the max-height to the content's full height to reveal it
  }
}

  
  document.addEventListener("DOMContentLoaded", function () {
    // Call the function for each read more button
    myFunction('dots1', 'more1', 'myBtn1');
    myFunction('dots2', 'more2', 'myBtn2');
    myFunction('dots3', 'more3', 'myBtn3');
  });
  