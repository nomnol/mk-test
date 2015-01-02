    var navItem = document.querySelectorAll('.extra-cont');
    for(var n = 0; n < navItem.length; n ++) {
        navItem[n].addEventListener('mouseover', function(){
            var list = this.querySelector('ol');
            list.setAttribute('class', 'visible');
        })
        navItem[n].addEventListener('mouseout', function(){
            var thisItem = this;
            var list = thisItem.querySelector('ol');
            setTimeout(function (){
                list.setAttribute('class', '');
            }, 1500)
        })
    }













//$(function() {

/*
    var navItem = $('.main-nav .extra-cont');

    navItem.hover(function() {
        $(this).find('ol').fadeIn();
        $(this).find('.arrow').fadeIn();
    }, function() {
        $(this).find('ol').fadeOut(1000);
        $(this).find('.arrow').fadeOut(500);
    })
*/


/*
    navItem.on('mouseenter', function() {
        $(this).find('ol').show();
        $(this).find('.arrow').show();
    })
*/




/*
    navItem.hover(function() {
        $(this).find('ol').animate(1000);
        $(this).find('.arrow').animate(1000);
    })
*/

/*
    navItem.closest('li').on('mouseleave', function() {
        $(this).find('ol').fadeOut(1500);
        $(this).find('.arrow').fadeOut(1500);
    })
*/

//});
