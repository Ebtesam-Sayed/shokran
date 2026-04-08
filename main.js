let x =20;
console.log(x);

// Mobile Menu Toggle
const menuIcon = document.querySelector('.header .container nav i');
const navMenu = document.querySelector('.header .container ul');

if (menuIcon) {
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.header .container ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}