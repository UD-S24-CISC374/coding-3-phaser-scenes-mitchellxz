/* PAUSE SCENE */
import Phaser from "phaser";
export default class AnotherScene extends Phaser.Scene {
    constructor() {
        super({ key: "AnotherScene" });
    }

    create() {
        const text = this.add.text(400, 300, "Press esc to unpause", {
            fontSize: "32px",
            color: "#000000",
        });
        text.setOrigin(0.5, 0.5);

        const escKey = this.input.keyboard?.addKey(
            Phaser.Input.Keyboard.KeyCodes.ESC
        );

        escKey?.on("down", () => {
            this.scene.stop("AnotherScene");
            this.scene.resume("MainScene");
        });
    }
}
