// typescript/importtest.ts
var MyObj = class {
  constructor(foo, bar) {
    this.foo = foo;
    this.bar = bar;
  }
};
function AAA() {
  console.log("aadfad");
}
AAA();

// typescript/jqtest.ts
$(document).on("click", ".testid", async () => {
  console.log("hello");
  const a = $("#google").val();
  const b = a;
  console.log(b);
  const c = new MyObj("123", 123);
  console.log(JSON.stringify(c));
  console.log(c);
  initaaaa();
  AAA();
  $("#icesword").modal();
  try {
    let result = await $.ajax({
      headers: {
        RequestVerificationToken: "token"
      },
      type: "POST",
      url: "/api/weatherforecast",
      data: JSON.stringify({ id: "123" }),
      contentType: "application/json"
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});
function initaaaa() {
  console.log("aaaaacccasdnnfffnn");
}
//# sourceMappingURL=bundle.js.map
