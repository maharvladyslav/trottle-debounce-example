const vanillaOutput = document.querySelector(".output.vanilla");
const throttleOutput = document.querySelector(".output.throttle");
const debounceOutput = document.querySelector(".output.debounce");

const eventCounter = {
  vanilla: 0,
  throttle: 0,
  debounce: 0,
};

window.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

window.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttle += 1;
    throttleOutput.textContent = eventCounter.throttle;
  }, 500)
);
window.addEventListener(
  "scroll",
  _.debounce(
    () => {
      eventCounter.debounce += 1;
      debounceOutput.textContent = eventCounter.debounce;
    },
    500,
    {
      trailing: true,
      leading: false,
    }
  )
);
