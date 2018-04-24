let curPage = 1;
let scrolling = true;
let viewscroll = false;
let hoverr = true;
let animationTime = 1;
let nexPage;
let lbutton = false;
let tl = new TimelineMax({
  repeat: 0
});
const left = $('.child-left-2>.left');
const scrollIn = $('.scroll-indicator');
const scrollIn2 = $('.scroll');
for (let i = 2; i <= 4; i++) {
  for (let j = 1; j <= 5; j++) {
    tl.set($('.child-left-' + i + '>.left' + j), {
      x: '+=100%'
    });
  }
}

function navigateDown() {
  if (scrolling && !viewscroll) {
    console.log('ww');
    scrolling = false;
    let tl = new TimelineMax({
      repeat: 0
    });
    for (let i = 1; i <= 5; i++) {
      if (i === 1 || i === 5) {
        tl.to([
          $('.child-left-' + curPage + '>.left' + i),
          $('.child-left-' + (curPage + 1) + '>.left' + i)
        ], animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut
        }, .3).to([
          
        ], animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut
        }, .3);
      } else if (i === 3) {
        tl.to([
          $('.child-left-' + curPage + '>.left' + i),
          $('.child-left-' + (curPage + 1) + '>.left' + i)
        ], animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut
        }, .15).to([
          
        ], animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut
        }, .15);
      } else {
        tl.to([
          $('.child-left-' + curPage + '>.left' + i),
          $('.child-left-' + (curPage + 1) + '>.left' + i)
        ], animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut
        }, .25).to([
          
        ], animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut
        }, .25);
      }
    }
    curPage++;
    $(curPage).addClass('active');
    if (curPage == 4) {
      scrollIn.addClass('opa');
      scrollIn2.addClass('opa');
    } else if (curPage != 4) {
      scrollIn.removeClass('opa');
      scrollIn2.removeClass('opa');
    }

    setTimeout(() => {
      scrolling = true
    }, 1300);
  }
}

function navigateUp() {
  if (scrolling && !viewscroll) {
    scrolling = false;
    let tl = new TimelineMax({
      repeat: 0
    });
    for (let i = 1; i <= 5; i++) {
      if (i === 1 || i === 5) {
        tl.to([
          $('.child-left-' + curPage + '>.left' + i),
          $('.child-left-' + (curPage - 1) + '>.left' + i)
        ], animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut
        }, .4).to([
          
        ], animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut
        }, .4);
      } else if (i === 3) {
        tl.to([
          $('.child-left-' + curPage + '>.left' + i),
          $('.child-left-' + (curPage - 1) + '>.left' + i)
        ], animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut
        }, .11).to([
          
        ], animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut
        }, .11);
      } else {
        tl.to([
          $('.child-left-' + curPage + '>.left' + i),
          $('.child-left-' + (curPage - 1) + '>.left' + i)
        ], animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut
        }, .25).to([
          
        ], animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut
        }, .25);
      }
    }
    curPage--;
    if (curPage == 4) {
      scrollIn.addClass('opa');
      scrollIn2.addClass('opa');
    } else if (curPage != 4) {
      scrollIn.removeClass('opa');
      scrollIn2.removeClass('opa');
    }

    setTimeout(() => {
      scrolling = true
    }, 1300);
  }
}

$(document).on("keydown", function (e) {
  if (e.which === 38) {
    if (curPage === 1) {
      return;
    }
    navigateUp();  
    $('.slide.active').removeClass('active').prev().addClass('temp');
    setTimeout(function(){
      $('.slide.temp').removeClass('temp').addClass('active'); 
    },1200);
  } else {
    if (curPage === 2) {
      return;
    }
    navigateDown();
    
    $('.slide.active').removeClass('active').next().addClass('temp');
    setTimeout(function(){
      $('.slide.temp').removeClass('temp').addClass('active'); 
    },1200);
  }
});

$(document).on("mousewheel DOMMouseScroll", function (e) {
  if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
    if (curPage === 1) {
      return;
    }
    navigateUp();  
    $('.slide.active').removeClass('active').prev().addClass('temp');
    setTimeout(function(){
      $('.slide.temp').removeClass('temp').addClass('active'); 
    },1200);
  } else {
    if (curPage === 2) {
      return;
    }
    navigateDown();
    
    $('.slide.active').removeClass('active').next().addClass('temp');
    setTimeout(function(){
      $('.slide.temp').removeClass('temp').addClass('active'); 
    },1200);
  }
});

$(window).on("load", function (e) {
  $('.slide:first-child').addClass('active');
});