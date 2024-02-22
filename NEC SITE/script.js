let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

document.addEventListener("DOMContentLoaded", function() {
  var mailLink = document.getElementById("mail-link-1");
  mailLink.addEventListener("click", function(event) {
      event.preventDefault();
      // Construct mailto URL
      var to = "venkatesan79@gmail.com";
      // Collect form data
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;

      // Construct email body
      var body = "Name: " + name + "\n" +
                 "Email: " + email + "\n" +
                 "Phone: " + phone + "\n" +
                 "Subject: " + subject + "\n" +
                 "Message: " + message;

      var mailToUrl = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=" + encodeURIComponent(to) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      // Open email client with pre-filled email
      window.open(mailToUrl, "_blank");
  });
});


var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });
