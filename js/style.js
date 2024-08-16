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
        if (menuOverlay.classList.contains("visible")) {
          document.documentElement.style.overflowY = "hidden";
        } else {
          document.documentElement.style.overflowY = "auto";
        }
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var delta = 5;
  var banner = document.querySelector(".l-banner");
  var bannerHeight = banner.offsetHeight;
  var header = document.querySelector(".l-head");
  var navbarHeight = header.offsetHeight;
  var ticking = false;

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        hasScrolled();
        ticking = false;
      });
      ticking = true;
    }
  });
  // Yêu cầu requestAnimationFrame: Khi bạn gọi requestAnimationFrame, bạn đang yêu cầu trình duyệt gọi hàm callback của bạn (hàm chứa hasScrolled()) trong lần vẽ lại màn hình tiếp theo. Việc này không diễn ra ngay lập tức mà được lên lịch để thực hiện trước khi trình duyệt thực hiện lần vẽ lại tiếp theo (thường là khoảng 1/60 giây, tương đương với 60 lần mỗi giây nếu màn hình là 60Hz).

  // Đặt ticking = true ngay lập tức: Ngay sau khi yêu cầu requestAnimationFrame, bạn đặt ticking = true. Điều này giúp đảm bảo rằng không có yêu cầu requestAnimationFrame nào khác được gửi trong khi yêu cầu hiện tại vẫn đang chờ. Nếu bạn không làm điều này, có thể xảy ra nhiều sự kiện scroll trong thời gian ngắn và gửi nhiều yêu cầu requestAnimationFrame, dẫn đến việc hàm hasScrolled được gọi nhiều lần không cần thiết.

  // Thực thi hàm callback trong requestAnimationFrame: Khi trình duyệt chuẩn bị vẽ lại màn hình, nó sẽ thực thi hàm callback bạn đã cung cấp cho requestAnimationFrame. Trong hàm callback này, hasScrolled được gọi và ticking được đặt lại false để cho phép các yêu cầu mới sau khi hàm hiện tại hoàn thành.
  function hasScrolled() {
    var st = window.scrollY;

    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }
    if (st > lastScrollTop && st > navbarHeight) {
      header.classList.remove("shadow");
      header.classList.remove("adjust");
    } else {
      if (st >= bannerHeight + navbarHeight) {
        header.classList.add("ontop");
      }
      if (
        st + window.innerHeight < document.documentElement.scrollHeight &&
        st >= bannerHeight + navbarHeight
      ) {
        header.classList.remove("ontop");
        header.classList.add("adjust");
        header.classList.add("shadow");
      }
      if (st < bannerHeight) {
        header.classList.remove("adjust");
        header.classList.remove("shadow");
      }
    }

    lastScrollTop = st;
  }
});

//xử lý slider
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Ẩn tất cả các slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loại bỏ class 'active' khỏi tất cả các dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Hiển thị slide hiện tại và thêm class 'active' vào dot tương ứng
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
