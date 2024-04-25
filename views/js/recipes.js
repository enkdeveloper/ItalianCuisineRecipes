document.addEventListener('DOMContentLoaded', function() {
    const currentPage = parseInt('<%= currentPage %>'); 

    const pageLinks = document.querySelectorAll('.page-link'); 

    pageLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            const nextPage = parseInt(this.getAttribute('href').split('=')[1]); 

            const activePageLink = document.querySelector('.page-item.active .page-link');
            if (activePageLink) {
                activePageLink.parentNode.classList.remove('active');
                activePageLink.style.backgroundColor = ''; 
            }

            this.parentNode.classList.add('active');
            this.style.backgroundColor = '#ff6961';

            if (nextPage !== currentPage) {
                window.location.href = this.getAttribute('href');
            }
        });
    });
});
