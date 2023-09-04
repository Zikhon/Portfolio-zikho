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

  //serviceID - tempateID - #form - publicKey
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


// -------------
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





// document.getElementById('contact-right').addEventListener('submit', function(event) {
//   event.preventDefault();


//   // Regular expressions for validation
//   const nameRegex = /^[A-Z][a-zA-Z]{1,19}$/;
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

//   const nameInput = document.getElementById('Name');
//   const emailInput = document.getElementById('email');
//   const messageInput = document.getElementById('Message');

//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const message = messageInput.value.trim();

//   // Check for empty fields
//   if (name === '') {
//     alert('Please write your name.');
//     return;
//   }
//   if (email === '') {
//     alert('Please write your name.');
//     return;
//   }
//   if (message === '') {
//     alert('Please write your message.');
//     return;
//   }

//   // Validate name, email, and message
//   if (!name.match(nameRegex)) {
//     alert('Write a correct name');
//     return;
//   }

//   if (!email.match(emailRegex)) {
//     alert('Email is invalid.');
//     return;
//   }

//   // Clear the form
//   nameInput.value = '';
//   emailInput.value = '';
//   messageInput.value = '';

//   alert('Form submitted successfully!');
// });


// firebase
const firebaseConfig = {
  apiKey: "AIzaSyBEYrN9dol_LMFsYBPrywpUB2Y2hGQdeVs",
  authDomain: "contactform-f519b.firebaseapp.com",
  databaseURL: "https://contactform-f519b-default-rtdb.firebaseio.com",
  projectId: "contactform-f519b",
  storageBucket: "contactform-f519b.appspot.com",
  messagingSenderId: "254708467459",
  appId: "1:254708467459:web:a1e8642b66825803d94b36",
  measurementId: "G-R1XZSR6884"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database()

const ref = database.ref("message")

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  // console.log("form submitted");
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
//  console.log(name, email,message);

ref.push({
  name:name,
  email:email,
  message:message

})
 form.reset();
//  window.confirm("Message sent successfully")



})
