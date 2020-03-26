
const back_end_domain = 'http://35.225.243.133'

$(document).ready(function () {

    $('form').submit(function (e) {
        e.preventDefault();

        var form = new FormData(this);
        //form.append('image', $('[name="image"]')[0].files[0], $('[name="image"]').val());

        // console.log(form);

        $.ajax({
            url: `${back_end_domain}/accounts/api/register/`,
            method: 'POST',
            data: form,
            enctype: 'multipart/form-data',
            cache: false,
            processData: false,
            contentType: false,
            success: function (result, textStatus, xhr) {
                console.log(result);
                if (xhr.status === 201) {
                    window.location = 'login.html';
                } else {
                    alert('Sehvlik var!');
                }
            },
            error: function (errorResult) {
                var errors = errorResult.responseJSON;
                for (var error in errors) {
                    $(`input[name=${error}]`).siblings('small').text(errors[error]);
                }
                console.log(errorResult);
                console.log(errors);
            },
        })
    });

});

