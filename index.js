(function () {
  const el = document.querySelector('#root');
  const clockEl = document.createElement('time');
  el.insertAdjacentElement('beforeend', clockEl);

  const callback = () => {
    const now = Date.now();
    clockEl.textContent = formatTime(now);
    requestAnimationFrame(callback);
  };
  requestAnimationFrame(callback);
})();

function formatTime(dateNum) {
  const milisecs = dateNum % 1000;
  const milisecsRem = dateNum / 1000 | 0;
  const secs = milisecsRem % 60;
  const secsRem = milisecsRem / 60 | 0;
  const mins = secsRem % 60;
  const minsRem = secsRem / 60 | 0;
  const hours = (minsRem + 9) % 24;

  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${milisecs.toString().padStart(3, '0')}`;
}
