$(function(){

    $('.block-intro-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false
    });

    $('.block-slider').slick({
        infinite: true,
        arrows: true
    });

    $('.team-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'team__slider__dots'
      });

    
      let burgerMenu = document.querySelector('.block-header-menu');

      burgerMenu.addEventListener('click', function (e){
        e.preventDefault;
        let menuNav = document.querySelector('.menu-nav');

        (this).classList.toggle('block-header-menu_active');
        menuNav.classList.toggle('menu-nav_active');

      });



      // video

      let video = document.querySelector('video');
      let playIcon = document.querySelector('.video__play__btn');
      let playButton = document.querySelector('.block-video_btn');
      let videoPoster = document.querySelector('.video__poster');

      if (video) {
        video.addEventListener('click', function () {
          if (video.paused) {
            video.play();
            playIcon.classList.add('play__btn__hide');
            videoPoster.classList.add('video__poster__hide');

          } else {
            video.pause();
            playIcon.classList.remove('play__btn__hide');
            videoPoster.classList.remove('video__poster__hide');
          }
        });

        if(playIcon) {
          playIcon.addEventListener('click', function () {
            if(video.paused) {
              video.play();
              playIcon.classList.add('play__btn__hide');
              videoPoster.classList.add('video__poster__hide');
            }
          });
        }

        if(playButton) {
          playButton.addEventListener('click', function () {
            if(video.paused) {
              video.play();
              playIcon.classList.add('play__btn__hide');
              videoPoster.classList.add('video__poster__hide');
            }
          });
        }
      }


});
