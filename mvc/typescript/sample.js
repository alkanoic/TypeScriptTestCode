"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMap = exports.executeApi = void 0;
//import * as $ from 'jquery';
let message = 'Hello World!';
console.log(message);
function executeApi() {
    const token = $('input[name="__RequestVerificationToken"]').val();
    $.ajax({
        headers: {
            "RequestVerificationToken": token
        },
        type: 'POST',
        url: '/api/weatherforecast',
        data: JSON.stringify({ id: '123' }),
        contentType: 'application/json',
    })
        // Ajaxリクエストが成功した場合
        .done(function (data) {
        console.log(data);
    })
        // Ajaxリクエストが失敗した場合
        .fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(errorThrown);
    });
}
exports.executeApi = executeApi;
executeApi();
let map;
const center = { lat: 30, lng: -110 };
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center,
        zoom: 8,
    });
}
exports.initMap = initMap;
