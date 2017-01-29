var Observable = require("data/observable").Observable;
var app = require('application');
var view = require('ui/core/view');
var viewModel = new Observable();
var frameModule = require('ui/frame');
// var toast = require('nativescript-toasts');nativescript-toasts

// var options = {
//   text: "verification failed",
//   duration: toast.DURATION.SHORT
// };

exports.createViewModel = function() {
  viewModel.customerID = "";
  viewModel.verifyID = "";
  return viewModel;
};


viewModel.sendToChooseTypePage = function() {
  // if ( !verifyID() ) return;
  frameModule.topmost().navigate({
    moduleName: './choose-type/choose-page',
    context: {
      id: viewModel.customerID
    }
  });
};

function verifyID() {
  if ( viewModel.customerID.length === 0 && viewModel.verifyID.length === 0 ) return false;
  if ( viewModel.customerID === viewModel.verifyID ) return true;
  return false;
}