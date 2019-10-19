var images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];
function changeMe() {
  var rand = Math.floor(Math.random()*images.length);
  document.body.style.background = "url("+images[rand]+")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}