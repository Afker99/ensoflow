document.addEventListener("DOMContentLoaded", (event) => {
  let navAnimationComplete = false;

  // +++++++++++++++++++++++++++++++++ Header Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const servicesTimeline = gsap.timeline();

  // Nav-bar
  servicesTimeline.from("#nav-bar-b", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  servicesTimeline.call(() => {
    navAnimationComplete = true;
  });

  // 1. service-intro
  servicesTimeline.from(".service-intro", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.1,
  });

  // 2. AI Community Header
  servicesTimeline.from(".ai-comm-header-container", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.1,
  });

  // 2. AI Community Blocks
  servicesTimeline.from(".community-block", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.1,
  });

  // 3. service-header-container
  servicesTimeline.from(".services-header-container", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.1,
  });

  // 3. service-containers
  servicesTimeline.from(".service-container", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.1,
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

  // +++++++++++++++++++++++++++++++++ Pricing Approach Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const paTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#pricing",
      start: "top 50%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Heading
  paTimeline.from("#pricing h2", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2. Paragraph container
  paTimeline.from(".paragraph-container", {
    y: 100,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 3. princing-info-card
  paTimeline.from(".princing-info-card", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.1,
  });

  // 4. pricing-cta-container
  paTimeline.from(".pricing-cta-container", {
    y: 100,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
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
