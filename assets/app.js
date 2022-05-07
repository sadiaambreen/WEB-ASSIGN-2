var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function currentSlide(n) {
  displaySlides((slide_index = n));
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}


// Registration Form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const container = document.querySelector('.container');
const phone=document.getElementById('phone');

//Listen for for submission
form.addEventListener('submit', (e) => {  
    e.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const phoneValue=phone.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
  
  

    if (usernameValue === '') {
        errorMessage(username, "Username is empty");
    } else {
        successMessage(username);
    }

    if (emailValue === '') {
        errorMessage(email, "Email is empty");
    } else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } else {
        successMessage(email);
    }
    if (phoneValue === '') {
      errorMessage(phone, "Phone Number is empty");
  } else {
      successMessage(phone);
  }

    if (passwordValue === '') {
        errorMessage(password, "Password is empty");
    } else {
        successMessage(password);
    }

    if (password2Value === '') {
        errorMessage(password2, "Password is empty");
    } else if (password2Value !== passwordValue) {
        errorMessage(password2, "Both Passwords does not match");
    } else {
        successMessage(password2);
    }

    if (username.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && password2.parentElement.classList.contains('success')) {

        swal({
            title: 'Account Created',
            text: 'Your are now our official member',
            icon: 'success',
            button: 'Back to Home',
        });
        const obj = {}
        obj.username = usernameValue;
        obj.email = emailValue;
        obj.number = phoneValue;
        obj.password = passwordValue;
        obj.password2 = password2Value;
        console.log(obj);
        username.value = '';
        email.value = '';
        phone.value = '';
        password.value = '';
        password2.value = '';
    }
    
});



function errorMessage(value, message) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('success')) {
        formControl.classList.remove('success');
        formControl.classList.add('error');
    } else {
        formControl.classList.add('error');
    }
    formControl.querySelector('.errorMessage').textContent = message;


}


function successMessage(value) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('error')) {
        formControl.classList.remove('error');
        formControl.classList.add('success');
    } else {
        formControl.classList.add('success');
    }
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


jQuery(document).ready(function($){
	var $slickElement = $('.slideshow');

	$slickElement.slick({
	  autoplay: true,
	  dots: false,
	});

});