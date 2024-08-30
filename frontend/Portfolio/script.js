gsap.from("#nav", {
  y: -100,
  opacity: 0,
  duration: 1
})
gsap.from("#left-content > *", {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.5,
  delay: 0.5
})

gsap.from("#right-content img", {
  opacity: 0,
  scale: 0.8,
  duration: 1.3,
  delay: 1.5,
  
})


 

function handleClick(){
    const menuIcon = document.querySelector("#menu-icon");
    const mobileNav = document.querySelector("#mobile-nav");
    
    // Hide mobileNav by default
    mobileNav.classList.add("hidden");

    // Toggle mobileNav visibility on menuIcon click
    menuIcon.addEventListener("click", function() {
      mobileNav.classList.toggle("hidden");
    });
    }
  
  