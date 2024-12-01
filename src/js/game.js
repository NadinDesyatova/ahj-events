export default class Game {
  constructor(playingField, goblinElement, deadGoblinsCounter, lostCounter) {
    this.goblin = goblinElement;
    this.playingField = playingField;
    this.activeHoleIndex = Math.floor(Math.random() * 16);
    this.deadGoblinsCounter = deadGoblinsCounter;
    this.lostCounter = lostCounter;
    this.playing = true;

    this.onHolesClick = this.onHolesClick.bind(this);
  }

  getHole(index) {
    return this.playingField.querySelectorAll(".hole")[index];
  }

  getActiveHoleElement() {
    return this.playingField.querySelector(".hole_has-goblin");
  }

  activateHole(index) {
    this.getHole(index).classList.add("hole_has-goblin");
    this.getActiveHoleElement().appendChild(this.goblin);
  }

  deactivateHole(index) {
    if (this.getActiveHoleElement() !== null) {
      this.getHole(index).classList.remove("hole_has-goblin");
    }
  }

  goblinMoving() {
    this.deactivateHole(this.activeHoleIndex);
    const lastActiveIndex = this.activeHoleIndex;
    this.activeHoleIndex = Math.floor(Math.random() * 16);
    while (lastActiveIndex === this.activeHoleIndex) {
      this.activeHoleIndex = Math.floor(Math.random() * 16);
    } 
    this.activateHole(this.activeHoleIndex);
  }

  onHolesClick(e) {
    if(e.target.classList.contains("goblin-img")) {
      this.deadGoblinsCounter.textContent = +this.deadGoblinsCounter.textContent + 1;
      this.deactivateHole(this.activeHoleIndex);
    }
  };

  isPlaying() { 
    this.playing
      ? this.playingField.addEventListener('click', this.onHolesClick)
      : this.playingField.removeEventListener('click', this.onHolesClick);
  }

  letPlay() {
    this.isPlaying();
    this.goblinMoving();
    const interval = setInterval(() => {
      if (this.getActiveHoleElement() !== null) {
        this.lostCounter.textContent = +this.lostCounter.textContent + 1;
      }
      if (this.lostCounter.textContent === "5") {
        alert("Вы проиграли!");
        this.playing = false;
        this.isPlaying();
        clearInterval(interval);
      } else {
        this.goblinMoving();
      }    
    }, 1000);
  }
}
