var t = TrelloPowerUp.iframe();

document.getElementById('add-reward').addEventListener('click', function(event){
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
