(() => {
  // typescript/sample.ts
  var message = "Hello World!";
  console.log(message);
  function executeApi() {
    const token = $('input[name="__RequestVerificationToken"]').val();
    $.ajax({
      headers: {
        "RequestVerificationToken": token
      },
      type: "POST",
      url: "/api/weatherforecast",
      data: JSON.stringify({ id: "123" }),
      contentType: "application/json"
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

  // typescript/index.ts
  function ConsoleWrite(x) {
    console.log(x);
  }
  ConsoleWrite("aaaa");
  function deadfunction() {
    initMap();
  }
  console.log(dummy_process_cwd);
})();
//# sourceMappingURL=bundle.js.map
