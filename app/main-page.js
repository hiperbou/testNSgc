(function (_, Kotlin) {
  function tap() {
    console.log("Tapped")
    Kotlin;
    console.log("Calling GC")
    global.gc();
    console.log("GC done")
  }
  _.tap = tap;
  return _;
}(module.exports, require('kotlin')));
