var animateHTML = function() {
    var scrollElems;
    var mastheadElem;
    var windowHeight;
    function init() {
        scrollElems = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        checkPosition();

        mastheadElem = document.querySelector('.animate-in');

        addEventHandlers();

    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
        window.addEventListener('beforeunload', changeClass);
    }
    function checkPosition() {
        for (var i = 0; i < scrollElems.length; i++) {
            var positionFromTop = scrollElems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                scrollElems[i].className = scrollElems[i].className.replace(
                    'hidden',
                    'fade-in-element'
                );
            }
        }
    }
    function changeClass()
    {
        mastheadElem.classList.add("animate-out");
    }

    return {
        init: init
    };
};
animateHTML().init();

