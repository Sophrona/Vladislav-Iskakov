$(function () {
  'use strict';

  const toggleCyberEye = () => {
    const homeSection = document.querySelector('.home');
    const eyeElement = document.querySelector('.cyber-eye');

    if (homeSection.classList.contains('active')) {
      setTimeout(() => {
        eyeElement.classList.add('cyber-eye--active');
      }, 1000);
    } else {
      eyeElement.classList.remove('cyber-eye--active');
    }
  };

  var win = $(window),
    htmlBody = $('html, body'),
    nav = $('.vertical-nav'),
    progressCheck = false;

  /*========== Loading  ==========*/
  $('.preloader')
    .delay(200)
    .fadeOut(700, function () {
      $(this).remove();
    });

  /*========== Color Switcher  ==========*/
  $('.switch-button').on('click', function () {
    $(this).addClass('hide');
    $('.switched-styles').addClass('show');
  });

  $('.switched-styles .hide-button').on('click', function () {
    $(this).parent().removeClass('show');
    $('.switch-button').removeClass('hide');
  });

  $('.switched-styles ul li').on('click', function () {
    $("link[href*='color']").attr(
      'href',
      'css/colors/' + $(this).data('color') + '_color.css'
    );
  });

  /*========== Active Menu  ==========*/
  $('.vertical-nav .toggle-menu').on('click', function () {
    nav.toggleClass('menu-active');
  });

  /*========== Smooth Scroll  ==========*/
  $('.vertical-nav .mini-menu > ul li a').on('click', function (e) {
    e.preventDefault();
    var selector = $(this);
    $('.vertical-nav').removeClass('menu-active');
    $(selector.attr('href'))
      .addClass('active')
      .siblings('section')
      .removeClass('active');

    toggleCyberEye();
  });

  $('.portfolio-link').on('click', function (e) {
    e.preventDefault();
    $('.home').removeClass('active');
    $('#portfolio').addClass('active');

    toggleCyberEye();
  });

  /*========== Skills Progress ==========*/
  function skillsPogress() {
    $('.progress-container').each(function () {
      var progressBar = $(this).find('.progress-bar');
      progressBar.css('width', progressBar.attr('aria-valuenow') + '%');
    });
  }

  // if (!progressCheck && $("#about").scrollTop() >= $(".skills").offset().top) {
  //   skillsPogress();
  //   progressCheck = true;
  // }

  $('#about').on('scroll', function () {
    // console.log($('#about').scrollTop());
    skillsPogress();
    progressCheck = true;

    // if (
    //   !progressCheck &&
    //   $("#about").scrollTop() >= $(".skills").offset().top
    // ) {
    //   skillsPogress();
    //   progressCheck = true;
    // }
  });

  /*========== Start Portfolio Trigger Filterizr Js  ==========*/
  $('#control li').on('click', function () {
    $(this).addClass('active').siblings('li').removeClass('active');
  });
  // The Filterizr
  $('#filtr-container').filterizr({
    animationDuration: 0.4,
  });

  /*========== Start Magnigic Popup Js ==========*/

  /*========== Ajax Contact Form  ==========*/
  $('.contact-form').on('submit', function () {
    var myForm = $(this),
      data = {};

    myForm.find('[name]').each(function () {
      var that = $(this),
        name = that.attr('name'),
        value = that.val();

      data[name] = value;
    });

    $.ajax({
      url: myForm.attr('action'),
      type: myForm.attr('method'),
      data: data,
      success: function (response) {
        if (response == 'success') {
          $('.contact-form').find('.form-message').addClass('success');
          $('.form-message span').text('Message Sent!');
        } else {
          $('.contact-form').find('.form-message').addClass('error');
          $('.form-message span').text('Error Sending!');
        }
      },
    });

    return false;
  });
});

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomJoke = () => {
  const jokes = [
    'Chuck Norris writes code...<br> that optimizes itself',
    'Programming is like sex: <br> one mistake and you have to support it for the rest of your life.',
    'Have you heard about the new Cray super computer? <br> It’s so fast, it executes an infinite loop in 6 seconds.',
    'Chuck Norris can take a screenshot of his blue screen',
    'Hide and seek champion... <br> ; <br> since 1958',
  ];

  return jokes[getRandomNumber(0, jokes.length - 1)];
};

const showRandomJoke = (() => {
  const joke = getRandomJoke();
  const textElement = document.querySelector('.home-joke');

  if (!textElement) return;

  textElement.innerHTML = joke;
})();

// const initTypewriter = () => {
//   const joke = getRandomJoke();

//   const el = document.querySelector('.home-text');

//   if (!el) return;

//   const typewriter = new Typewriter(el, {
//     cursor: '',
//     delay: 80,
//   });

//   typewriter.pauseFor(1500).start().typeString(joke);
// };
