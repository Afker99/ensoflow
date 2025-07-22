document.addEventListener("DOMContentLoaded", function () {
  // FAQ Interaction
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
});
