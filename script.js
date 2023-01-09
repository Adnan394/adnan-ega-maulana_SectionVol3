let hero = document.querySelector(".hero");
hero.onmousemove = function (e) {
  let obj = document.querySelectorAll(".object").forEach((move) => {
    moving = move.getAttribute("data-value");
    let x = (e.pageX * moving) / 200;
    let y = (e.pageY * moving) / 200;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
};

// on load
let paint = document.getElementById("paint");
let navimg = document.getElementById("navimg");
let navbtn = document.getElementById("navbtn");
window.onload = () => {
  navimg.style.transform = "translateY(0)";
  navimg.style.opacity = "1";
  document.querySelectorAll(".nav-items").forEach(function (nav) {
    nav.style.transform = "translateY(0)";
    nav.style.opacity = "1";
  });
  navbtn.style.transform = "translateY(0)";
  navbtn.style.opacity = "1";
  document.querySelectorAll(".hero-items").forEach(function (hero) {
    hero.style.transform = "translateY(0)";
    hero.style.opacity = "1";
  });
};

// on scroll
let herocontent = document.querySelector(".hero-content");
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  console.log(scroll);
  herocontent.style.transform = "translateX(" + scroll + "px) translateY(" + scroll + "px)";

  let rentaltext = document.querySelector("#rental-text");
  let rentaljudul = document.querySelector("#rental-judul");
  if (scroll > 350 && scroll < 6750) {
    rentaljudul.style.transform = "rotate(0) translateX(0)";
    rentaljudul.style.opacity = "1";
    document.querySelectorAll(".rental-img").forEach(function (hero) {
      hero.style.transform = "translateY(0)";
      hero.style.opacity = "1";
    });
    rentaltext.style.transform = "rotate(0) translate(0)";
    rentaltext.style.opacity = "1";
  } else {
    document.querySelectorAll(".rental-img").forEach(function (hero) {
      hero.style.transform = "translateY(-50px)";
      hero.style.opacity = "0";
    });
    rentaljudul.style.transform = "rotate(25deg) translateX(-50px)";
    rentaljudul.style.opacity = "0";
    rentaltext.style.transform = "rotate(25deg) translate(-50px)";
    rentaltext.style.opacity = "0";
  }

  let unggul = document.querySelector("#keunggulan-judul");
  let unggultext = document.querySelector("#keunggulan-text");
  let unggulimg = document.querySelector("#keunggulan-img");
  if (scroll > 650) {
    unggul.style.transform = "translateY(0)";
    unggul.style.opacity = "1";
    unggultext.style.transform = "translateX(0)";
    unggultext.style.opacity = "1";
    unggulimg.style.transform = "translateX(0)";
    unggulimg.style.opacity = "1";
  } else {
    unggul.style.transform = "translateY(-50px)";
    unggul.style.opacity = "0";
    unggultext.style.transform = "translateX(100px)";
    unggultext.style.opacity = "0";
    unggulimg.style.transform = "translateX(-100px)";
    unggulimg.style.opacity = "0";
  }
  let unggultext2 = document.querySelector("#keunggulan-text2");
  let unggulimg2 = document.querySelector("#keunggulan-img2");
  if (scroll > 950) {
    unggultext2.style.transform = "translateX(0)";
    unggultext2.style.opacity = "1";
    unggulimg2.style.transform = "translateX(0)";
    unggulimg2.style.opacity = "1";
  } else {
    unggultext2.style.transform = "translateX(100px)";
    unggultext2.style.opacity = "0";
    unggulimg2.style.transform = "translateX(-100px)";
    unggulimg2.style.opacity = "0";
  }
  let unggultext3 = document.querySelector("#keunggulan-text3");
  let unggulimg3 = document.querySelector("#keunggulan-img3");
  if (scroll > 1200) {
    unggultext3.style.transform = "translateX(0)";
    unggultext3.style.opacity = "1";
    unggulimg3.style.transform = "translateX(0)";
    unggulimg3.style.opacity = "1";
  } else {
    unggultext3.style.transform = "translateX(100px)";
    unggultext3.style.opacity = "0";
    unggulimg3.style.transform = "translateX(-100px)";
    unggulimg3.style.opacity = "0";
  }
  let unggultext4 = document.querySelector("#keunggulan-text4");
  let unggulimg4 = document.querySelector("#keunggulan-img4");
  if (scroll > 1400) {
    unggultext4.style.transform = "translateX(0)";
    unggultext4.style.opacity = "1";
    unggulimg4.style.transform = "translateX(0)";
    unggulimg4.style.opacity = "1";
  } else {
    unggultext4.style.transform = "translateX(100px)";
    unggultext4.style.opacity = "0";
    unggulimg4.style.transform = "translateX(-100px)";
    unggulimg4.style.opacity = "0";
  }
});
