let headers = document.querySelector("header");
window.onscrollend = function () {
  if (this.scrollY >= 100) {
    headers.classList.add("active");
  }else {
    headers.classList.remove("active");
  }
}

// Toggle Menu
let ToggleBtn = document.getElementById("icone");
let nav = document.querySelector("nav");

ToggleBtn.onclick = function (e) {
  e.stopPropagation();
  nav.classList.toggle("open")
}

document.addEventListener("click", (e) => {
  if (e.target !== ToggleBtn && e.target !== nav) {
    if (nav.classList.contains("open")) {
      nav.classList.toggle("open")
    }
  }
})

nav.onclick = (e) => {
  e.stopPropagation();
}



let span = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 500) {
    span.classList.add("show");
  }else {
    span.classList.remove("show");
  }
}

span.onclick = () => {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
}











var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCurser: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
