document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId) || document.querySelector(`[name="${targetId}"]`);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });

        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.3s ease';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });

    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.03)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    const socialLinks = document.querySelectorAll('.social-links li a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2)';
            link.style.color = '#f472b6';
            link.style.transition = 'transform 0.3s ease, color 0.3s ease';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.color = 'white';
        });
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#f472b6';
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'rgb(228, 19, 19)';
            button.style.transform = 'scale(1)';
        });
    });

    const adjustLayout = () => {
        const profileSection = document.querySelector('.profile');
        const nav = document.querySelector('.nav');
        if (window.innerWidth < 768) {
            if (profileSection) {
                profileSection.style.flexDirection = 'column';
                profileSection.style.textAlign = 'center';
            }
            if (nav) {
                nav.style.flexDirection = 'column';
                nav.querySelectorAll('ul').forEach(ul => {
                    ul.style.gap = '20px';
                });
            }
        } else {
            if (profileSection) {
                profileSection.style.flexDirection = 'row';
                profileSection.style.textAlign = 'left';
            }
            if (nav) {
                nav.style.flexDirection = 'row';
                nav.querySelectorAll('ul').forEach(ul => {
                    ul.style.gap = '40px';
                });
            }
        }
    };

    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});