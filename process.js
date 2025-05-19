document.addEventListener("DOMContentLoaded", (event) => {
  let navAnimationComplete = false;

  // +++++++++++++++++++++++++++++++++ Header Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const headerTimeline = gsap.timeline();

  // Nav-bar
  headerTimeline.from("#nav-bar-b", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  headerTimeline.call(() => {
    navAnimationComplete = true;
  });

  // 1. Heading
  headerTimeline.from("#process-header h1", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2. Paragraph
  headerTimeline.from("#process-header .p-container p", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 3. Paragraph b
  headerTimeline.from("#process-header .p-container-b p", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 4. process-timeline
  headerTimeline.from("#process-timeline", {
    opacity: 0,
    duration: 1.25,
    ease: "power3.out",
  });

  // +++++++++++++++++++++++++++++++++ Navbar +++++++++++++++++++++++++++++++++
  // Nav show/hide on scroll
  let lastScrollTop = 0;
  const nav = document.getElementById("nav-bar-b");

  window.addEventListener("scroll", () => {
    if (!navAnimationComplete) return; // wait until intro finishes

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll down → hide nav
      gsap.to(nav, {
        y: "-100%",
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      // Scroll up → show nav
      gsap.to(nav, {
        y: "0%",
        duration: 0.3,
        ease: "power3.out",
      });
    }

    lastScrollTop = Math.max(scrollTop, 0);
  });

  // +++++++++++++++++++++++++++++++++ Contact Us Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const contactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact-us",
      start: "top 50%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. contact-us-content
  contactTimeline.from(".contact-us-content", {
    x: -50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2. contact-form-container
  contactTimeline.from(".contact-form-container", {
    x: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // +++++++++++++++++++++++++++++++++ Footer Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const footerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "top 80%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  footerTimeline.from("#footer", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
  });
});
