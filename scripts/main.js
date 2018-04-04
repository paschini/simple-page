(function() {
  
  var toggleMenu = function (event) {
    //runs on "toggler" click event

    if (slideMenu.style.display == 'inline-block') {
        console.log(event.target.parentNode.parentNode.id);
        

        if (event.target.parentNode.parentNode.id == 'closeMenu') {
          hidesEverything();
        }

        slideMenu.style.animationName = 'slideout';
        window.setTimeout(function () {
          // wait for the transition to finish
           slideMenu.style.display= 'none';
        }, 500);
      }
      else {
        slideMenu.style.animationName = 'slidein';
        slideMenu.style.display = 'inline-block';
      }
    };
 
    var hidesEverything = function () {
      var slideMenu = document.getElementById('slideMenu');

      if (slideMenu.style.display == 'inline-block') {
        slideMenu.style.animationName = 'slideout';
        window.setTimeout(function () {
          // wait for the transition to finish
           slideMenu.style.display= 'none';
        }, 500);
      } 
    };

    var handlesClick = function (event) {
      if (event.target.tagName !== 'svg' && event.target.tagName !== 'path') {
        hidesEverything();
      }
      
    };
  
  
  var initialize = function() {
    var toggler = document.getElementsByClassName('toggler');
    var slideMenu = document.getElementById('slideMenu');

    for ( i=0; i<toggler.length; i++) {
      //adds click listeners to all menu togglers
      toggler[i].addEventListener('click', toggleMenu);
    }

    window.addEventListener('click', handlesClick);
  };

  initialize();
})();
