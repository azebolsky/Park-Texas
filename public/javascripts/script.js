$('.edit-form').hide();
$('#body-edit').click(function(evt) {
    if (evt.target.className !== 'edit-submit') return;
    let btnId = evt.target.dataset.set;
    $(`.edit-form[data-set="${btnId}"]`).toggle();
    $('#body-edit').hide();
})

$('.edit-form').submit(function() {
    $('#body-edit').show();
})