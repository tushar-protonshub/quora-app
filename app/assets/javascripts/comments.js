(function() {
  $(document).on('turbolinks:load', function() {
    var hideComments;
    hideComments = function(elem) {
      $(elem).next().slideToggle();
      $(elem).find(".glyphicon").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
      $(elem).next().find('.comment').slideUp();
    };
    $('#answers').on('click', '.toggle-comments', function() {
      hideComments(this);
    });
    $('#answers').on('click', '.toggle-comment', function() {
      hideComments(this);
    });
  });

}).call(this);