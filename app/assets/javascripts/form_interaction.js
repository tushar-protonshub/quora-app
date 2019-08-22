(function() {
  $(document).on('turbolinks:load', function() {
    var hideForm, showForm;
    showForm = function(elem, formClass) {
      $(elem).parent().prev().find(formClass).show();
      $(elem).parent().prev().find(formClass + ' textarea').first().focus();
      $(elem).parent().hide();
    };
    hideForm = function(elem, formClass) {
      $(elem).closest(formClass).hide();
      $(elem).closest('.forms').next().show();
    };
    $('.input-group textarea').each(function() {
      this.setAttribute('style', 'min-height:34px;height:34px;overflow-y:hidden;');
    });
    $('#answers').on('input', '.input-group textarea', function() {
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 2 + 'px';
    });
    $('#answers').on('click', '.show-new-form', function() {
      showForm(this, '.new-form');
    });
    $('#answers').on('click', '.show-edit-form', function() {
      showForm(this, '.edit-form');
      $(this).parent().prevAll('.text:first').hide();
      $('textarea').trigger('input');
    });
    $('#answers').on('blur', '.new-form textarea', function() {
      if ($(this).val() === '') {
        hideForm(this, '.new-form');
      }
    });
    $('#answers').on('click', '.hide-edit-form', function() {
      hideForm(this, '.edit-form');
      $(this).closest('.forms').prevAll('.text:first').show();
      $(this).closest('.edit-form')[0].reset();
    });
  });

}).call(this);