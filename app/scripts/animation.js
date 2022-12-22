const Animation = () => {
  const mql = window.matchMedia('(min-width: 1281px)');

  if (mql.matches) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.defaults({
      ease: "none",
    });

    const gt = gsap.timeline();

    gt.to(
      ".promo__title",
      {
        top: "30%",
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
        top: "10%",
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
    gt.to(
      ".main",
      {
        paddingTop: "50vh",
      },
      1
    );
    gt.to(
      ".main",
      {
        paddingTop: "0vh",
      },
      1.5
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
  }
};

export default Animation;