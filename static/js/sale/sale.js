$(document).ready(function() {
  $(".sale__parallax img").paroller({
    factor: 0.2,
    type: 'foreground',     // background, foreground
    direction: 'vertical', // vertical, horizontal
    transition: 'transform 0.1s ease' // CSS transition, added on elements where type:'foreground'
  });
});
