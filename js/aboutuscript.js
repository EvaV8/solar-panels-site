
let tabs = document.querySelectorAll('.tabs-toggle');
let contents = document.querySelectorAll('.tabs-content');

tabs.forEach((tab,index) => {
    tab.addEventListener('click',() => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
                
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
})

// testimonial section

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    
  });