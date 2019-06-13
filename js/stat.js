var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText("Ура вы победили!", 115, 35);
  ctx.fillText("Список результатов:", 115, 55);

  var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i,  (barWidth * times[i]) BAR_HEIGHT);
  }
};




/* Моё
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText("Ура вы победили!", 115, 35);
  ctx.fillText("Список результатов:", 115, 55);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', 138, 235);
  ctx.fillRect(140, 80, 40, 150);

  ctx.fillStyle = 'blue';
  ctx.fillText('Кекс', 228, 235);
  ctx.fillRect(230, 80, 40, 150);

  ctx.fillStyle = 'blue';
  ctx.fillText('Катя', 318, 235);
  ctx.fillRect(320, 80, 40, 150);

  ctx.fillStyle = 'blue';
  ctx.fillText('Игорь', 408, 235);
  ctx.fillRect(410, 80, 40, 150);
};

*/


/* Демка Шаг 13
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText("Ура вы победили!", 115, 35);
  ctx.fillText("Список результатов:", 115, 55);
};




*/
