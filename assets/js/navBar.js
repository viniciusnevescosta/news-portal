export function navBar() {
    var lastScrollTop = 0;

    window.addEventListener("scroll", function(nav, footer) {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
        nav = document.querySelector('header');
        footer = document.querySelector('footer');

        if (st > lastScrollTop){
            nav.style.display = 'none';
            footer.style.display = 'none';
        } 
        else {
            nav.style.display = 'flex';
            footer.style.display = 'flex';
        }
    
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

}