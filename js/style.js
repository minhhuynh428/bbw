//bật tắt nút search
document.addEventListener("DOMContentLoaded", function () {
  var searchButton = document.querySelector(".js-expand-search");
  var searchWrapper = document.querySelector(".c-search-wrapper");
  var searchInput = document.querySelector(".c-search-input");
  searchButton.addEventListener("click", function (event) {
    searchWrapper.classList.toggle("active");
    if (searchWrapper.classList.contains("active")) {
      searchInput.focus(); // Đặt tiêu điểm vào input khi lớp 'active' được thêm vào
    }
    event.stopPropagation(); // Ngăn sự kiện click tiếp tục lan ra bên ngoài
  });

  document.addEventListener("click", function (event) {
    if (!searchWrapper.contains(event.target)) {
      searchWrapper.classList.remove("active");
    }
  });

  searchWrapper.addEventListener("click", function (event) {
    event.stopPropagation(); // Ngăn sự kiện click lan ra bên ngoài khi click bên trong searchWrapper
  });
});
//hiển thị nút viewall
document.addEventListener("DOMContentLoaded", function () {
  const viewallButton = document.querySelector(".c-menu-last");
  const target = document.querySelector(".c-menu-outer");

  function showMenu() {
    target.style.display = "block";
  }

  function hideMenu() {
    target.style.display = "none";
  }

  viewallButton.addEventListener("mouseenter", showMenu);
  viewallButton.addEventListener("mouseleave", function (event) {
    if (!target.contains(event.relatedTarget)) {
      hideMenu();
    }
  });

  target.addEventListener("mouseenter", showMenu);
  target.addEventListener("mouseleave", function (event) {
    if (!viewallButton.contains(event.relatedTarget)) {
      hideMenu();
    }
  });
});

// Chờ DOM load hoàn toàn
// document.addEventListener("DOMContentLoaded", function() {
//     // Chọn thẻ con có id là "hambuger-icon"
//     var hambugerIcon = document.getElementById("hambuger-icon");
//     var banner = document.querySelector(".l-banner")
//     // Gắn sự kiện click vào thẻ con
//     if (hambugerIcon) {
//         hambugerIcon.addEventListener("click", function() {
//             // Chọn thẻ có class "c-menu-overlay"
//             var menuOverlay = document.querySelector(".c-menu-overlay");

//             // Kiểm tra và toggle thuộc tính display
//             if (menuOverlay) {
//                 if (menuOverlay.style.display === "none" || menuOverlay.style.display === "") {
//                     menuOverlay.style.display = "block";
//                     banner.style.display= "none"
//                 } else {
//                     menuOverlay.style.display = "none";
//                     banner.style.display = "block";
//                 }
//             }
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Chọn thẻ con có id là "hambuger-icon"
  var hambugerIcon = document.getElementById("hambuger-icon");
  var banner = document.querySelector(".l-banner");
  var mobilenav = document.querySelector(".c-nav-mobile");
  // Gắn sự kiện click vào thẻ con
  if (hambugerIcon) {
    hambugerIcon.addEventListener("click", function () {
      // Chọn thẻ có class "c-menu-overlay"
      var menuOverlay = document.querySelector(".c-menu-overlay");

      // Kiểm tra và toggle lớp CSS
      if (menuOverlay) {
        menuOverlay.classList.toggle("visible");
        banner.classList.toggle("hidden");
        mobilenav.classList.toggle("active");
      }
    });
  }
});
