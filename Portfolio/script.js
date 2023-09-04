/*Nav*/
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector(".nav-list");

    toggleButton.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  });

// tab
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

  // !serviceID - tempateID - #form - publicKey
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
  apiKey: "AIzaSyDZyri2dTl3itXIbT3EkryddGE15ZWpVFg",
  authDomain: "contactform-d1955.firebaseapp.com",
  databaseURL: "https://contactform-d1955-default-rtdb.firebaseio.com",
  projectId: "contactform-d1955",
  storageBucket: "contactform-d1955.appspot.com",
  messagingSenderId: "169490321850",
  appId: "1:169490321850:web:52c5ef6cc329407e208d83"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);
// const customAppName = 'contactForm'; // Change this to your desired custom name

// const app = initializeApp(firebaseConfig, customAppName);

// reference database
var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener("submit", submitForm);
function submitForm(e){
  e.preventDefault();
  var Name = getElementVal('Name');
  var Email = getElementVal('Email');
  var Message = getElementVal('Message');

  console.log(Name, Email, Message);
  
}
const getElementVal = (id) => {
  return document.getElementById(id).value;
}
