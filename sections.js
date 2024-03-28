document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        item.classList.add('active');
    });
});
