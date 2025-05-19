document.addEventListener("DOMContentLoaded", (event) => {
  let navAnimationComplete = false;

  // Hero section animation + nav-bar
  const tl = gsap.timeline();

  // Animate nav-bar and hero-content-left at the same time
  tl.from("#nav-bar-b", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  tl.call(() => {
    navAnimationComplete = true;
  });
  // Animate hero-content-right
  tl.from(
    [".hero-content-left", ".hero-content-right", ".intro-added"],
    {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    },
    "+=0.1"
  );

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

  // Splide slider init
  new Splide(".splide", {
    type: "loop",
    speed: 1000,
  }).mount();

  // FAQ animation
  const faqItems = document.querySelectorAll(".faq-item");

  function openFaqItem(item) {
    const answer = item.querySelector(".faq-answer");
    item.classList.add("active");
    gsap.set(answer, { height: "auto" });
    gsap.from(answer, { height: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(answer, {
      height: "auto",
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    return true;
  }

  function closeFaqItem(item) {
    const answer = item.querySelector(".faq-answer");
    item.classList.remove("active");
    gsap.to(answer, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    return false;
  }

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    let isOpen = false;

    gsap.set(answer, { height: 0, opacity: 0 });

    if (index === 0) isOpen = openFaqItem(item);

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          closeFaqItem(otherItem);
        }
      });
      isOpen = isOpen ? closeFaqItem(item) : openFaqItem(item);
    });
  });

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

  // +++++++++++++++++++++++++++++++++ Features Section +++++++++++++++++++++++++++++++++

  // Create a timeline linked to ScrollTrigger
  const featuresTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#features",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // 1. Heading
  featuresTimeline.from("#features h2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // 2. Paragraph
  featuresTimeline.from("#features p", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from([".quarter-grid-left", ".quarter-grid-right"], {
    x: (index) => (index === 0 ? -100 : 100), // left: -100, right: +100
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#features",
      start: "top center",
      toggleActions: "play none none none",
    },
  });

  // +++++++++++++++++++++++++++++++++ Value Proposition Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const valuesTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#values",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // 1. heading
  valuesTimeline.from("#values h2", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // 2. graphic
  valuesTimeline.from(
    ".graphic-container",
    {
      x: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    }
    //"+=0.1"
  ); // slight delay after heading

  // 3. paragraph
  valuesTimeline.from(
    "#values .p-container",
    {
      x: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: {
        each: 0.5,
      },
    }
    //"+=0.1"
  );

  // 4. value items
  valuesTimeline.from(
    ".value-item",
    {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: {
        amount: 0.3,
      },
    }
    //"+=0.1"
  );

  // 5. 2nd paragraph
  valuesTimeline.from(
    "#values .p-container-b",
    {
      x: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    }
    //"+=0.1"
  );

  // 6. cta-container
  gsap
    .from(
      ".cta-container",
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      }
      //"+=0.1"
    )
    .delay(2.5); // slight delay after graphic

  // +++++++++++++++++++++++++++++++++ Core Services Section +++++++++++++++++++++++++++++++++

  // Create a timeline linked to ScrollTrigger
  const coresTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#core-services",
      start: "top 80%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Animate heading lines
  coresTimeline.from("#core-services h2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // 2. splide
  coresTimeline.from(".splide", {
    y: 50,
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
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2. Paragraph
  testimonialTimeline.from("#testimonials .p-container p", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // +++++++++++++++++++++++++++++++++ FAQ Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const faqlTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#faq",
      start: "top 50%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Heading
  faqlTimeline.from("#faq .header-container", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // 2. Paragraph
  faqlTimeline.from("#faq .p-container", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // +++++++++++++++++++++++++++++++++ Newsletter Section +++++++++++++++++++++++++++++++++
  // Create a timeline linked to ScrollTrigger
  const newsLetterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#newsletter",
      start: "top 50%", // adjust as needed
      toggleActions: "play none none none",
    },
  });

  // 1. Heading
  newsLetterTimeline.from("#newsletter h2", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 2. Paragraph
  newsLetterTimeline.from("#newsletter .p-container p", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 3. newsletter-feature
  newsLetterTimeline.from(".newsletter-feature", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    stagger: {
      amount: 0.3,
    },
  });

  // 4. Paragraph
  newsLetterTimeline.from("#newsletter .p-container-b p", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  // 5. newsletter-from-container
  newsLetterTimeline.from(".newsletter-from-container", {
    y: 75,
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
