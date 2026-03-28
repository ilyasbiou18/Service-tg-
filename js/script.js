// js/script.js

// ---------------------------
// رسالة تأكيد عند إرسال نموذج الاتصال
// ---------------------------
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    if(contactForm){
        contactForm.addEventListener("submit", function(e){
            e.preventDefault(); // منع إعادة تحميل الصفحة
            alert("شكراً لتواصلك معنا! سنرد عليك قريباً 💬");
            contactForm.reset(); // مسح البيانات بعد الإرسال
        });
    }

    // ---------------------------
    // تأثير Hover على البطاقات
    // ---------------------------
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // ---------------------------
    // Scroll animation (Fade in)
    // ---------------------------
    const fadeElements = document.querySelectorAll(".card, .hero, .services, .portfolio, .pricing");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.8s ease-out";
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(50px)";
        observer.observe(el);
    });
});

console.log("JS جاهز للعمل 🚀");
