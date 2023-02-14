const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  var imgs = imageContainerEl.getElementsByTagName('img');
  len = imgs.length-1;
  if (currentImg > len) {
    currentImg = 1;
    console.log(currentImg)
  } else if (currentImg < 1) {
    currentImg = len;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    updateImg();
    currentImg++;
  }, 5000);
}
updateImg()
const containerEl = document.querySelector(".container");

const btnE1 = document.querySelector("#a1");
const btnE2 = document.querySelector("#a2");
const btnE3 = document.querySelector("#a3");
const btnE5 = document.querySelector("#a5");
const popupContainerE1 = document.querySelector("#popup-container1");
const popupContainerE2 = document.querySelector("#popup-container2");
const popupContainerE3 = document.querySelector("#popup-container3");
const popupContainerE5 = document.querySelector("#popup-container5");
console.log(popupContainerE3)
const closeIconE1 = document.querySelector("#close-icon1");
const closeIconE2 = document.querySelector("#close-icon2");
const closeIconE3 = document.querySelector("#close-icon3");
const closeIconE5 = document.querySelector("#close-icon5");
btnE1.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerE1.classList.remove("active");
});

closeIconE1.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerE1.classList.add("active");
});

btnE2.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerE2.classList.remove("active");
});

closeIconE2.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerE2.classList.add("active");
});

btnE3.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerE3.classList.remove("active");
});
console.log(containerEl)
closeIconE3.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerE3.classList.add("active");
});

btnE5.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerE5.classList.remove("active");
});

closeIconE5.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerE5.classList.add("active");
});
