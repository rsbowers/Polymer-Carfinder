/* GET home page. */
exports.index = function(req, res){
  res.render('home', { layout: 'home', title: 'Home' });
};

exports.modelListing = function(req, res){
  console.log(req.params);
  res.render('modelListing', { title: 'Model Listing', make: req.params.makeID });
};

exports.vehicleListing = function(req, res){
  console.log(req.params);
  res.render('vehicleListing', { title: 'Vehicle Listing', make: req.params.makeID, model: req.params.modelID,  });
};

exports.vehicleDetail = function(req, res){
  console.log(req.params);
  res.render('vehicleDetail', { layout: 'vehicle', title: 'Vehicle Detail', vehicleID: req.params.vehicleID });
};
