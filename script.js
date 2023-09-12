document.addEventListener('DOMContentLoaded', function () {

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Stagger fade in the projects with cascade effect from right
    gsap.utils.toArray('.project').forEach((project, index) => {
        gsap.fromTo(project, 
            { x: '100%', opacity: 0 }, // From state
            {
                x: '0%', // To state
                opacity: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: project,
                    start: 'top bottom-=100', // Adjusting this to start the animation a bit sooner
                    end: 'bottom top',
                    toggleActions: 'play none none reverse'
                }
            });
    });

    // Filter content function
    const filterButtons = document.querySelectorAll('.btn-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-type');
            
            // Pause any active GSAP animations
            gsap.globalTimeline.pause();
            
            filterContent(type);
            
            // Refresh ScrollTrigger after the animations
            ScrollTrigger.refresh();
        });
    });

    function filterContent(type) {
        const webDevSection = document.getElementById('web-dev');
        const graphicDesignSection = document.getElementById('graphic-design');
        const webDevBtn = document.querySelector('.btn-filter[data-type="web-dev"]');
        const graphicDesignBtn = document.querySelector('.btn-filter[data-type="graphic-design"]');

        // This function will animate the projects into view
        function animateProjects(container) {
            gsap.utils.toArray(container.children).forEach((project, index) => {
                gsap.from(project, {
                    x: '100%',
                    y: 100,
                    opacity: 0,
                    delay: index * 0.2
                });
            });
        }

        if (type === 'web-dev') {
            webDevSection.style.display = 'block';
            graphicDesignSection.style.display = 'none';
            webDevBtn.classList.add('active');
            graphicDesignBtn.classList.remove('active');
            animateProjects(webDevSection); // Animate the web-dev projects
        } else if (type === 'graphic-design') {
            graphicDesignSection.style.display = 'block';
            webDevSection.style.display = 'none';
            graphicDesignBtn.classList.add('active');
            webDevBtn.classList.remove('active');
            animateProjects(graphicDesignSection); // Animate the graphic-design projects
        }
    }

    // Expose the function to global scope to be callable from HTML
    window.filterContent = filterContent;

});
