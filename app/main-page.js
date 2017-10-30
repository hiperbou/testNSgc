lodash = require("lodash");
exports.tap =   function tap() {
    console.log("Calling GC")
    global.gc();
    console.log("GC done")
}
