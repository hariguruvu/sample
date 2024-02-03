// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
document.addEventListener("DOMContentLoaded", function () {
  // Sample testimonial data (you can replace this with real data from your backend)
  const testimonialsData = [
      {
          name: "charan",
          occupation: "CEO, XYZ Company",
          testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          
      },
      {
        name: "shankar",
        occupation: "CEO, XYZ Company",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
    },
      {
          name: "eveen",
          occupation: "Marketing Manager, ABC Inc.",
          testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          
      }
  ];

  // Function to dynamically populate testimonials
  function renderTestimonials() {
      const testimonialContainer = document.getElementById("testimonialContainer");

      testimonialsData.forEach(testimonial => {
          const testimonialDiv = document.createElement("div");
          testimonialDiv.classList.add("testimonial");

          testimonialDiv.innerHTML = `
              <img src="${testimonial.image}" alt="${testimonial.name}">
              <div>
                  <p>${testimonial.testimonial}</p>
                  <cite>${testimonial.name}, <span>${testimonial.occupation}</span></cite>
              </div>
          `;

          testimonialContainer.appendChild(testimonialDiv);
      });
  }

  // Call the function to render testimonials
  renderTestimonials();
});


// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

function updateVisitCount() {
      let count = localStorage.getItem('visitCount') || 0;
      count = parseInt(count) + 1;
      localStorage.setItem('visitCount', count);
      document.getElementById('visit-count').textContent = count;
    }

    // Call the function on page load
    window.onload = function() {
      updateVisitCount();
    };
