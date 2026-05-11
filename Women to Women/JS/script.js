document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});

});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e){
    e.preventDefault(); // prevents page reload

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields!");
        return;
    }

    alert("Thanks for reaching out! 💕"); 
    form.reset(); // clears the form
});

});