document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function () {
        preloader.style.opacity = 0;
        preloader.style.visibility = 'hidden';
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.classList.add('loaded'); // Add this class to trigger the transition
        }, 500); // Adjust timing as necessary
    });
});
