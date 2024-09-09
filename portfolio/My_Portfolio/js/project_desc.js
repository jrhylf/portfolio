// Project 1
document.getElementById('project_desc_btn1').addEventListener('click', function() {
    const projectCard = document.querySelector('.card_expand_1');
    const projectDescContainer = document.querySelector('.container_expand_1');
    const headDesc = document.querySelector('.head_expand_1');
    const projDesc = document.querySelector('.proj_expand_1');

    function collapseCard() {
        projectDescContainer.classList.remove('display');
        projectDescContainer.classList.add('collapsed');

        headDesc.classList.remove('display');
        projDesc.classList.remove('display');

        setTimeout (() => {
            projectDescContainer.classList.remove('collapsed');
            projectDescContainer.style.display = 'none';

            headDesc.style.display = 'none';
            projDesc.style.display = 'none';

            projectCard.classList.remove('expandRight');
            projectCard.classList.add('collapseLeft');
        }, 300);
    }

    // Project Card Animation
    if (projectCard.classList.contains('expandRight')) {
        collapseCard();
    } else {
        projectCard.classList.remove('collapseLeft');
        projectCard.classList.add('expandRight');

        setTimeout (() => {
            projectDescContainer.style.display = 'flex';
            headDesc.style.display = 'flex';
            projDesc.style.display = 'flex';
            
            projectDescContainer.classList.remove('collapsed');
            projectDescContainer.classList.add('display');
        }, 400);

        headDesc.classList.remove('collapsed');
        headDesc.classList.add('display');

        projDesc.classList.remove('collapsed');
        projDesc.classList.add('display');
    }
});

// Project 2
document.getElementById('project_desc_btn2').addEventListener('click', function() {
    const projectCard = document.querySelector('.card_expand_2');
    const projectDescContainer = document.querySelector('.container_expand_2');
    const headDesc = document.querySelector('.head_expand_2');
    const projDesc = document.querySelector('.proj_expand_2');

    function collapseCard() {
        projectDescContainer.classList.remove('display');
        projectDescContainer.classList.add('collapsed');

        headDesc.classList.remove('display');
        projDesc.classList.remove('display');

        setTimeout (() => {
            projectDescContainer.classList.remove('collapsed');
            projectDescContainer.style.display = 'none';

            headDesc.style.display = 'none';
            projDesc.style.display = 'none';

            projectCard.classList.remove('expandRight');
            projectCard.classList.add('collapseLeft');
        }, 300);
    }

    // Project Card Animation
    if (projectCard.classList.contains('expandRight')) {
        collapseCard();
    } else {
        projectCard.classList.remove('collapseLeft');
        projectCard.classList.add('expandRight');

        setTimeout (() => {
            projectDescContainer.style.display = 'flex';
            headDesc.style.display = 'flex';
            projDesc.style.display = 'flex';
            
            projectDescContainer.classList.remove('collapsed');
            projectDescContainer.classList.add('display');
        }, 400);

        headDesc.classList.remove('collapsed');
        headDesc.classList.add('display');

        projDesc.classList.remove('collapsed');
        projDesc.classList.add('display');
    }
});

// Project 3
document.getElementById('project_desc_btn3').addEventListener('click', function() {
    const projectCard = document.querySelector('.card_expand_3');
    const projectDescContainer = document.querySelector('.container_expand_3');
    const headDesc = document.querySelector('.head_expand_3');
    const projDesc = document.querySelector('.proj_expand_3');

    function collapseCard() {
        projectDescContainer.classList.remove('display');
        projectDescContainer.classList.add('collapsed');

        headDesc.classList.remove('display');
        projDesc.classList.remove('display');

        setTimeout (() => {
            projectDescContainer.classList.remove('collapsed');
            projectDescContainer.style.display = 'none';

            headDesc.style.display = 'none';
            projDesc.style.display = 'none';

            projectCard.classList.remove('expandRight');
            projectCard.classList.add('collapseLeft');
        }, 300);
    }

    // Project Card Animation
    if (projectCard.classList.contains('expandRight')) {
        collapseCard();
    } else {
        projectCard.classList.remove('collapseLeft');
        projectCard.classList.add('expandRight');

        setTimeout (() => {
            projectDescContainer.style.display = 'flex';
            headDesc.style.display = 'flex';
            projDesc.style.display = 'flex';
            
            projectDescContainer.classList.remove('collapsed');
            projectDescContainer.classList.add('display');
        }, 400);

        headDesc.classList.remove('collapsed');
        headDesc.classList.add('display');

        projDesc.classList.remove('collapsed');
        projDesc.classList.add('display');
    }
});





