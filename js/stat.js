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
