var type = new Typed(".text",{
    strings: ["Hand Tools", "Power Tools", "Construction Tools" , "Automotive Tool" , "Accssories"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("https://formspree.io/f/xdkdownq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("There was an error. Please try again.");
    }
  });


const uploadSection = document.getElementById('uploadSection');
const addMoreContainer = document.getElementById('addMoreContainer');
const gallery = document.getElementById('gallery');

const imageInput = document.getElementById('imageUpload');
const headingInput = document.getElementById('headingInput');
const introInput = document.getElementById('introInput');
const uploadButton = document.getElementById('uploadBtn');
const addMoreButton = document.getElementById('addMoreBtn');
const clearRecentButton = document.getElementById('clearRecentBtn');


let uploadedImageURL = null;

uploadSection.style.display = 'none';

function authorizeUploader() {
  const password = document.getElementById('authPassword').value;
  const authSection = document.getElementById('authSection');
  if (password === 'herokingboss') {
    uploadSection.style.display = 'block';
    authSection.style.display = 'none';
  } else {
    alert('Unauthorized. Incorrect password.');
  }
}

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageURL = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

uploadButton.addEventListener('click', function () {
  const password = prompt("Enter upload password:");
  if (password !== 'herokingboss') {
    alert('Unauthorized. Incorrect password.');
    return;
  }

  const heading = headingInput.value.trim();
  const intro = introInput.value.trim();

  if (!uploadedImageURL || !heading || !intro) {
    alert('Please fill in all fields and select an image.');
    return;
  }

  const card = document.createElement('div');
  card.classList.add('row');
  card.innerHTML = `
    <img src="${uploadedImageURL}" height="500" width="500">
    <div class="layer">
      <h5 style="padding: 10px;">${heading}</h5>
      <p style="padding: 10px;">${intro}</p>
      <a href="#" target="blank">Order Now</a>
    </div>
  `;
  gallery.appendChild(card);
  

  const existingData = JSON.parse(localStorage.getItem('galleryItems') || '[]');
  existingData.push({ image: uploadedImageURL, heading, intro });
  localStorage.setItem('galleryItems', JSON.stringify(existingData));

  uploadedImageURL = null;
  imageInput.value = '';
  headingInput.value = '';
  introInput.value = '';

  uploadSection.style.display = 'none';
  addMoreContainer.style.display = 'block';
});

addMoreButton.addEventListener('click', function () {
  uploadedImageURL = null;
  imageInput.value = '';
  headingInput.value = '';q
  introInput.value = '';

  uploadSection.style.display = 'block';
  addMoreContainer.style.display = 'none';
});


clearRecentButton.addEventListener('click', function () {
  const password = prompt("Enter password to delete the most recent portfolio:");
  if (password !== 'herokingboss') {
    alert('Unauthorized. Incorrect password.');
    return;
  }


  let savedItems = JSON.parse(localStorage.getItem('galleryItems') || '[]');

  if (savedItems.length === 0) {
    alert('No uploads to remove.');
    return;
  }

  savedItems.pop();
  localStorage.setItem('galleryItems', JSON.stringify(savedItems));

  const rows = document.querySelectorAll('#gallery .row');
  if (rows.length > 0) {
    rows[rows.length - 1].remove();
  }
});

window.addEventListener('DOMContentLoaded', function () {
  const savedItems = JSON.parse(localStorage.getItem('galleryItems') || '[]');
  savedItems.forEach(({ image, heading, intro }) => {
    const card = document.createElement('div');
    card.classList.add('row');
    card.innerHTML = `
      <img src="${image}" height="500" width="500">
      <div class="layer">
        <h5 style="padding: 10px;">${heading}</h5>
        <p style="padding: 10px;">${intro}</p>
        <a href="#" target="blank">Order Now</a>
      </div>`;
    gallery.appendChild(card);
  });
});


//Live chart area
 /* window.__lc = window.__lc || {};
  window.__lc.license = 1234567; // your license number
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
  var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on", c.call(arguments)])},
  once:function(){i(["once", c.call(arguments)])},
  off:function(){i(["off", c.call(arguments)])},
  get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
  return i(["get", c.call(arguments)])},
  call:function(){i(["call", c.call(arguments)])},
  init:function(){var n=t.createElement("script");
  n.async=!0,n.type="text/javascript",
  n.src="https://cdn.livechatinc.com/tracking.js",
  t.head.appendChild(n)}};
  !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
  })(window, document, [].slice)
*/



let index = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function slideNext() {
  index = (index + 1) % totalSlides;
  slider.style.transition = 'transform 1s ease-in-out';
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideNext, 5000); 


