const Animation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.defaults({
    ease: "none",
  });

  const showAnim = gsap.from('.header', {
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });

  let gt = gsap.timeline();

  gt.to('.promo__title', {
    bottom: "100px"
  }, 0);
  gt.to('.promo__title', {
    bottom: "150px"
  }, 0.5);
  gt.to('.promo__title', {
    bottom: "200px"
  }, 1);
};

export default Animation;