TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/256/6735/6735255.png',
      text: 'Claim Reward!',
      callback: function(t) {
        return t.popup({
          title: "Reward Chest",
          url: 'https://lustrous-bubblegum-0acd0e.netlify.app/',
        })
      }
    }];
  },
});
