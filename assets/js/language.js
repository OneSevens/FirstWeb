const translations = {
    en: {
        "nav.home": "HOME",
        "nav.products": "PRODUCTS",
        "nav.contact": "CONTACT",
        "slider.text1": "Fresh Taste,",
        "slider.text2": "Full of Health!",
        "slider.text3": "Experience the Taste,",
        "slider.text4": "Nothing Compares!",
        "slider.text5": "Good for Health,",
        "slider.text6": "Brings Joy!",
        "product.intro": "\"Imagine on a summer afternoon, enjoying a spoonful of cool yogurt. The sweet and creamy taste slowly melts away, leaving a gentle aftertaste on your tongue, making all your senses linger in that sweet moment.\"",
        "product.outro": "Thank you for visiting! We will soon update more exciting products, hoping to continue receiving your support.",
        "contact.address": "Address: Duc Hoa, Long An.",
        "contact.phone": "Phone:",
        "contact.mail": "Mail:",
        "contact.facebook": "Facebook:",
        "form_contact.title": "Contact Us",
        "form_contact.name_placeholder": "Full Name",
        "form_contact.phone_placeholder": "Phone Number", 
        "form_contact.email_placeholder": "Email",
        "form_contact.message_placeholder": "Message",
        "form_contact.submit_button": "Submit",
        "form_contact.name_required": "Please enter your name.",
        "form_contact.contact_required": "Please provide either a phone number or email address.",
        "form_contact.success": "Thank you! We will contact you as soon as possible."
    },
    vi: {
        "nav.home": "TRANG CHỦ",
        "nav.products": "SẢN PHẨM",
        "nav.contact": "LIÊN HỆ",
        "slider.text1": "Hương Vị Tươi Ngon,",
        "slider.text2": "Sức Khỏe Tràn Đầy!",
        "slider.text3": "Trải Nghiệm Vị Ngon,",
        "slider.text4": "Không Gì Bằng!",
        "slider.text5": "Tốt Cho Sức Khỏe,",
        "slider.text6": "Đem Lại Niềm Vui!",
        "product.intro": "\"Thử tưởng tượng vào một chiều hè, bạn thưởng thức một muỗng sữa chua mát lạnh. Vị ngọt thanh và béo nhẹ từ từ tan ra, để lại dư vị êm ái nơi đầu lưỡi, khiến mọi giác quan như lắng đọng trong khoảnh khắc ngọt ngào ấy.\"",
        "product.outro": "Chân thành cảm ơn mọi người đã ghé thăm! Chúng tôi sẽ sớm cập nhật thêm những sản phẩm mới hấp dẫn, mong tiếp tục nhận được sự ủng hộ từ các bạn.",
        "contact.address": "Địa chỉ: Đức Hòa, Long An.",
        "contact.phone": "Điện thoại:",
        "contact.mail": "Mail:",
        "contact.facebook": "Facebook:",
        "form_contact.title": "Liên Hệ Chúng Tôi",
        "form_contact.name_placeholder": "Họ và tên",
        "form_contact.phone_placeholder": "Số điện thoại",
        "form_contact.email_placeholder": "Email",
        "form_contact.message_placeholder": "Nội dung",
        "form_contact.submit_button": "Gửi",
        "form_contact.name_required": "Vui lòng nhập tên của bạn.",
        "form_contact.contact_required": "Vui lòng cung cấp số điện thoại hoặc email.",
        "form_contact.success": "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất có thể."
    }
};

function setLanguage(language) {
    if (!translations[language]) {
        console.error(`Language '${language}' not supported`);
        return;
    }

    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[language][key];
        
        if (!translation) {
            console.warn(`Translation missing for key: ${key} in language: ${language}`);
            return;
        }

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', language);

    // Update meta tags for SEO
    updateMetaTags(language);
}

function updateMetaTags(language) {
    if (!translations[language]) {
        console.error(`Language '${language}' not supported`);
        return;
    }

    const metaTags = {
        en: {
            title: "One Sevens Yogurt - High Quality Fresh Yogurt in Duc Hoa, Long An",
            description: "Enjoy One Sevens Yogurt - Handcrafted fresh yogurt, pure, no preservatives. Order online, delivery in Duc Hoa, Long An. ✓ Fresh ✓ Safe ✓ Nutritious"
        },
        vi: {
            title: "Sữa Chua One Sevens - Sữa Chua Tươi Ngon Chất Lượng Cao Tại Đức Hòa, Long An",
            description: "Thưởng thức sữa chua One Sevens - Sản phẩm sữa chua tươi thủ công, nguyên chất, không chất bảo quản. Đặt hàng online, giao hàng tận nơi tại Đức Hòa, Long An. ✓ Tươi ngon ✓ An toàn ✓ Dinh dưỡng"
        }
    };

    const { title, description } = metaTags[language];
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (metaDescription) metaDescription.setAttribute('content', description);
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
}

// Initialize language selector
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('languageSelector');
    if (!languageSelector) {
        console.error('Language selector element not found');
        return;
    }

    const flagImage = languageSelector.querySelector('img');
    if (!flagImage) {
        console.error('Flag image element not found');
        return;
    }

    // Set initial language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    const initialLanguage = savedLanguage || (browserLanguage === 'en' ? 'en' : 'vi');

    // Update flag image to match saved language
    flagImage.src = `./assets/img/${initialLanguage}-flag.png`;
    flagImage.dataset.lang = initialLanguage;

    // Update html class and content
    document.documentElement.className = `lang-${initialLanguage}`;
    setLanguage(initialLanguage);

    // Add click event listener for language switching
    languageSelector.addEventListener('click', () => {
        const currentLang = flagImage.dataset.lang;
        const newLang = currentLang === 'vi' ? 'en' : 'vi';

        // Update flag image
        flagImage.src = `./assets/img/${newLang}-flag.png`;
        flagImage.dataset.lang = newLang;

        // Update html class
        document.documentElement.className = `lang-${newLang}`;

        // Update content based on language
        setLanguage(newLang);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form_contact form');
    if (!form) {
        console.error('Contact form not found');
        return;
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';
        
        const currentLang = document.documentElement.className.includes('lang-en') ? 'en' : 'vi';
        
        if (!name) {
            alert(translations[currentLang]['form_contact.name_required']);
            return;
        }
        
        if (!phone && !email) {
            alert(translations[currentLang]['form_contact.contact_required']);
            return;
        }
        
        alert(translations[currentLang]['form_contact.success']);
    });
});