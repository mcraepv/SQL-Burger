$('.eat-btn').on('click', function (a) {
  a.preventDefault();
  const b = $(this).data('id');
  $.ajax(`/api/burgers/${b}`, { type: 'PUT' }).then(function () {
    location.reload();
  });
}),
  $('#add-btn').on('click', function (a) {
    a.preventDefault();
    const b = $('#burger-input').val();
    b &&
      $.ajax('/api/burgers', { type: 'POST', data: { burgerName: b } }).then(
        function () {
          location.reload();
        }
      );
  }),
  $('.delete-btn').on('click', function (a) {
    a.preventDefault();
    const b = $(this).data('id');
    $.ajax(`/api/burgers/${b}`, { type: 'DELETE' }).then(function () {
      location.reload();
    });
  });
