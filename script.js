document.addEventListener('DOMContentLoaded', function () {

    // Filter content function
    const filterButtons = document.querySelectorAll('.btn-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-type');
            filterContent(type);
        });
    });

    function filterContent(type) {
        const webDevSection = document.getElementById('web-dev');
        const graphicDesignSection = document.getElementById('graphic-design');
        const webDevBtn = document.querySelector('.btn-filter[data-type="web-dev"]');
        const graphicDesignBtn = document.querySelector('.btn-filter[data-type="graphic-design"]');

        if (type === 'web-dev') {
            webDevSection.style.display = 'block';
            graphicDesignSection.style.display = 'none';
            webDevBtn.classList.add('active');
            graphicDesignBtn.classList.remove('active');
        } else if (type === 'graphic-design') {
            graphicDesignSection.style.display = 'block';
            webDevSection.style.display = 'none';
            graphicDesignBtn.classList.add('active');
            webDevBtn.classList.remove('active');
        }
    }

    // Expose the function to global scope to be callable from HTML
    window.filterContent = filterContent;

});
