document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: 'smooth'
        });
    });
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    alert('Thank you for reaching out! I will get back to you shortly.');
});

document.querySelector('.btn-primary').addEventListener('click', function () {
    window.location.href = 'your-resume.pdf'; 
});