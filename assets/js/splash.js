export function splash() {
    window.addEventListener('load', () => {   
        setTimeout((screen) => {
            screen = document.querySelector('.splash');
            screen.classList.remove("splash--active");
        }, 2500)
    })
}