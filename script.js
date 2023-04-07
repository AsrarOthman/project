// Get the button----------------
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Wrap every letter in a span------------------
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
// tab function page 3----------------------
function myFunction1() {
  //CASE 1
  document.getElementById("tab1A").style.display = "block";
  document.getElementById("tab1B").style.display = "block";
  //CASE 2
  document.getElementById("tab2A").style.display = "none";
  document.getElementById("tab2B").style.display = "none";
  //CASE 3
  document.getElementById("tab3A").style.display = "none";
  document.getElementById("tab3B").style.display = "none";
  //CASE 4
  document.getElementById("tab4A").style.display = "none";
  document.getElementById("tab4B").style.display = "none";
}
function myFunction2() {
  //CASE 1
  document.getElementById("tab1A").style.display = "none";
  document.getElementById("tab1B").style.display = "none";
  //CASE 2
  document.getElementById("tab2A").style.display = "block";
  document.getElementById("tab2B").style.display = "block";
  //CASE 3
  document.getElementById("tab3A").style.display = "none";
  document.getElementById("tab3B").style.display = "none";
  //CASE 4
  document.getElementById("tab4A").style.display = "none";
  document.getElementById("tab4B").style.display = "none";
}
function myFunction3() {
  //CASE 1
  document.getElementById("tab1A").style.display = "none";
  document.getElementById("tab1B").style.display = "none";
  //CASE 2
  document.getElementById("tab2A").style.display = "none";
  document.getElementById("tab2B").style.display = "none";
  //CASE 3
  document.getElementById("tab3A").style.display = "block";
  document.getElementById("tab3B").style.display = "block";
  //CASE 4
  document.getElementById("tab4A").style.display = "none";
  document.getElementById("tab4B").style.display = "none";
}
function myFunction4() {
  //CASE 1
  document.getElementById("tab1A").style.display = "none";
  document.getElementById("tab1B").style.display = "none";
  //CASE 2
  document.getElementById("tab2A").style.display = "none";
  document.getElementById("tab2B").style.display = "none";
  //CASE 3
  document.getElementById("tab3A").style.display = "none";
  document.getElementById("tab3B").style.display = "none";
  //CASE 4
  document.getElementById("tab4A").style.display = "block";
  document.getElementById("tab4B").style.display = "block";
}
