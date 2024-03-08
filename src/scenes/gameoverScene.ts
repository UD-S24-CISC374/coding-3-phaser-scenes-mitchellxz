import Phaser from "phaser";
export default class GameoverScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameoverScene" });
    }

    create() {
        this.add
            .text(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                "Game Over",
                {
                    font: "48px",
                    color: "#000000",
                }
            )
            .setOrigin(0.5);
        this.cameras.main.setBackgroundColor("#FF6464");
    }
}
