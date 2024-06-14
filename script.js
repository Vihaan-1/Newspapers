document.addEventListener('DOMContentLoaded', () => {
    const newsletters = [
        { title: "Newspaper One", file: "PDFs/NewspaperOne.pdf" },
        { title: "Newspaper Two", file: "PDFs/NewspaperTwo.pdf" },
        { title: "Newspaper Three", file: "PDFs/NewspaperThree.pdf" },
        { title: "Newspaper Four", file: "PDFs/NewspaperFour.pdf" },
        { title: "Newspaper Five", file: "PDFs/NewspaperFive.pdf" },
        { title: "Newspaper Six", file: "PDFs/NewspaperSix.pdf" },
        { title: "Newspaper Seven", file: "PDFs/NewspaperSeven.pdf" }
    ];

    const newsletterList = document.getElementById('newsletter-list');

    newsletters.forEach(newsletter => {
        const newsletterItem = document.createElement('div');
        newsletterItem.classList.add('newsletter-item');
        
        newsletterItem.innerHTML = `
            <h3>${newsletter.title}</h3>
            <a href="${newsletter.file}" target="_blank" class="read-link">Read</a>
            <a href="${newsletter.file}" download class="download-link">Download</a>
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
