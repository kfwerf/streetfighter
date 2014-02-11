
/*
@Author: Kenneth van der Werf
@Name: Actor class
@Description: Actor that is subscribed to the stage
 */
define(['createjs', 'radio'], function(createjs, radio) {
  var Actor;
  return Actor = (function() {
    function Actor() {
      this.strName = 'Actor';
      this.strDescription = 'A Actor on the stage.';
      this.strUID = (function() {
        var i, numString, numTotal, _i;
        numTotal = 10;
        numString = '';
        for (i = _i = 0; _i < numTotal; i = _i += 1) {
          numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return numString;
      })();
      this.objContainer = new createjs.Container();
    }

    return Actor;

  })();
});
