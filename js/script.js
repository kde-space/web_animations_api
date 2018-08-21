const target = document.querySelector('.target');

// プロパティのキーごとにフレームを記述する形式
target.animate({
  opacity: [0, 1],
  color: ['white', 'red']
}, 1000);

// プロパティのキーと値をフレームごとに記述する形式
target.animate([
  {
    opacity: 0,
    color: 'white'
  },
  {
    opacity: 1,
    color: 'blue'
  }
], {
  duration: 1000,
  easing: 'ease-in',
  iterations: 3,
  fill: 'forwards'
});