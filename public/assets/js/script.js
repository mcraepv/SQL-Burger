$('.eat-btn').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  $.ajax(`/api/burgers/${id}`, {
    type: 'PUT',
  }).then(function () {
    location.reload();
  });
});

$('#add-btn').on('click', function (event) {
  event.preventDefault();
  const data = $('#burger-input').val();
  if (!data) return;

  $.ajax('/api/burgers', {
    type: 'POST',
    data: { burgerName: data },
  }).then(function () {
    location.reload();
  });
});

$('.delete-btn').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  $.ajax(`/api/burgers/${id}`, {
    type: 'DELETE',
  }).then(function () {
    location.reload();
  });
});
