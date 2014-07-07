$(document).ready(function() {
    $("#owl-example").owlCarousel({
        //autoPlay: 10000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
    $('.loginTrigger').click(function (e) {
        e.preventDefault();
        $('.login-drop-down').slideToggle();
        $('.loginTrigger').toggleClass('color-blue-toggle');
        $('.header-transparent').toggleClass('background-toggle');
    });

    $('#dropUptrigger').click(function (e) {
        e.preventDefault();
        $('.ul-books-dropup').slideToggle(300);
    });

    $('#AGDU-slideTrigger').click(function (e) {
        e.preventDefault();
        $('.ul-aggiegear-dropup').slideToggle();
    });

});
$("#owl-example").owlCarousel({
 
    // Most important owl features
    items : 5,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
 
    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    //Autoplay
    autoPlay : false,
    stopOnHover : false,
 
    // Navigation
    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,
 
    //Pagination
    pagination : true,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
 
    //Auto height
    autoHeight : false,
 
    //JSON 
    jsonPath : false, 
    jsonSuccess : false,
 
    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
 
    //Transitions
    transitionStyle : false,
 
    // Other
    addClassActive : false,
 
    //Callbacks
    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false, 
    afterInit: false, 
    beforeMove: false, 
    afterMove: false,
    afterAction: false,
    startDragging : false,
    afterLazyLoad : false,
 
});


/*function toggleVisiblity(){
    var newVar = document.getElementById("change-color-login");
    var backgroundStyle = document.getElementById("background-style");
    var elem = document.getElementById("login-dropdown");
    if (elem.style.display == 'none'){
        elem.style.display = 'block';
        newVar.style.color = "Black";
    }
    else{
        elem.style.display = 'none';
        newVar.style.color = "Blue";
    }
    
    if(newVar.style.color == 'blue'){
        newVar.style.color = 'black';
    }
    else{
        newVar.style.color = 'blue';
    }

    if(backgroundStyle.style.background != 'rgba(256, 256, 256, 0.9)'){
        backgroundStyle.style.background = 'rgba(256, 256, 256, 0.9)';
    }
    else{
        backgroundStyle.style.background = 'rgba(256, 256, 256, 0.2)';
    }
};*/
