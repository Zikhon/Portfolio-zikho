/*Nav*/
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector(".nav-list");

    toggleButton.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  });

// tablinks
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

// form vaidation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  var nameField = document.getElementById("Name");
  var emailField = document.getElementById("email");
  var messageField = document.getElementById("Message");

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (nameField.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    event.preventDefault();
  }

  if (emailField.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    event.preventDefault();
  }

  if (messageField.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    event.preventDefault();
  }
});


