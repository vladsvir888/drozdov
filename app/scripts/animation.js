const Animation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.defaults({
    ease: "none",
  });

  const gt = gsap.timeline();

  gt.to(
    ".promo__title",
    {
      top: "300px",
    },
    0
  );
  gt.to(
    ".promo__text",
    {
      top: "80%",
      opacity: "0.5"
    },
    0
  );
  gt.to(
    ".promo__second-img",
    {
      top: "60%",
    },
    0
  );
  gt.to(
    ".promo__first-img",
    {
      opacity: "0.5",
    },
    0
  );
  gt.to(
    ".promo__title",
    {
      top: "150px",
    },
    0.5
  );
  gt.to(
    ".promo__text",
    {
      top: "50%",
      opacity: "1"
    },
    0.5
  );
  gt.to(
    ".promo__second-img",
    {
      top: "0",
    },
    0.5
  );
  gt.to(
    ".promo__first-img",
    {
      opacity: "0",
    },
    0.5
  );

  ScrollTrigger.create({
    animation: gt,
    trigger: ".main",
    start: "top top",
    end: "30%",
    scrub: 1,
    pin: !0,
    anticipatePin: 1,
    pinType: "fixed",
  });
};

export default Animation;