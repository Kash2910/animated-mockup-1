// Create a timeline
        const tl = gsap.timeline();

        // First animate the navigation elements
        tl.from("#nav", {
            y: -50,
            opacity: 0,
            duration: 0.8
        })
        .from("#main>h1", {
            y: 100,
            opacity: 0,
            duration: 0.8
        })
        // Animate images with their respective rotations
        .from("#img1", {
            scale: 0,
            opacity: 0,
            rotation: 30,
            duration: 0.8
        })
        .from("#img2", {
            scale: 0,
            opacity: 0,
            rotation: 20,
            duration: 0.8
        }, "-=0.4")  // Start before previous animation ends
        .from("#img3", {
            scale: 0,
            opacity: 0,
            rotation: 10,
            duration: 0.8
        }, "-=0.4")
        .from("#img4", {
            scale: 0,
            opacity: 0,
            rotation: 0,
            duration: 0.8
        }, "-=0.4")
        // Animate bottom elements
        .from("#btm-left", {
            y: 50,
            opacity: 0,
            duration: 0.5
        })
        .from("#arrow", {
            y: 50,
            opacity: 0,
            duration: 0.5
        }, "-=0.3");

        // Add hover animations for images
        const images = document.querySelectorAll('img');
        images.forEach((img, index) => {
            img.addEventListener('mouseenter', () => {
                gsap.to(img, {
                    scale: 1.1,
                    zIndex: 10,
                    duration: 0.3
                });
            });
            
            img.addEventListener('mouseleave', () => {
                gsap.to(img, {
                    scale: 1,
                    zIndex: 1,
                    duration: 0.3,
                    rotation: (3 - index) * 10  // Restore original rotation
                });
            });
        });