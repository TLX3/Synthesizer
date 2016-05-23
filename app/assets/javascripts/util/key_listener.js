(function(root) {
  var Listener = root.Listener = {};

  Listener.handleKeyUp = function (event) {
    makeKeyHandler("keyUnpressed")(event);
  };

  Listener.handleKeyDown = function (event) {
    makeKeyHandler("keyPressed")(event);
  };

  var makeKeyHandler = function (action) {
    return function (event) {
      var keyPress = String.fromCharCode(event.keyCode);
      var note = KEY_MAPPING[keyPress] + "4";
      KeyActions[action](note);
    };
  };

  Listener.turnOn = function () {
    $(document).on("keyup", Listener.handleKeyUp);
    $(document).on("keydown", Listener.handleKeyDown);
  };

  Listener.turnOff = function () {
    $(document).off("keyup", Listener.handleKeyUp);
    $(document).off("keydown", Listener.handleKeyDown);
  };

  Listener.turnOn();
})(this);
