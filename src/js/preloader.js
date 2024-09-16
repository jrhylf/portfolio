function preloader() {
    const preloaderElement = document.getElementById('preloader');
    
    // Function to handle the load event
    const handleLoad = () => {
        // Gradually hide the preloader with CSS transition
        preloaderElement.style.transition = 'opacity 0.5s ease-out';
        preloaderElement.style.opacity = 0;

        setTimeout(() => {
            preloaderElement.style.display = 'none';
            document.body.classList.add('loaded'); // Trigger any post-loading animations or transitions
        }, 500); // The timeout matches the transition duration
    };

    // Add load event listener
    window.addEventListener('load', handleLoad);

    // Cleanup function
    return () => {
        window.removeEventListener('load', handleLoad);
    };
}

export default preloader;
