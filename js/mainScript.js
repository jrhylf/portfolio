
// Dynamic year for Footer
// const year = document.querySelector("#current-year");
// year.innerHTML = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    function changeActiveLink() {
        let index = sections.length;
    
        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});

// Prevent opening the developer tools
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });

// document.addEventListener('keydown', function(e) {
//     if (e.key === 'F12' || (e.ctrlKey && (e.shiftKey && e.key === 'I')) || (e.ctrlKey && e.key === 'U')) {
//         e.preventDefault();
//     }
// });









