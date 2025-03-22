// let tl = gsap.timeline()

// tl.to(".li1", { x: 100, duration: 2 });
// tl.to(".li2", { x: 200, duration: 1 });
// tl.to(".li3", { x: 300, duration: 1 });
// tl.to(".li4", { x: 400, duration: 1 });
// tl.to(".li5", { x: 500, duration: 1 });

gsap.to(".logo",{
    x:-1500,
        // scale:1.1,
        scrollTrigger:{
            trigger:".box2",
            start:"top top",
            end:"bottom bottom",
            // markers:true,
            scrub:1,
            pin:true,
        }
    })
    gsap.from(".li",{
        opacity:0.1,
        y: 10,
        stagger:0.2,
    })
    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".pbox", {
        duration: 0.5,
        scale: 0.1,
        y: 40,
        ease: "power2.inOut",
        stagger: {
          from: "start",
          amount: 1.5
        },
        scrollTrigger: {
          trigger: ".products", // The parent element to trigger the animation
          start: "top 500px",  // When the top of the parent box reaches the bottom of the viewport
          end: "bottom 400px",    // Optional: You can control when the animation ends
          scrub: 2,             // Optional: Scrub through the animation as you scroll
          // once: true,            // Optional: Run the animation only once when in view
          // markers:true
        }
      });

      gsap.to("#aboutus",{
        backgroundPosition:"0 20",
        scrollTrigger:{
          trigger:"#aboutus",
          y:40,
          start:"-100px top",
          end:"bottom 400px",
          scrub:2,
          // markers:true
        }
      })