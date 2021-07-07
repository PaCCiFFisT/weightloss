"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
var dailyBtn = document.querySelector('.daily-btn');
var inputs = document.querySelectorAll('.daily-calculator__section input');
var resultPopup = document.querySelector('.result-popup');
var resultPopupText = document.querySelector('.result-popup p');

var closeBtn = document.querySelector('.close-btn').onclick = function () {
  resultPopup.classList.remove('visible');
};

var showMoreBtn = document.querySelector('.see-more-btn');
var i = 0;

document.forms['daily-calc-form'].onsubmit = function daily(e) {
  e.preventDefault();

  for (i; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      alert(new Error('Please fill all fields'));
      return;
    }
  }

  var dailyFormData = new FormData(this);

  var data = _toConsumableArray(dailyFormData.values());

  var result = calculate(data);
  showResult(result, 'daily callorage');
  document.getElementById('daily-calc-form').reset();
};

function calculate(data) {
  var result = 0;

  if (data[7] == 'mifflin') {
    result = 10 * data[2] + 6.25 * data[4] - 5 * data[0];

    if (data[1] == 'male') {
      result = (result + 5) * data[6];
    } else {
      result = (result - 161) * data[6];
    }
  } else {
    if (data[1] == 'male') {
      result = (88.362 + 13.397 * data[2] + 4.799 * data[4] - 5.677 * data[0]) * data[6];
    } else {
      result = (447.593 + 9.247 * data[2] + 3.098 * data[4] - 4.330 * data[0]) * data[6];
    }
  }

  return Math.round(result);
}

function showResult(result, text) {
  resultPopupText.innerHTML = "Your ".concat(text, " is ").concat(result);
  console.log(resultPopup);
  resultPopup.classList.add('visible');
}