document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.right-scroll section');
    const navLinks = document.querySelectorAll('.sidebar a');

    function setActiveLink() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            if (section.offsetTop <= scrollPos + 150 && (section.offsetTop + section.offsetHeight) > scrollPos + 150) {
                navLinks.forEach((link) => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});
