class Beat {
  constructor(audioPath) {
    this.music = new Audio(audioPath);
  }

  play = () => {
    this.music.currentTime = 0;
    this.music.play();
  };
}

class Circle {
  constructor(color, lettre, className = "animatedCircle") {
    this.element = document.createElement("div");
    this.color = color;
    this.lettre = lettre;
    this.position = Math.floor(Math.random() * 80);
    this.class = className;
    this.addClass();
    this.addBackgroundColor();
    this.addPosition();
    this.addLettre();
  }

  addClass = () => {
    this.element.className = this.class;
  };

  addBackgroundColor = () => {
    this.element.style.backgroundColor = this.color;
  };
  addPosition = () => {
    this.element.style.left = `${this.position}%`;
  };

  addLettre = () => {
    this.element.innerText = `${this.lettre}♪`;
  };
}

class Button {
  constructor(color, keyCode, lettre) {
    this.lettre = lettre;
    this.color = color;
    this.id = keyCode;
    this.element = document.getElementById(this.id);
    this.setButtonColorInHTML();
  }

  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
    this.element.style.boxShadow = `0 0 20px ${this.color}`;
  };

  select = () => {
    this.element.style.backgroundColor = this.color;
    this.createCircle();
  };

  createCircle = () => {
    const objectCircle = new Circle(this.color, this.lettre);
    const circle = objectCircle.element;
    circle.addEventListener("animationend", (e) => e.target.remove());
    this.appendCircle(circle);
  };

  appendCircle = (circle) => {
    const classContainer = window.innerWidth > 679 ? "balloons" : "container";
    const container = document.getElementsByClassName(classContainer)[0];
    container.appendChild(circle);
  };

  deselect = () => {
    this.element.style.removeProperty("background-color");
  };
}
