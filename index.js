$('.toggle-menu')
  .click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });

//   GSAP

ScrollTrigger.defaults({markers: false})

var points = gsap
  .utils
  .toArray('.point');
var indicators = gsap
  .utils
  .toArray('.indicator');

var height = 100 * points.length;

gsap.set('.indicators', {display: "flex"});

var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".philosophie",
    start: "top center",
    end: "+=" + height + "%",
    scrub: true,
    id: "points"
  }
})

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".philosophie .wrapper",
    start: "top top",
    end: "+=" + height + "%",
    scrub: true,
    pin: ".philosophie .wrapper",
    pinSpacing: true,
    id: "pinning",
    markers: false
  }
})

points.forEach(function (elem, i) {
  gsap.set(elem, {
    position: "absolute",
    top: 0
  });

  tl.to(indicators[i], {
    backgroundColor: "#67412b",
    duration: 0.25,
    color: "white"
  }, i)
  tl.from(elem.querySelector('img'), {
    autoAlpha: 0
  }, i)
  tl.from(elem.querySelector('article'), {
    autoAlpha: 0,
    translateY: 100
  }, i)

  if (i != points.length - 1) {
    tl.to(indicators[i], {
      backgroundColor: "transparent",
      duration: 0.25,
      color: "black"
    }, i + 0.75)
    tl.to(elem.querySelector('article'), {
      autoAlpha: 0,
      translateY: -100
    }, i + 0.75)
    tl.to(elem.querySelector('img'), {
      autoAlpha: 0
    }, i + 0.75)
  }

});

//Modal 

$('.btn').click(function(){
    var buttonId = $(this).attr('id');
    $('.first').removeAttr('class').addClass(`${buttonId} first`);
    $('body').addClass('modal-active');
  })
  
  $('.first').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });



  $('.btn2').click(function(){
    var buttonId = $(this).attr('id');
    $('.second').removeAttr('class').addClass(`${buttonId} second`);
    $('body').addClass('modal-active second');
  })
  
  $('.second').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });
