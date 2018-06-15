(function(Drupal, Modernizr) {

  Drupal.behaviors.retroEmoji = {
    attach: function(context) {
      if (Modernizr.emoji) {
        alert('🎉');
      } else {
        console.log('no emoji for you');
      }
    }
  }

})(Drupal, Modernizr);
