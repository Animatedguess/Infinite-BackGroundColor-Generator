const Hex = "0123456789ABCDEF";
let interValID;
function colorGenerator() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
const startChange = function () {
  let color = colorGenerator();
  document.getElementById("Status").textContent =
    "BackGournd-Color Generator is Now Started.";
  document.querySelector("body").style.backgroundColor = color;
  document.getElementById("Stop").style.backgroundColor = color;
};
const startFunction = function () {
  if (!interValID) {
    interValID = setInterval(startChange, 1000);
  }
};
document
  .getElementById("Start")
  .addEventListener("click", startFunction, false);
document.getElementById("Stop").addEventListener("click", stopFunction, false);

function stopFunction() {
  clearInterval(interValID);
  document.getElementById("Status").textContent =
    "BackGournd-Color Generator is Now Stop.";
  interValID = null;
  document.getElementById("result").textContent =
    "Hex code of BackGround-Color is : " + document.body.style.backgroundColor;
}
