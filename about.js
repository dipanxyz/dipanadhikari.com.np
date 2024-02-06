//getting all the boxes and the button
var boxes = [
  document.getElementById("ankit"),
  document.getElementById("dipan"),
  document.getElementById("pranita"),
  document.getElementById("supreme"),
];
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");

// initially hiding all boxes
for (var i = 0; i < boxes.length; i++) {
  boxes[i].style.display = "none";
}

// showing first box
if (boxes.length > 0) {
  boxes[0].style.display = "block";
}

// currentBox index
var currentBox = 0;

// adding the click event listener to the next and previous button
nextButton.addEventListener("click", function () {
  boxes[currentBox].style.display = "none";

  currentBox = (currentBox + 1) % boxes.length;
  boxes[currentBox].style.display = "block";
});
prevButton.addEventListener("click", function () {
  boxes[currentBox].style.display = "none";

  currentBox = (currentBox - 1 + boxes.length) % boxes.length;
  boxes[currentBox].style.display = "block";
});
