export function splash() {
    window.addEventListener('load', () => {   
        setTimeout((screen) => {
            screen = document.querySelector('.splash');
            screen.classList.remove("splash--active");
            sessionStorage.setItem('Splash', true);
        }, 2500)
    })
}