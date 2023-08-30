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


// -------------
const form = document.getElementById('contactForm');

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
