createCircle = (color = "aqua", lettre = "A") => {
  const circle = new Circle(color, lettre).element;
  circle.addEventListener("animationend", (e) => e.target.remove());
  appendCircle(circle);
};

appendCircle = (circle) => {
  const classContainer = window.innerWidth > 679 ? "balloons" : "container";
  const container = document.getElementsByClassName(classContainer)[0];
  container.appendChild(circle);
};
