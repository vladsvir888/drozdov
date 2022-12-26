import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.defaults({
  ease: "none",
});

const Animation = () => {
  const mql = window.matchMedia('(min-width: 1201px)');

  if (mql.matches) {
    const gt = gsap.timeline();

    function animateHeadings(selectors) {
      if (!selectors.length) return;

      selectors.forEach(selector => {
        let delay = 0;
        const headingItems = document.querySelectorAll(`${selector} .animate-title__child`);

        headingItems.forEach((item, index) => {
          index += 1;

          const className = `${selector} .animate-title__parent:nth-child(${index}) .animate-title__child`;

          gsap.to(className, {
            scrollTrigger: {
              trigger: className,
              // markers: true,
              start: "top bottom"
            },
            transform: "translateY(0)",
            delay: delay,
            duration: 0.5,
            ease: "power1.out"
          });

          delay += 0.35;
        });
      });
    }

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
        onComplete: () => {
          animateHeadings(['.catalog__title'])
        }
      },
      0.5
    );
    gt.to(".section-wrapper", {
      transform: "translateY(0)"
    }, 1);

    ScrollTrigger.create({
      animation: gt,
      trigger: ".main",
      start: "top top",
      end: "30%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      pinType: "fixed",
      onUpdate: self => {
        document.body.dataset.offset = self.end;
      },
      onEnter: () => {
        animateHeadings(['.promo__title']);
      },
      onLeave: self => {
        if (document.body.dataset.animationEnd) return;

        document.body.dataset.animationEnd = !self.isActive;

        setTimeout(() => {
          animateHeadings(['.faq__title', '.sculpture__title']);
        }, 1000)
      }
    });
  }
};

export default Animation;