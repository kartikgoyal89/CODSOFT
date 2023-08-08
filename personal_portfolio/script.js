function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  var tl = gsap.timeline();

  gsap.from('.desktop-nav',{
    opacity:0,
    y:-100,
    duration:0.7,
    delay:0.7,
    stagger: 0.2
  })
  gsap.from('.fst_image',{
    x:-100,
    opacity:0,
    duration:1,
    delay:1.5
  })
  // gsap.from('.title,.section__text__p1,.section__text__p2',{
    gsap.from('.text',{
    x:200,
    opacity:0,
    duration:1,
    delay:2,
    stagger:0.5
  })
  gsap.from(".btn-container,#socials-container",{
    opacity:0,
    delay:3.9
  })

gsap.from("#about .title",{
  opacity:0,
  x: -100,
  duration:1,
  delay:1,
  scrollTrigger: "#about .title",
})
gsap.from('.about-txt',{
  opacity:0,
  x:100,
  duration:1,
  delay:1,
  scrollTrigger: ".about-txt"
})

gsap.from(".about-pic",{
  opacity: 0,
  x:-100,
  scale:2,
  duration:1,
  delay:1.7,
  scrollTrigger: ".about-pic"
})

gsap.from('.exp-p1',{
  opacity:0,
  x:100,
  duration:1,
  delay:1,
  scrollTrigger: ".exp-p1"
})

gsap.from(".exp-title",{
  opacity: 0,
  x:-100,
  duration:1,
  delay:1.7,
  scrollTrigger: ".exp-title"
})


gsap.from(".exp-container",{
  opacity:0,
  x:100,
  delay:1,
  duration:1,
  scrollTrigger: ".experience-sub-title",
  stagger:0.2
})

gsap.from(".article-container",{
  opacity:0,
  scale:0.5,
  delay:1,
  duration:1,
  scrollTrigger: ".article-container"
})

gsap.from(".cnt-p1,.cnt-title",{
  opacity:0,
  x:-100,
  duration:2,
  delay:1,
  scrollTrigger:true,
  stagger: 0.3
})