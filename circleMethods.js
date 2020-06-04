createCircle = (color = "aqua", lettre = "A") => {
  const objectCircle = new Circle(color, lettre);
  const circle = objectCircle.element;
  circle.addEventListener("animationend", (e) => e.target.remove());
  appendCircle(circle);
};

appendCircle = (circle) => {
  const classContainer = window.innerWidth > 679 ? "balloons" : "container";
  const container = document.getElementsByClassName(classContainer)[0];
  container.appendChild(circle);
};
