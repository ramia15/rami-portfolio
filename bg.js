document.addEventListener('DOMContentLoaded', (event) => {
    const background = document.querySelector('.background');

    gsap.set(background, {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        background: '#141414',
        overflow: 'hidden',
        zIndex: -100
    });
    
    const spans = document.querySelectorAll('.background span');
    
    gsap.set(spans, {
        width: '50vmin',
        height: '50vmin',
        borderRadius: '50vmin',
        backfaceVisibility: 'hidden',
        position: 'absolute'
    });
    
    
    gsap.to(spans[-1], {
        rotation: 360,
        transformOrigin: '-22vw -16vh',
        boxShadow: '100vmin 0 13.414128397628808vmin currentColor',
        duration: 193,
        repeat: -1,
        color: '#6cc0cb',
        top: '84%',
        left: '38%'
    });
    
    gsap.to(spans[0], {
        rotation: 360,
        transformOrigin: '-7vw 13vh',
        boxShadow: '-100vmin 0 13.285120293367132vmin currentColor',
        duration: 157,
        repeat: -1,
        color: '#6cc0cb',
        top: '8%',
        left: '87%'
    });
    
    gsap.to(spans[1], {
        rotation: 360,
        transformOrigin: '-4vw -5vh',
        boxShadow: '-100vmin 0 13.0565926444784vmin currentColor',
        duration: 346,
        repeat: -1,
        color: '#6cc0cb',
        top: '85%',
        left: '41%'
    });
    
    gsap.to(spans[2], {
        rotation: 360,
        transformOrigin: '-20vw -22vh',
        boxShadow: '100vmin 0 12.639104274735896vmin currentColor',
        duration: 363,
        repeat: -1,
        color: '#583C87',
        top: '79%',
        left: '82%'
    });
    
    gsap.to(spans[3], {
        rotation: 360,
        transformOrigin: '-10vw -2vh',
        boxShadow: '-100vmin 0 13.489795539367812vmin currentColor',
        duration: 211,
        repeat: -1,
        color: '#583C87',
        top: '84%',
        left: '35%'
    });
    
    gsap.to(spans[4], {
        rotation: 360,
        transformOrigin: '-22vw -23vh',
        boxShadow: '-100vmin 0 12.974404512437442vmin currentColor',
        duration: 318,
        repeat: -1,
        color: '#6cc0cb',
        top: '54%',
        left: '59%'
    });
    
    gsap.to(spans[5], {
        rotation: 360,
        transformOrigin: '21vw -22vh',
        boxShadow: '-100vmin 0 13.274572983984964vmin currentColor',
        duration: 105,
        repeat: -1,
        color: '#583C87',
        top: '16%',
        left: '74%'
    });
    
    gsap.to(spans[6], {
        rotation: 360,
        transformOrigin: '-10vw -7vh',
        boxShadow: '100vmin 0 12.793673199870744vmin currentColor',
        duration: 6,
        repeat: -1,
        color: '#583C87',
        top: '92%',
        left: '40%'
    });
    
    gsap.to(spans[7], {
        rotation: 360,
        transformOrigin: '-22vw -12vh',
        boxShadow: '100vmin 0 12.639027962072472vmin currentColor',
        duration: 289,
        repeat: -1,
        color: '#6cc0cb',
        top: '22%',
        left: '6%'
    });
    
    gsap.to(spans[8], {
        rotation: 360,
        transformOrigin: '-6vw 13vh',
        boxShadow: '100vmin 0 13.450434246512222vmin currentColor',
        duration: 212,
        repeat: -1,
        color: '#6cc0cb',
        top: '91%',
        left: '62%'
    });
    
    gsap.to(spans[9], {
        rotation: 360,
        transformOrigin: '24vw -12vh',
        boxShadow: '100vmin 0 13.093785681558426vmin currentColor',
        duration: 298,
        repeat: -1,
        color: '#6cc0cb',
        top: '25%',
        left: '27%'
    });
    
    gsap.to(spans[10], {
        rotation: 360,
        transformOrigin: '5vw -21vh',
        boxShadow: '100vmin 0 12.933457838566937vmin currentColor',
        duration: 153,
        repeat: -1,
        color: '#583C87',
        top: '76%',
        left: '49%'
    });
    
    gsap.to(spans[11], {
        rotation: 360,
        transformOrigin: '19vw 23vh',
        boxShadow: '-100vmin 0 13.432373972452893vmin currentColor',
        duration: 176,
        repeat: -1,
        color: '#6cc0cb',
        top: '92%',
        left: '51%'
    });
    
    gsap.to(spans[12], {
        rotation: 360,
        transformOrigin: '-20vw -12vh',
        boxShadow: '-100vmin 0 13.000772814922291vmin currentColor',
        duration: 55,
        repeat: -1,
        color: '#6cc0cb',
        top: '92%',
        left: '61%'
    });
    
    gsap.to(spans[13], {
        rotation: 360,
        transformOrigin: '-14vw 10vh',
        boxShadow: '-100vmin 0 12.608171893618925vmin currentColor',
        duration: 165,
        repeat: -1,
        color: '#583C87',
        top: '57%',
        left: '65%'
    });

    let lastX = 0;
    let lastY = 0;
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 20;
        const y = (window.innerHeight / 2 - e.pageY) / 20;

        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
            gsap.to(spans, {
                x: lastX + (x - lastX) / 10,
                y: lastY + (y - lastY) / 10,
                duration: 0.5,
                overwrite: 'auto'
            });
        });

        lastX = x;
        lastY = y;
    });
});