const slide = document.querySelector(".slide");
let counter = 1;

function clickButton() {
  rightArrow.click();
}

setInterval(clickButton, 3000);

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", () => {
  const style = getComputedStyle(slide);

  if (style.left != "550px") {
    slide.style.left = `${
      Number(style.left.match(/[-+]?[0-9]*\.?[0-9]/)) + 510
    }px`;
    counter--;
  } else {
    slide.style.left = "-980px";
    counter = 4;
  }
  const bubble = document.querySelector(`#media${counter}`);
  const darkBubble = document.querySelector(".darken");
  darkBubble.classList.remove("darken");
  bubble.classList.add("darken");
});

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", () => {
  const style = getComputedStyle(slide);

  if (style.left != "-980px") {
    slide.style.left = `${
      Number(style.left.match(/[-+]?[0-9]*\.?[0-9]/)) - 510
    }px`;
    counter++;
  } else {
    slide.style.left = "550px";
    counter = 1;
  }
  const bubble = document.querySelector(`#media${counter}`);
  const darkBubble = document.querySelector(".darken");
  darkBubble.classList.remove("darken");
  bubble.classList.add("darken");
});

const firstBubble = document.querySelector("#media1");
const secondBubble = document.querySelector("#media2");
const thirdBubble = document.querySelector("#media3");
const fourthBubble = document.querySelector("#media4");

firstBubble.addEventListener("click", () => {
  const darkBubble = document.querySelector(".darken");
  darkBubble.classList.remove("darken");
  slide.style.left = "550px";
  firstBubble.classList.add("darken");
  counter = 1;
});

secondBubble.addEventListener("click", () => {
  const darkBubble = document.querySelector(".darken");
  darkBubble.classList.remove("darken");
  slide.style.left = "40px";
  secondBubble.classList.add("darken");
  counter = 2;
});

thirdBubble.addEventListener("click", () => {
  const darkBubble = document.querySelector(".darken");
  darkBubble.classList.remove("darken");
  slide.style.left = "-470px";
  thirdBubble.classList.add("darken");
  counter = 3;
});

fourthBubble.addEventListener("click", () => {
  const darkBubble = document.querySelector(".darken");
  darkBubble.classList.remove("darken");
  slide.style.left = "-980px";
  fourthBubble.classList.add("darken");
  counter = 4;
});
