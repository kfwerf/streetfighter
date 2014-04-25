
/*
title: Event Dispatcher
description: Dispatches and receives events
dependencies: none
author: Kenneth van der Werf
 */
var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

define([], function() {
  var classEventDispatcher;
  return classEventDispatcher = (function() {
    function classEventDispatcher() {
      this._objEvents = {};
    }

    classEventDispatcher.prototype.bind = function(strEvent, fnCallback) {
      this._objEvents = this._objEvents || {};
      this._objEvents[strEvent] = this._objEvents[strEvent] || [];
      return this._objEvents[strEvent].push(fnCallback);
    };

    classEventDispatcher.prototype.unbind = function(event, fnCallback) {
      var _ref;
      this._objEvents = this._objEvents || {};
      if (_ref = !strEvent, __indexOf.call(this._objEvents, _ref) >= 0) {
        return;
      }
      return this._objEvents[strEvent].splice(this._objEvents[strEvent].indexOf(fnCallback), 1);
    };

    classEventDispatcher.prototype.trigger = function(strEvent, arrArguments) {
      var fnCallback, _ref, _ref1;
      if (arrArguments == null) {
        arrArguments = [];
      }
      this._objEvents = this._objEvents || {};
      if (_ref = !strEvent, __indexOf.call(this._objEvents, _ref) >= 0) {
        return;
      }
      _ref1 = this._objEvents[strEvent];
      for (strEvent in _ref1) {
        fnCallback = _ref1[strEvent];
        fnCallback.apply(this, arrArguments);
      }
      return true;
    };

    return classEventDispatcher;

  })();
});
