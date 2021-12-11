(() => {
  // typescript/sample.ts
  var message = "Hello World!";
  console.log(message);
  function executeApi() {
    $.ajax({
      type: "GET",
      url: "/api/weatherforecast"
    }).done(function(data) {
      console.log(data);
    }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
      alert(errorThrown);
    });
  }
  executeApi();
  var map;
  var center = { lat: 30, lng: -110 };
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center,
      zoom: 8
    });
  }
  initMap();
})();
//# sourceMappingURL=sample.js.map
