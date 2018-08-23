const target = document.querySelector('.target');
const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const cancelBtn = document.querySelector('.cancelBtn');
const finishBtn = document.querySelector('.finishBtn');

// プロパティのキーごとにフレームを記述する形式
// target.animate({
//   opacity: [0, 1],
//   fontWeight: [100, 1000],
//   color: ['white', 'red']
// }, {
//   duration: 1000,
//   easing: 'ease-in',
//   iterations: 3,
//   fill: 'both',
//   delay: 1000
// });

// // プロパティのキーと値をフレームごとに記述する形式
// target.animate([
//   {
//     opacity: 0,
//     color: 'white'
//   },
//   {
//     opacity: 1,
//     color: 'blue'
//   }
// ], {
//   duration: 1000,
//   easing: 'ease-in',
//   iterations: 3,
//   fill: 'forwards'
// });

// Animation インターフェイスを使った高度なアニメーション
const keyframeEffect = new KeyframeEffect(
  target,
  [
    {
      opacity: 0,
      color: '#f00',
      fontWeight: 'normal',
      backgroundColor: 'gold',
      transform: 'translateY(300%)'
    },
    {
      opacity: 1,
      color: '#00f',
      fontWeight: 'bold',
      backgroundColor: 'tomato',
      transform: 'translateY(0)'
    }
  ],
  {
    duration: 1000,
    easing: 'ease-out',
    iterations: 3,
    fill: 'both'
  });

const animation = new Animation(
  keyframeEffect,
  document.timeline
);

startBtn.addEventListener('click', () => { animation.play(); });
pauseBtn.addEventListener('click', () => { animation.pause(); });
cancelBtn.addEventListener('click', () => { animation.cancel(); });
finishBtn.addEventListener('click', () => { animation.finish(); });

