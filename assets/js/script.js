// document.querySelector('.smooth').addEventListener('click', function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định

//     // Cuộn lên từ từ
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // Thêm hiệu ứng cuộn mượt
//     });
// });

const scrollButtons = document.querySelectorAll('.smooth');

scrollButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định

        // Cuộn lên từ từ
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Thêm hiệu ứng cuộn mượt
        });
    });
});