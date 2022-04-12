export function navBar() {
    window.addEventListener('scroll', (nav) => {
        nav = document.querySelector('header');
        nav.style.display = 'none';
    
        if(nav.style.display === 'none') {
            setTimeout(() => {
                nav.style.display = 'flex';
            }, 450);
        }
    })
}