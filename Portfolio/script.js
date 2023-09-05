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


// VALIDATIONS

// Send email
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

  // serviceID - tempateID - #form - publicKey
  emailjs.sendForm('service_q4xlmta','template_8uaa6es','#contact-form','6jwNjtbKASDAEivwJ')
  .then((result) =>{
    contactMessage.textContent = 'Message sent successfully'

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)
    contactForm.reset()

  }, ()=> {
    contactMessage.textContent = 'Error sending message'
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)
  })
}
contactForm.addEventListener('submit', sendEmail)

const form = document.getElementById('contactForm');




// SCROLL
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('ul.nav-list li a');

  links.forEach((link) => {
      link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetId === '') {
          // If the target is empty (i.e., "Home"), scroll to the top
          window.scrollTo({
              top: 0,
              behavior: 'smooth',
          });
      } else {
          // Scroll to the target section
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth',
          });
      }
  }
});

// checking if the form is filled
// const form = document.getElementById("contact-form");

// form.addEventListener("submit", function (event) {
//   if (!form.checkValidity()) {
//     event.preventDefault(); // Prevent form submission
//     const message = document.getElementById("contact-message");
//     message.textContent = "Please fill out all required fields.";
//     message.style.color = "red";
//   }
// });

