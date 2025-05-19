document.addEventListener("DOMContentLoaded", (event) => {
  let navAnimationComplete = false;
  // +++++++++++++++++++++++++++++++++ Vision Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const visionTimeline = gsap.timeline();
  // Nav-bar
  visionTimeline.from("#nav-bar-b", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  visionTimeline.call(() => {
    navAnimationComplete = true;
  });

  // 1. vision-content
  visionTimeline.from(".vision-content", {
    x: -50,
    opacity: 0,
    duration: 0.3,
  });

  // 2. vision-image
  visionTimeline.from(".vision-image", {
    x: 50,
    opacity: 0,
    duration: 0.3,
  });

  // 3. mission-image
  visionTimeline.from(
    ".mission-image",
    {
      x: -50,
      opacity: 0,
      duration: 0.3,
    },
    1.2
  );

  // 4. mission-content
  visionTimeline.from(
    ".mission-content",
    {
      x: 50,
      opacity: 0,
      duration: 0.3,
    },
    1.5
  );

  // 5. founders
  visionTimeline.from("#founders", {
    y: 50,
    opacity: 0,
    duration: 0.3,
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

  // +++++++++++++++++++++++++++++++++ Founders Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const foundersTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#founders",
      start: "top 80%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Left Section
  foundersTimeline.from(".founders-left", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // 2. Right Section
  foundersTimeline.from(".founders-right", {
    x: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // +++++++++++++++++++++++++++++++++ Impact Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const impactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#impacts",
      start: "top 80%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Left Section
  impactTimeline.from(".impact-left", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // 2. Right Section
  impactTimeline.from(".impact-right", {
    x: 50,
    opacity: 0,
    duration: 0.5,
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
  const FooterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "top 80%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  FooterTimeline.from("#footer", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
  });
});
