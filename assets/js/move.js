let delay = 1000;
function move() {
  var move = document.getElementById("move");
  var x = 100;
  var y = 100;
  var r2 = Math.random();
  var r1 = Math.random();
  move.style.top = r1 * x + "%";
  move.style.left = r2 * y + "%";
}
setInterval(function () {
  move();
}, delay);
