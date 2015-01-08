window.onload = initAll();

function initAll() {

    function openMenu() {
        var list = this.querySelector('ol');
        list.classList.add('visible');
        list.addEventListener('mouseover', function() {
            this.classList.add('visible');
        })
        list.addEventListener('mouseout', function() {
            this.classList.remove('visible');
        })
    }

    function closeMenu() {
        var list = this.querySelector('ol');
        list.classList.remove('visible');
    }

    var nav = document.querySelector('nav ul'),
        navItem = nav.querySelectorAll('li');
    for(var n = 0; n < navItem.length; n ++) {
        var thisNavItem = navItem[n];
        thisNavItem.addEventListener('mouseover', openMenu)
        thisNavItem.addEventListener('mouseout', closeMenu);
    }

}


