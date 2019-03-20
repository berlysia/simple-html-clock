(function() {
  const rootEl = document.querySelector("#root");
  const clockEl = document.createElement("time");
  rootEl.insertAdjacentElement("beforeend", clockEl);

  const callback = () => {
    const now = Date.now();
    clockEl.textContent = formatTime(now);
    requestAnimationFrame(callback);
  };
  requestAnimationFrame(callback);

  const negateClassName = "negated";
  function toggleNegate(event) {
    if (rootEl.classList.contains(negateClassName)) {
      rootEl.classList.remove(negateClassName);
    } else {
      rootEl.classList.add(negateClassName);
    }
  }
  rootEl.addEventListener("click", toggleNegate, { passive: true });
})();

function formatTime(dateNum) {
  const milisecs = dateNum % 1000;
  const milisecsRem = (dateNum / 1000) | 0;
  const secs = milisecsRem % 60;
  const secsRem = (milisecsRem / 60) | 0;
  const mins = secsRem % 60;
  const minsRem = (secsRem / 60) | 0;
  const hours = (minsRem + 9) % 24;
  const HH = hours.toString().padStart(2, "0");
  const mm = mins.toString().padStart(2, "0");
  const ss = secs.toString().padStart(2, "0");
  const SSS = milisecs.toString().padStart(3, "0");

  return `${HH}:${mm}:${ss}.${SSS}`;
}
