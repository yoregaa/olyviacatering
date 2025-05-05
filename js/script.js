// Ambil elemen yang dibutuhkan
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger");
let scrollPosition = 0;

// Toggle hamburger menu
hamburger.onclick = () => {
  const isActive = navbarNav.classList.contains("active");

  if (!isActive) {
    // Simpan posisi scroll dan kunci body
    scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  } else {
    // Kembalikan scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    window.scrollTo(0, scrollPosition);
  }

  navbarNav.classList.toggle("active");
};

// Tutup menu saat klik di luar hamburger/nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    if (navbarNav.classList.contains("active")) {
      navbarNav.classList.remove("active");
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, scrollPosition);
    }
  }
});

// Tutup menu jika link di dalam nav diklik
const navLinks = document.querySelectorAll(".navbar-nav a[href^='#']");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    if (navbarNav.classList.contains("active")) {
      navbarNav.classList.remove("active");
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, scrollPosition);
    }
  });
});

//-----------------------------------------------------------------------------

// //toggle class active

// const navbarNav = document.querySelector(".navbar-nav");


// //hamburger menu open
// document.querySelector("#hamburger").onclick = () => {
//   navbarNav.classList.toggle("active");
// };

// //closing sidebar when click outside

// const hamburger = document.querySelector("#hamburger");

// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });
