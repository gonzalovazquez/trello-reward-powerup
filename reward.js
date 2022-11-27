var t = TrelloPowerUp.iframe();

document.getElementById('add-reward').addEventListener('click', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared')
  .then(function(){
    console.log('Submit card')
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'shared')
  .then(function(card){
    console.log(card)
  })
  .then(function(){
    t.sizeTo('#reward').done();
  })
});
