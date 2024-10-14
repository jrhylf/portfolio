function preloader() {
    const preloaderElement = document.getElementById('preloader');
    
    const hidePreloader = () => {
        preloaderElement.style.transition = 'opacity 0.5s ease-out';
        preloaderElement.style.opacity = 0;

        setTimeout(() => {
            preloaderElement.style.display = 'none';
            document.body.classList.add('loaded'); // Trigger any post-loading animations or transitions
        }, 500);
    };

    // Function to handle both events
    const handleLoad = () => {
        hidePreloader();
    };

    // Add event listeners for both load and DOMContentLoaded
    window.addEventListener('load', handleLoad);
    document.addEventListener('DOMContentLoaded', handleLoad); // Ensures faster response on mobile

    // Cleanup function
    return () => {
        window.removeEventListener('load', handleLoad);
        document.removeEventListener('DOMContentLoaded', handleLoad);
    };
}

export default preloader;
