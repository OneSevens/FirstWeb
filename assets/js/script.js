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
