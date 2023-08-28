/*Nav*/
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector(".nav-list");

    toggleButton.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  });

// tab
// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// for (var i = 0; i < tablinks.length; i++) {
//   tablinks[i].addEventListener("click", function(event) {
//     opentab(event.currentTarget.dataset.tabname);
//   });
// }

// function opentab(tabname) {
//   for (var i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active-link");
//   }
//   for (var i = 0; i < tabcontents.length; i++) {
//     tabcontents[i].classList.remove("active-tab");
//   }
//   Event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link"); // "event" should be changed to "e"
  document.getElementById(tabname).classList.add("active-tab");
}

