
/*
-- DRAFT -- MIGHT NOT BE NEEDED
title: Collision Controller
description: Controller for dependencies and what occurs when collision is hit
dependencies: Event Dispatcher
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'keypress', 'rsvp', 'modules/abstract/eventdispatcher'], function(createjs, keypress, rsvp, EventDispatcher) {
  var classCollisionController;
  return classCollisionController = (function(_super) {
    __extends(classCollisionController, _super);

    function classCollisionController() {}

    return classCollisionController;

  })(EventDispatcher);
});
