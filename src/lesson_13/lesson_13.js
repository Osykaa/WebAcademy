import "./lesson_13.scss";
import "./traffic-lighter.scss";
const trafficLighterRoot = document.querySelector(".traffic-lighter");
const lights = trafficLighterRoot.querySelectorAll(".traffic-lighter__light");
const togglerBtn = trafficLighterRoot.querySelector(
  ".traffic-lighter__toggler"
);

let isEnabled = false;
let activeIndex = 0;
let intervalId = 0;

const toggleOffAll = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove("active");
  }
};

const activateLight = () => {
  lights[activeIndex].classList.add("active");
};

for (let i = 0; i < lights.length; i++) {
  lights[i].onclick = function() {
    if (isEnabled) {
      toggleOffAll();
      activeIndex = i;
      clearInterval(intervalId);
      activateLight();
      startAutoChange();
    }
  };
}

const changeIndex = () => {
  if (activeIndex + 1 < lights.length) {
    activeIndex += 1;
  } else {
    activeIndex = 0;
  }
};

const toggleOffLighter = () => {
  isEnabled = false;
  toggleOffAll();
  activeIndex = 0;
  clearInterval(intervalId);
};

const startAutoChange = () => {
  intervalId = setInterval(() => {
    toggleOffAll();
    changeIndex();
    activateLight();
  }, 1000);
};

const toggleOnLighter = () => {
  isEnabled = true;
  activateLight(0);
  startAutoChange();
};

const togglerClickHandler = () => {
  console.log("HELLO");
  if (isEnabled) {
    toggleOffLighter();
  } else {
    toggleOnLighter();
  }
};

togglerBtn.onclick = togglerClickHandler;