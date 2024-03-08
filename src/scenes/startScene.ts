import Phaser from "phaser";
export default class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: "StartScene" });
    }

    create() {
        const pressQText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "Press Q to Start the Game",
            {
                fontSize: "32px",
                color: "#000000",
            }
        );

        pressQText.setOrigin(0.5);

        this.input.keyboard?.on("keydown-Q", () => {
            this.scene.start("MainScene");
        });
    }
}
