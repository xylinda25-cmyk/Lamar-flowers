alert('أهلاً بك في متجر الود! 🌸 نتشرف بزيارتك');

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'welcomeBtn') {
        alert('كود الخصم: LOVE2026');
    }
});
