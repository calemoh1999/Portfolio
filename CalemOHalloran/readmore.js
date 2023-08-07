function toggleHiddenContent() {
    var content = document.querySelector('.content');
    var hiddenContent = document.querySelector('.hidden-content');
    var btnText = document.getElementById("readMoreBtn");
  
    if (content.style.maxHeight === "2.5em") {
      content.style.maxHeight = "none";
      hiddenContent.style.display = "none";
      btnText.innerHTML = "Read Less";
    } else {
      content.style.maxHeight = "2.5em";
      hiddenContent.style.display = "block";
      btnText.innerHTML = "Read More";
    }
  }
  