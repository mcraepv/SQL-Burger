$('.eat-btn').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');
  console.log(id);

  $.ajax(`/api/burgers/${id}`, {
    type: 'PUT',
  }).then(function () {
    console.log('Burger eaten.');
    location.reload();
  });
});

$('#add-btn').on('click', function (event) {
  event.preventDefault();
  const data = $('#burger-input').val();
  console.log(data);
  if (!data) return;

  $.ajax('/api/burgers', {
    type: 'POST',
    data: { burgerName: data },
  }).then(function () {
    console.log('Burger added!');
    location.reload();
  });
});

$('.delete-btn').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');
  console.log(id);

  $.ajax(`/api/burgers/${id}`, {
    type: 'DELETE',
  }).then(function () {
    console.log('Burger deleted.');
    location.reload();
  });
});
