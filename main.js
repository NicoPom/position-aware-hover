const btn = document.querySelector(".btn");
const span = document.querySelector("span");

btn.addEventListener("mouseenter", function (e) {
  // get the position of the button
  var parentOffset = this.getBoundingClientRect(),
    // get the position of the mouse relative to the button
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;

  span.style.top = relY + "px";
  span.style.left = relX + "px";
});

btn.addEventListener("mouseout", function (e) {
  var parentOffset = this.getBoundingClientRect(),
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;

  span.style.top = relY + "px";
  span.style.left = relX + "px";
});
