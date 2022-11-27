TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/256/6735/6735255.png',
      text: 'Claim Reward!',
      callback: function(t) {
        t.card('id', 'name').then(card => {
          console.log(`Id: ${card.id}`);
          console.log(`name: ${card.name}`)
          return t.popup({
            title: "Reward",
            url: 'reward.html',
          })
        })
      }
    }];
  },
});