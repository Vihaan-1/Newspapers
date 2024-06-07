document.addEventListener('DOMContentLoaded', () => {
    const newsletters = [
        { title: "January 2024", file: "NewspaperOne.pdf" },
        { title: "February 2024", file: "newsletter-feb-2024.pdf" },
        { title: "January 2024", file: "newsletter-jan-2024.pdf" },
        { title: "January 2024", file: "newsletter-jan-2024.pdf" },
        { title: "January 2024", file: "newsletter-jan-2024.pdf" },
        { title: "January 2024", file: "newsletter-jan-2024.pdf" },
      
    ];

    const newsletterList = document.getElementById('newsletter-list');

    newsletters.forEach(newsletter => {
        const newsletterItem = document.createElement('div');
        newsletterItem.classList.add('newsletter-item');
        
        newsletterItem.innerHTML = `
            <h3>${newsletter.title}</h3>
            <a href="pdfs/${newsletter.file}" target="_blank" download>Read</a>
            <a href="pdfs/${newsletter.file}" download>Download</a>
        `;

        newsletterList.appendChild(newsletterItem);
    });

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }

    navSlide();
});
