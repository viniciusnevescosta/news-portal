export function splash() {
    window.addEventListener('load', (data) => {
        data = sessionStorage.getItem('Splash');
    
        if (data === 'false') {
            setTimeout((screen) => {
                screen = document.querySelector('.splash');
                screen.classList.remove("splash--active");
                sessionStorage.setItem('Splash', true);
            }, 2500)
        }
        else {
            const screen = document.querySelector('.splash');
            screen.classList.remove("splash--active");
            sessionStorage.setItem('Splash', false);
        }
    })
}