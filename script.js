document.querySelector('.btn').onclick = function (e) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.btn');
    

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

