div = document.createElement("div");
div.setAttribute("id", "cursor");

document.body.appendChild(div);

document.body.addEventListener("mousemove", function (Event) {
  if (document.hasFocus()) {
    mouseX = Event.clientX;
    mouseY = Event.clientY;
    offset = scrollY;

    div.style.left = mouseX + "px";
    div.style.top = mouseY + offset + "px";
  }
});
