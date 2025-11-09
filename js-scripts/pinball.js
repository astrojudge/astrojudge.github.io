jQuery(document).ready(function($) {

  /******************************
  
  MAIN TIMELINE, SELECTORS, AND TIME VARIABLE DECLARATION
  
  ******************************/
  
  var pinballTL = new TimelineMax({ // declare the main TL
    delay: 0.5,
    repeat: -1,
    repeatDelay: 2,
  });
  
  //first set of arrows to the right
  var $arrows1 = $('.BKGD__Arrows1 g');
  
  //first curve on the right
  var $curveHolder = $('.BKGD_Curve1');
  var $curve1 = $('.Curve1_Curve');
  
  //second set of arrows, top right following the curve
  var $arrows2 = $('.BKGD__Arrows2 g');
  
  //large arrow and large arrow container.
  var $LArrowHolder = $('.BKGD_LargeArrow');
  var $LArrow = $('.LargeArrow_Large1');
  
  //left and right top bumpers, below large arrow
  var $LTB = $('.TOP__LTB');
  var $RTB = $('.TOP__RTB');
  
  //left circle bumper and components.
  var $LBUMP = $('.TOP__LBumper');
  var $LBStars = $('.LBumper_Stars polygon');
  var $LBWord = $('.LBumper_Word path');
  var $LBSpikes = $('.LBumper_Spikes polyline');
  var $LBIC = $('.LBumper_InnerCircle')
  
  //middle circle bumper and components.
  var $CBUMP = $('.TOP__CBumper');
  var $CBStars = $('.CBumper_Stars polygon');
  var $CBWord = $('.CBumper_Word path');
  var $CBSpikes = $('.CBumper_Spikes polyline');
  var $CBIC = $('.CBumper_InnerCircle')
  
  //right circle bumper and components.
  var $RBUMP = $('.TOP__RBumper');
  var $RBStars = $('.RBumper_Stars polygon');
  var $RBWord = $('.RBumper_Word path');
  var $RBSpikes = $('.RBumper_Spikes polyline');
  var $RBIC = $('.RBumper_InnerCircle')
  
  //left and right line bumpers
  var $LLB = $('.TOP__LLB');
  var $RLB = $('.TOP__RLB');
  
  //left and right flippers
  var $RFlip = $('.Flipper_Right');
  var $RFShadow = $('.RF_Shadow');
  
  var $LFlip = $('.Flipper_Left');
  var $LFShadow = $('.LF_Shadow');
  
  //time variables
  var $CBTime = 0.08;
  var $LBTime = 0.1;
  var $FTime = 0.1;
  var $ATime = 0.1;
  var $LATime = 0.1;
  var $CTime = 0.24;

  /******************************
  
  ARROW ANIMATION
  
  ******************************/

  function arrowAnimation(selector1, delay) {
    arrowsTL = new TimelineMax({
      delay: delay
    }); // declare secondary arrow set TL
  
    selector1.each(function(index, element){
      var $arrowHolder = $(this);
      var $arrow = $(this).find('path')
      arrowsTL.to($arrowHolder, $ATime, {opacity: 1}, )
      .to($arrow, $ATime, {fill: '#fff'}, '-=' + $ATime);
    });
    
    pinballTL.add(arrowsTL);
  }

  /******************************
  
  TOP RIGHT CURVE TL
  
  ******************************/
  
  Curve1 = new TimelineMax(); // declare top right curve TL
  
  Curve1.to($curveHolder, $CTime, {opacity: 1},0)
  .to($curve1, $CTime, {fill: '#fff'},0);
  
  
  /******************************
  
  LARGE CENTER ARROW AND TOP BUMPERS TL
  
  ******************************/
  
  LArrow = new TimelineMax(); // declare top large arrow TL
  
  LArrow.to($LArrowHolder, $LATime, {opacity: 1})
  .to($LArrow, $LATime, {fill: '#fff'}, 0)
  .to($LTB, $LATime, {scale: 1.1}, 0)
  .to($LArrowHolder, $LATime, {opacity: 0.4}, 0.1)
  .to($LArrow, $LATime, {fill: 'rgb(93, 76, 144)'}, 0.1)
  .to($LTB, $LATime, {scale: 1}, 0.1) // one full blink.
  .to($LArrowHolder, $LATime, {opacity: 1}, 0.2)
  .to($LArrow, $LATime, {fill: '#fff'}, 0.2)
  .to($RTB, $LATime, {scale: 1.1},0.2)
  .to($LArrowHolder, $LATime, {opacity: 0.4},0.3)
  .to($LArrow, $LATime, {fill: 'rgb(93, 76, 144)'}, 0.3)
  .to($RTB, $LATime, {scale: 1},0.3) // a second full blink.
  .to($LArrowHolder, $LATime, {opacity: 1}, 0.5)
  .to($LArrow, $LATime, {fill: '#fff'}, 0.5)
  .to($LTB, $LATime, {scale: 1.1}, 0.5)
  .to($LArrowHolder, $LATime, {opacity: 0.4}, 0.6)
  .to($LArrow, $LATime, {fill: 'rgb(93, 76, 144)'}, 0.6)
  .to($LTB, $LATime, {scale: 1}, 0.6); // the third blink with a slight delay
  
  /******************************
  
  LINE BUMPER ANIMATION
  
  ******************************/
  
  function linebumperAnimation(selector1, delay) {
    lbaTL = new TimelineMax({
      delay: delay,
      yoyo: true,
      repeat: 1
    }); // declare top large arrow TL
  
    lbaTL.to(selector1, $LBTime, {scale: 1.1}, 0);
    
    pinballTL.add(lbaTL);
  }

  /******************************
  
  CIRCLE BUMPER ANIMATION FUNCTION
  
  ******************************/

  function bumperAnimation(selector1, selector2, selector3, selector4, selector5, delay) {
    
    CBumperTL = new TimelineMax({ // declare main center bumper TL
      delay: delay,
      yoyo: true,
      repeat: 1
    });
    
    starsTL = new TimelineMax(); // stars TL for CB
    wordTL = new TimelineMax(); // word TL for CB
    spikesTL = new TimelineMax(); // spikes TL for CB

    selector3.each(function(index, element){    
      var $star = $(this);
      starsTL.to($star, $CBTime, {fill: '#E44182'}, 0);
    });

    selector4.each(function(index, element){   
      var $letter = $(this);    
      wordTL.to($letter, $CBTime, {fill: '#377DA9'}, 0);
    });

    selector5.each(function(index, element){    
      var $spike = $(this);
      spikesTL.to($spike, $CBTime, {fill: '#FCE1EC'}, 0);
    });
    
    CBumperTL.add(starsTL, 0); // add stars TL to CB TL
    CBumperTL.add(wordTL, 0); // add word TL to CB TL
    CBumperTL.add(spikesTL, 0); // add spikes TL to CB TL
    CBumperTL.to(selector2, $CBTime, {fill: '#1C91AB'}, 0); // transition inner circle to blue color
    CBumperTL.to(selector1, $CBTime, {scaleY: 1.05}, 0);
    pinballTL.add(CBumperTL);
  }
  
  /******************************
  
  LINE BUMPER ANIMATION
  
  ******************************/

  function flipperAnimation(selector1, selector2, rotation, origin, delay) {
    flipTL = new TimelineMax({
      delay: delay,
      yoyo: true,
      repeat: 1
    }); // declare top large arrow TL
  
    flipTL.to(selector1, $FTime, {rotation: rotation, transformOrigin: origin}, 0)
    .to(selector2, $FTime, {rotation: rotation, transformOrigin: origin}, 0);
    
    pinballTL.add(flipTL);
  }
  
  /******************************
  
  fade all items out function
  
  ******************************/
  
  function fadeOut(selector1, selector2, selector3, selector4) {
    fadeTL = new TimelineMax(); // declare top large arrow TL
    
    selector1.each(function(index, element){
      var $arrowHolder = $(this);
      var $arrow = $(this).find('path')
      fadeTL.to($arrowHolder, 0.1, {opacity: 0.4}, 0)
      .to($arrow, 0.1, {fill: 'rgb(0, 178, 234)'}, 0);
    });
    selector2.each(function(index, element){
      var $arrowHolder = $(this);
      var $arrow = $(this).find('path')
      fadeTL.to($arrowHolder, 0.1, {opacity: 0.4}, 0)
      .to($arrow, 0.1, {fill: 'rgb(0, 178, 234)'}, 0);
    });
    
    fadeTL.to(selector3, 0.1, {opacity: 0.4}, 0);
    fadeTL.to(selector4, 0.1, {fill: 'rgb(0, 178, 234)'}, 0);
    
    pinballTL.add(fadeTL);
  }
  
  /******************************
  
  STRUCTURING AND PLAYING THE ANIMATION, HERE'S WHERE THE ORDER IS SET.
  
  ******************************/
  
  arrowAnimation($arrows1, 0);
  pinballTL.add(Curve1); // add top right curve TL to main TL
  arrowAnimation($arrows2, 0);
  fadeOut($arrows1, $arrows2, $curveHolder, $curve1);
  pinballTL.add(LArrow); // add large arrow to timeline
  bumperAnimation($CBUMP, $CBIC, $CBStars, $CBWord, $CBSpikes, 0.1);
  linebumperAnimation($LLB, 0.1);
  bumperAnimation($LBUMP, $LBIC, $LBStars, $LBWord, $LBSpikes, 0.1);
  linebumperAnimation($RLB, 0.1);
  bumperAnimation($RBUMP, $RBIC, $RBStars, $RBWord, $RBSpikes, 0.1);
  linebumperAnimation($RLB, 0.1);
  bumperAnimation($RBUMP, $RBIC, $RBStars, $RBWord, $RBSpikes, 0.1);
  bumperAnimation($CBUMP, $CBIC, $CBStars, $CBWord, $CBSpikes, 0.1);
  bumperAnimation($RBUMP, $RBIC, $RBStars, $RBWord, $RBSpikes, 0.1);
  bumperAnimation($CBUMP, $CBIC, $CBStars, $CBWord, $CBSpikes, 0.1);
  flipperAnimation($RFlip, $RFShadow, 25, '100% 0', 0.1)
  bumperAnimation($CBUMP, $CBIC, $CBStars, $CBWord, $CBSpikes, -0.1);
  flipperAnimation($LFlip, $LFShadow, -25, "0 0", 0.1)
  bumperAnimation($CBUMP, $CBIC, $CBStars, $CBWord, $CBSpikes, -0.1);
  pinballTL.play(); // play main TL
});