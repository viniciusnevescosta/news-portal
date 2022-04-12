export function scroll() {
    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
        if (scrollTop + clientHeight >= scrollHeight -5) {
            console.log('oi')
        }
    })
}
