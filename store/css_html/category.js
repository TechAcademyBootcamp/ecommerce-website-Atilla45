
// const back_end_domain = 'http://35.225.243.133'

//     $('form').submit(function (e) {
//         e.preventDefault();

//         var form = new FormData(this);
//         if ($('[name="main_image"]')[0].files.length !== 0) {
//             form.append('icon_svg', $('[name="icon_svg"]')[0].files[0], $('[name="icon_svg"]').val());
//         }


//         $.ajax({
//             url: `${back_end_domain}/api/category/`,
//             method: 'POST',
//             data: form,
//             enctype: 'multipart/form-data',
//             cache: false,
//             processData: false,
//             contentType: false,
//             success: function (result, textStatus, xhr) {}
               
//             error: function (errorResult) {
//                 var errors = errorResult.responseJSON;
//                 if (errors.hasOwnProperty('non_field_errors')) {
//                     $('#non_field_errors').text(errors['non_field_errors']);
//                 }
//                 for (var error in errors) {
//                     $(`input[name=${error}]`).siblings('small').text(errors[error]);
//                 }
//                 if (errorResult.statusText === 'error') {
//                     window.location = 'login.html';
//                 }
//                 console.log(errorResult);
//                 console.log(errors);
//             },
//         })
//     });

// });

