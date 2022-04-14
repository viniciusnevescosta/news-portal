export function navBar() {
    window.addEventListener('scroll', (nav, footer) => {
        nav = document.querySelector('header');
        footer = document.querySelector('footer');

        nav.style.display = 'none';
        footer.style.display = 'none';
    
        if(nav.style.display === 'none') {
            setTimeout(() => {
                nav.style.display = 'flex';
                footer.style.display = 'flex';
            }, 450);
        }
    })
}