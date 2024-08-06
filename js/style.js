//Xử lý hiển thị nút search
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

//Xử lý hiển thị nút viewall
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

//Xử lý sự kiện click vào menu trong mobile, ẩn hiện các phần tử cần thiết
document.addEventListener("DOMContentLoaded", function () {
  var hambugerIcon = document.getElementById("hambuger-icon");
  var banner = document.querySelector(".l-banner");
  var mobilenav = document.querySelector(".c-nav-mobile");
  var menuOverlay = document.querySelector(".c-menu-overlay");
  if (hambugerIcon) {
    hambugerIcon.addEventListener("click", function () {
      if (menuOverlay) {
        menuOverlay.classList.toggle("visible");
        banner.classList.toggle("hidden");
        mobilenav.classList.toggle("active");
        document.body.classList.toggle("hidden-scroll");
      }
    });
  }
});

//Tạo sticky cho thanh menu trên điện thoại khi scroll
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".l-head");
  var banner = document.getElementById("banner");
  var sticky = banner.offsetHeight;
  console.log(sticky);
  function myFunction() {
    if (window.scrollY >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  myFunction();
  window.addEventListener("scroll", myFunction);
});
