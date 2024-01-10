function menuShow() {
    let menuMobile = document.querySelector('.menu-opener')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }   else {
        menuMobile.classList.add('open');
    }
        
}
