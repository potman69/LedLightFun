var five = require("johnny-five");

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();

function LedLight(){
  this.on = function(){
  board.on('ready', function(){
    var led = new five.Led(9);
    led.on();
  });
  }
  this.off = function(){
  board.on('ready', function(){
    var led = new five.Led(9);
    led.off();
  });
  }
  this.blink = function(){
  board.on('ready', function(){
    var led = new five.Led(9);
    led.blink(1000);
  });
  }
  this.blink_fast = function(){
  board.on('ready', function(){
    var led = new five.Led(9);
    led.blink(100);
  });
  }
  this.blink_slow = function(){
  board.on('ready', function(){
    var led = new five.Led(9);
    led.blink(3000);
  });
  }
}

var light = new LedLight();
	light.blink();
