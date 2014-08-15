window.onload = function () {
  var t1 = new TimelineLite();
  var logoFrom = {
    scale:1,
    top: "-100px",
    left: "-100px",
    opacity: 0, 
    rotation: "-3rad",
    ease: Back.easeOut
  }

  t1.from('.big-cy', 0.4, {scale:0,ease:Bounce.easeOut})
    .from(['.middle-cy','.small-cy'], 0.4, {scale:0, top:30, left:100,ease:Bounce.easeOut} )
    .from('.logo', 0.7, logoFrom, '-=0.4', '-=0.3')
    .from('.arrow', 0.5, {left:'50%', right:50, scale:0,opacity:0} )
    .staggerFrom(['h1', 'h2'], 0.5, {top:"-=30px", rotation:"-40deg", alpha:0, scale:1.8, ease:Back.easeOut}, '-=0.3')
    .staggerFrom('.bottom-sec p', 1, {marginLeft:'-180px', opacity:0});
}