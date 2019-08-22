(function() {
  $(document).on('turbolinks:load', function() {
    return $('.vote-buttons').on('click', 'a', function() {
      return $(this).siblings('a').andSelf().addClass('disabled');
    });
  });

}).call(this);