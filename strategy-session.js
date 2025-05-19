document.addEventListener("DOMContentLoaded", (event) => {
  let navAnimationComplete = false;

  // +++++++++++++++++++++++++++++++++ Header Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const headerTimeline = gsap.timeline();

  // Nav-bar
  headerTimeline.from("#nav-bar-b", {
    y: -100,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
  });

  headerTimeline.call(() => {
    navAnimationComplete = true;
  });

  // 1. Heading
  headerTimeline.from(".header-container", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2. Paragraph
  headerTimeline.from(".paragraph-container", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 3. cta
  headerTimeline.from(".strategy-session-cta-container", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 4. founders-conversation-content
  headerTimeline.from(".founders-conversation-content", {
    x: -75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 4. founders-conversation-content
  headerTimeline.from(".founders-conversation-image", {
    x: 75,
    opacity: 0,
    duration: 0.3,
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

  // +++++++++++++++++++++++++++++++++ initial-assessment +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const initialAssessmentTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#initial-assessment",
      start: "top 50%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Heading
  initialAssessmentTimeline.from(".header-container-ia", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2.
  initialAssessmentTimeline.from(".assessment-info", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: "power3.out",
  });

  // +++++++++++++++++++++++++++++++++ initial-assessment +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const perfectForTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#perfect-for",
      start: "top 50%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Heading
  perfectForTimeline.from(".header-container-perfect-for", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2.
  perfectForTimeline.from(".perfect-for-info-item", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: "power3.out",
  });

  // +++++++++++++++++++++++++++++++++ Testimonial Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const testimonialTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 50%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Heading
  testimonialTimeline.from("#testimonials .header-container h2", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2. Paragraph
  testimonialTimeline.from("#testimonials .p-container p", {
    y: 75,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // Testimonial Carousel / Init infinite scroll carousel
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".testimonial");
  gsap.set(track, { x: 0 });

  const originalWidth = Array.from(cards).reduce((total, card) => {
    return total + card.offsetWidth + 24;
  }, 0);

  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  let scrollTween;

  function createInfiniteScroll() {
    if (scrollTween) scrollTween.kill();

    scrollTween = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -originalWidth,
        duration: 60,
        ease: "none",
        repeat: -1,
        onRepeat: () => gsap.set(track, { x: 0 }),
      }
    );
  }

  createInfiniteScroll();

  // Pause/resume scroll
  track.addEventListener("mouseenter", () => scrollTween?.pause());
  track.addEventListener("mouseleave", () => scrollTween?.resume());

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
