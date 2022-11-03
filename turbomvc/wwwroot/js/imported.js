// typescript/util/importtest.ts
var MyObj = class {
  constructor(foo, bar) {
    this.foo = foo;
    this.bar = bar;
  }
};
function AAA() {
  console.log("aadfad");
  console.log("aaaa");
}

// typescript/imported.ts
var a = new MyObj("name", 123);
var b = new MyObj("aaaa", 12344);
AAA();
//# sourceMappingURL=imported.js.map
