module.exports.init = function (app) {
    // file path with ./filename
    var modules = [
      "./restaurant"
    ];

    modules.forEach(function (obj) {
      require(obj).init(app);
    });
};
    
  