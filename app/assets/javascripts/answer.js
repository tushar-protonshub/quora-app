(function() {
  $(document).on('turbolinks:load', function() {
    $('#answers').on('submit', '#new_answer', function() {
      return $('#new_answer > fieldset').prop('disabled', true);
    });
    $('#answers').on('submit', '.edit-form', function() {
      return $(this).find('> fieldset').prop('disabled', true);
    });
    return $('#answers').on('submit', '.delete-form', function() {
      return $(this).closest('fieldset').prop('disabled', true);
    });
  });

}).call(this);