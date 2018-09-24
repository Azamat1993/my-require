var fs = require('fs');

(function() {
  myRequire.cache = Object.create(null);
  function myRequire(name) {
    if (!(name in myRequire.cache)) {
      var module = {exports: {}};
      var code = fs.readFileSync(name);
      myRequire.name = module;
      var wrapper = Function("myRequire, exports, module", code);
      wrapper(myRequire, module.exports, module);
    }
    return myRequire.cache[name];
  }

  global.myRequire = myRequire;
}())

myRequire('./readFile.js');
