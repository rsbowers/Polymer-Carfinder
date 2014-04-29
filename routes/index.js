/* GET home page. */
exports.index = function(req, res){
  res.render('home', { layout: 'home', title: 'Express' });
};

exports.modelListing = function(req, res){
  console.log(req.params);
  res.render('modelListing', { title: 'Express', make: req.params.makeID });
};

exports.vehicleListing = function(req, res){
  console.log(req.params);
  res.render('vehicleListing', { title: 'Express', make: req.params.makeID, model: req.params.modelID,  });
};

exports.vehicleDetail = function(req, res){
  console.log(req.params);
  res.render('vehicleDetail', { title: 'Express', vehicleID: req.params.vehicleID });
};
