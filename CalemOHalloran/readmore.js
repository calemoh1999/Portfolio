function myFunction(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (moreText.style.maxHeight === "" || moreText.style.maxHeight === "0px") {
    // Expand the content
    btnText.innerHTML = "Read less"; 
    moreText.style.maxHeight = moreText.scrollHeight + "px";
  } else {
    // Collapse the content
    btnText.innerHTML = "Read more"; 
    moreText.style.maxHeight = "0";
  }
}

// Add an event listener to execute the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
  // Call the function for each read more button
  myFunction('dots1', 'more1', 'myBtn1');
  myFunction('dots2', 'more2', 'myBtn2');
  myFunction('dots3', 'more3', 'myBtn3');
});

  