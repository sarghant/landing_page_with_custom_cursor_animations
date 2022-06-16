const cursor = document.querySelector(".cursor"),
  secondCursor = document.querySelector(".second-cursor"),
  cycleElements = [...document.querySelectorAll(".cycle-item")],
  // socialLinksList = document.querySelector(".social ul");
  defaultHoverItems = [...document.querySelectorAll(".default-cursor")];
// Cursors' animation code
let posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;
const cursorTimeline = gsap.timeline({ duration: 0.02, repeat: -1 });
cursorTimeline.eventCallback("onRepeat", function () {
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;
  gsap.set(cursor, {
    css: {
      left: mouseX,
      top: mouseY,
    },
  });
  gsap.set(secondCursor, {
    css: {
      left: posX,
      top: posY,
    },
  });
});
document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// Image cursor animation code
function imgMove(e) {
  gsap.to(cursor, {
    duration: 0.3,
    delay: 0.03,
    css: {
      left: e.pageX,
      top: e.pageY,
    },
  });
}
cycleElements.forEach((elm, index) => {
  elm.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    secondCursor.classList.add("hide");
    cursor.style.backgroundImage = `url(img/image-${index + 1}.jpeg)`;
  });
  elm.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    secondCursor.classList.remove("hide");
    cursor.style.backgroundImage = "";
  });
});
// Social link hovering
defaultHoverItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document.body.style.cursor = "auto";
    cursor.classList.add("hide");
    secondCursor.classList.add("hide");
  });
  item.addEventListener("mouseleave", () => {
    document.body.style.cursor = "none";
    cursor.classList.remove("hide");
    secondCursor.classList.remove("hide");
  });
});

// Initial animations
const tl = gsap.timeline();

tl.from("header h1", {
  delay: 0.5,
  duration: 2,
  y: -100,
  opacity: 0,
  ease: Expo.easeInOut,
})
  .from(".about", {
    duration: 1.5,
    y: 30,
    opacity: 0,
    ease: Expo.easeInOut,
  })
  .from(".social ul li", {
    duration: 1.5,
    y: 40,
    opacity: 0,
    ease: Expo.easeInOut,
    stagger: 0.5,
  })
  .from(".separator", {
    duration: 1.5,
    transform: "scale(0)",
    ease: Expo.easeInOut,
  })
  .from(".cycle-item", {
    duration: 1.0,
    transform: "scaleX(0)",
    ease: Expo.easeInOut,
    stagger: 0.6,
  })
  .from(".cycle-item > h2", {
    duration: 1.2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  })
  .from(
    ".cycle-item > p",
    {
      duration: 1.2,
      y: -20,
      opacity: 0,
      ease: Expo.easeInOut,
    },
    "-=0.4"
  );
