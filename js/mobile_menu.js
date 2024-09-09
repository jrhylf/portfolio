document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menuIcon_container');
    const header = document.querySelector('header');
    const navUl = document.querySelector('nav ul');

    // Function to collapse the nav with animation
    function collapseNav() {
        navUl.classList.remove('expanded');
        navUl.classList.add('collapsed');
        if (window.innerWidth <= 767) {
            navUl.style.display = 'none'; // Hide after animation
        }
        header.classList.remove('expand-menu');
        navUl.classList.remove('show-menu');
        // console.log("collapseNav() executed");
    }

    menuIcon.addEventListener('click', function() {
        if (navUl.classList.contains('expanded')) {
            collapseNav();
        } else {
            navUl.style.display = 'flex'; // Show before animation
            navUl.classList.remove('collapsed');
            navUl.classList.add('expanded');
            header.classList.toggle('expand-menu');
            navUl.classList.toggle('show-menu');
        }
        // console.log("menuIcon clicked");
    });

    // Add event listener for mouseleave on the entire nav ul
    navUl.addEventListener('mouseleave', function() {
        collapseNav();
    });

    // Ensure mouseout on li doesn't trigger collapse if mouse moves within nav ul
    navUl.addEventListener('mouseenter', function() {
        // Reset display and animation classes if hovered back over
        navUl.style.display = 'flex'; // Ensure nav is visible
        navUl.classList.remove('collapsed');
        navUl.classList.add('expanded');
        navUl.classList.add('show-menu');
        header.classList.add('expand-menu');
    });

    // Handle screen resize
    window.addEventListener('resize', function() {
        // if Expanded
        if (window.innerWidth >= 768 && navUl.classList.contains('expanded')) {
            navUl.style.display = 'flex';
            navUl.classList.remove('expanded');
            header.classList.remove('expand-menu');
            navUl.classList.remove('show-menu');
            navUl.classList.add('collapsed');
        }
        // if Collapsed and >= 768px, display flex
        else if (window.innerWidth >= 768 && navUl.classList.contains('collapsed')) {
            navUl.style.display = 'flex';
        }
        // if Collapsed and <= 767px, display none
        else if (window.innerWidth <= 767 && navUl.classList.contains('collapsed')) {
            navUl.style.display = 'none';
        }
    });
});
