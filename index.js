'use strict';
import RCTToast from './NativeToast';

const Toast = {};

const optionsBuilder = function () {
  // defaults
    let message = null;
    let duration = 'short';
    let position = 'center';
    let addPixelsY = 0;

    return {
        withMessage: function (m) {
            message = m;
            return this;
        },

        withDuration: function (d) {
            duration = d;
            return this;
        },

        withPosition: function (p) {
            position = p;
            return this;
        },

        withAddPixelsY: function (y) {
            addPixelsY = y;
            return this;
        },

        build: function () {
            return {
                message: message,
                duration: duration,
                position: position,
                addPixelsY: addPixelsY,
            };
        },
    };
};

const showWithOptions = function (options) {
	console.log("options 2");
    RCTToast.show(options);
    console.log("options 4");
};

const showToast = function (message, duration, position) {
    console.log("options 1");
    showWithOptions(
      optionsBuilder()
          .withMessage(message || '未知数据')
          .withDuration(duration)
          .withPosition(position)
          .build()
      );
    console.log("options 5");
};

Toast.showShortTop = function (message) {
    showToast(message, 'short', 'top');
};

Toast.showShortCenter = function (message) {
    showToast(message, 'short', 'center');
};

Toast.showShortBottom = function (message) {
    showToast(message, 'short', 'bottom');
};

Toast.showLongTop = function (message) {
    showToast(message, 'long', 'top');
};

Toast.showLongCenter = function (message) {
    showToast(message, 'long', 'center');
};

Toast.showLongBottom = function (message) {
    showToast(message, 'long', 'bottom');
};

Toast.show = function (message) {
    showToast(message, 'short', 'bottom');
};

Toast.hide = function () {
    RCTToast.hide();
};

module.exports = Toast;
