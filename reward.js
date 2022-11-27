var t = TrelloPowerUp.iframe();

var rewardBtn = document.querySelector('.add-reward');

rewardBtn.addEventListener('onclick', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared', 'estimate', window.estimateSize.value)
  .then(function(){
    console.log('Submit card')
    t.closePopup();
  });
});

t.render(function(){
  t.sizeTo('#reward').done();
});
