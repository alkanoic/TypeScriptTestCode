/// <reference path="../node_modules/@types/google.maps/index.d.ts" />
// <reference path="../node_modules/@types/jquery/JQuery.d.ts" />
import { WeatherForecast } from './api/weatherForecast';
//import * as $ from 'jquery';

let message: string = 'Hello World!';

console.log(message);

export function executeApi(): void {
  const token = <string> $('input[name="__RequestVerificationToken"]').val();
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
    .done(function (data: WeatherForecast[]) {
      console.log(data);
    })
    // Ajaxリクエストが失敗した場合
    .fail(function (XMLHttpRequest, textStatus, errorThrown) {
      alert(errorThrown);
    });
}

executeApi();

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

export function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center,
    zoom: 8,
  });
}
