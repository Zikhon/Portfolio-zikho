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

// contact-right vaidation
// Set Success Message
function setError(input, message) {
  const contactForm = input.parentElement;
  contactForm.classList.remove("success"); // Remove success class
  contactForm.classList.add("error"); // Add error class
  const errorText = contactForm.querySelector(".error-text");
  errorText.innerText = message;
}

function setSuccess(input) {
  const contactForm = input.parentElement;
  contactForm.classList.remove("error"); // Remove error class
  contactForm.classList.add("success"); // Add success class
  const errorText = contactForm.querySelector(".error-text");
  errorText.innerText = ""; // Clear error text
}

function validEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateForm() {
  const contactForm = document.getElementById("contactForm");

  const nameInput = contactForm.elements.name;
  const emailInput = contactForm.elements.email;
  const messageInput = contactForm.elements.message;

  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name cannot be blank");
    return false;
  } else {
    setSuccess(nameInput);
  }

  if (emailInput.value.trim() === "") {
    setError(emailInput, "Email cannot be blank");
    return false;
  } else if (!validEmail(emailInput.value.trim())) {
    setError(emailInput, "Email is not valid");
    return false;
  } else {
    setSuccess(emailInput);
  }

  if (messageInput.value.trim() === "") {
    setError(messageInput, "Message cannot be blank");
    return false;
  } else {
    setSuccess(messageInput);
  }

  return true;
}



