$('document').ready(ClockInitialized);

function ClockInitialized(){
    console.log("Clock App Ready");
}

setInterval(function setDate(){
    const now = new Date();
    const allHands = $('.hand');
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    $('.second-hand').css({ transform: 'rotate(' + secondsDegrees + 'deg)' });
    $('.min-hand').css({ transform: 'rotate(' + minsDegrees + 'deg)' });
    $('.hour-hand').css({ transform: 'rotate(' + hoursDegrees + 'deg)' });

    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')  // remove the all 0.05s transition
      } else {
        allHands.forEach(hand => hand.style.transition = '')      // using '' removes the inline style and reverts back to the stylesheet
      }

}, 1000);