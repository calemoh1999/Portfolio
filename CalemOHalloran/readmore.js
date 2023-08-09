function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  var button = document.getElementById('myBtn' + contentId.substring(4));

  if (content.style.height === '' || content.style.height === '0px') {
    content.style.height = 'auto';
    button.textContent = 'Read less';
  } else {
    content.style.height = '0';
    button.textContent = 'Read more';
  }
}

// Call the function for each read more button
document.addEventListener("DOMContentLoaded", function () {
  toggleContent('more1');
  toggleContent('more2');
  toggleContent('more3');
});
