// Lấy tất cả các thẻ <a> có href bắt đầu bằng #
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định

        const targetId = this.getAttribute('href').substring(1); // Lấy id của phần tử đích

        if (targetId === "") {
            // Nếu href="#" thì cuộn lên đầu trang
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Hiệu ứng cuộn mượt
            });
        } else {
            // Cuộn đến phần tử có id tương ứng
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // Lấy vị trí của phần tử đích
                    behavior: 'smooth' // Hiệu ứng cuộn mượt
                });
            }
        }
    });
});

const slides = document.querySelectorAll('.slide'); // Lấy tất cả các slide
let currentSlide = 0; // Chỉ số của slide hiện tại

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Gỡ bỏ lớp active
        if (i === index) {
            slide.classList.add('active'); // Thêm lớp active cho slide hiện tại
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Chuyển đến slide tiếp theo
    showSlide(currentSlide);
}

// Hiện slide đầu tiên
showSlide(currentSlide);
// Chuyển đổi mỗi 2 giây
setInterval(nextSlide, 5000);