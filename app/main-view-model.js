var Observable = require("data/observable").Observable;
var imageModule = require('ui/image');
var camera = require('nativescript-camera');
var app = require('application');
var view = require('ui/core/view');
var viewModel = new Observable();
var imageList;

exports.createViewModel = function() {

    if ( app.android ) {
        camera.requestPermissons();   
    }

    return viewModel;
};

exports.setter = function(page) {

    imageList = view.getViewById(page, "imageList");

    console.log(imageList);

};

viewModel.takePhoto = function() {

    camera.takePicture().then(function(imageAsset) {
        var image = new imageModule.Image();
        image.src = imageAsset;
        imageList.insertChild(image, 0);
    }).catch(function(err) {
        console.error(e);
    });
};

