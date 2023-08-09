// document.addEventListener("DOMContentLoaded", function () {
//   const menuOpen = document.querySelector(".menu-toggle");
//   const menu = document.querySelector(".menu");
//   if (!menuOpen || !menu) return;
//   menuOpen.addEventListener("click", function () {
//     menu.classList.add("is-active");
//   });
//   document.addEventListener("click", function (e) {
//     if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//       menu.classList.remove("is-active");
//     }
//   });
// });

// const scroller = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });
// Function to toggle the mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu");

  if (menu) { 
    // Kiểm tra menu có tồn tại không

    if (!menu.classList.contains("is-active")) {
      menu.classList.add("is-active");
    } else {
      menu.classList.remove("is-active");
    }
  }

}

// Đóng menu khi click ngoài vùng menu
document.addEventListener("click", function(e) {

  const menu = document.querySelector(".menu");

  if (menu) {
    // Kiểm tra menu có tồn tại không

    const menuToggle = document.querySelector(".menu-toggle");

    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
      menu.classList.remove("is-active");
    }

  }

});


