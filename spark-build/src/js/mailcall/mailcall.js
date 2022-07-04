import '@popperjs/core';
import 'bootstrap';
import * as toast from 'izitoast';
import 'bootstrap-icons/font/bootstrap-icons.css';
import $ from 'jquery';

console.log('Loaded mailcall');

const formdata = {
    to: '',
    from: '',
    subject: '',
    cc: '',
    body: '',
};

$('.form-field').on('change', function () {
    formdata.to = encodeURIComponent($('#to-field').val());
    formdata.from = encodeURIComponent($('#from-field').val());
    formdata.subject = encodeURIComponent($('#subject-field').val());
    formdata.cc = encodeURIComponent($('#cc-field').val());
    formdata.body = encodeURIComponent($('#body-field').val());

    const mailto = `mailto:${formdata.to}?from=${formdata.from}&subject=${formdata.subject}&cc=${formdata.cc}&body=${formdata.body}`
    $('#output-area').html(mailto);
    $('#try-button').attr('href', mailto);
});

$('#copy-button').on('click', function () {
    navigator.clipboard.writeText($('#output-area').val());
    toast.success({
        timeout: 1000,
        position: 'topRight',
        message: 'Copied to clipboard',
    });
});

