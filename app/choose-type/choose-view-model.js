var Observable = require("data/observable").Observable;
var app = require('application');
var view = require('ui/core/view');
var viewModel = new Observable();
var frameModule = require('ui/frame');
var topmost = frameModule.topmost();
var btnModule = require('ui/button');

// viewModel.on(Observable.propertyChangeEvent, function( data ) {
//   console.dir(data);
// });


exports.createViewModel = function(page) {
  viewModel.customer_id = page.navigationContext.id;
  var btnArray = [ view.getViewById(page, 'license'), view.getViewById(page, 'address'), view.getViewById(page, 'income'), view.getViewById(page, 'b-statement') ];
  console.log(Object.keys(btnArray[0]));
  btnArray.forEach(function(btn) {
    btn.addEventListener(btnModule.Button.tapEvent, onTap, this); 
  });
  return viewModel;
};

viewModel.goBack = function() {
  topmost.goBack();
};

viewModel.getPhoto = function() {
  
  // frameModule.topmost().navigate({
  //   moduleName: './capture-photo/capture-photo',
  //   context: {
  //     id: "s"
  //   }
  // });
};

function onTap() {
  console.log('tapped');
}