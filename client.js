TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/256/6735/6735255.png',
      text: 'Claim Reward Energy!',
      callback: function(t) {
        return t.card().then(card => alert(`Hello from ${card.name} ${card.id}`))
      }
    }];
  },
});