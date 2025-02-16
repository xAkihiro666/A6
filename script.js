document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. I\'ll get back to you soon!',
        icon: 'success',
        confirmButtonColor: 'rgb(255, 65, 108)'
    }).then(() => {
        document.getElementById('contactForm').reset();
    });
});

const navItem = document.querySelector('.nav-item');

navItem.addEventListener('click', (event) => {
    event.preventDefault();
    Swal.fire({
        title: "Under Maintenance",
        text: "Portfolio is currently undergoing updates to improve your experience.",
        icon: "warning"
    });
});


window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > window.innerHeight * 0.9) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

document.querySelectorAll('.photo-item img').forEach(img => {
    img.addEventListener('click', () => {
        Swal.fire({
            imageUrl: img.src,
            imageAlt: img.alt,
            showConfirmButton: false,
            width: '90%',
            padding: '0',
            background: 'transparent',
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut'
            },
            customClass: {
                popup: 'swal-image-popup'
            }
        });
    });
});
