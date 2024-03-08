import Phaser from "phaser";
export default class SettingScene extends Phaser.Scene {
    private backButton?: Phaser.GameObjects.Text;
    private backgroundColors: string[] = ["#ffffff", "#ffcc00", "#99ff99"];
    private currentColorIndex: number = 0;
    private backgroundColor: string;

    private scoreText?: Phaser.GameObjects.Text;
    private score: number;

    constructor() {
        super({ key: "SettingScene" });
    }

    init(data: {
        backgroundColor: string;
        scoreText: Phaser.GameObjects.Text;
        score: number;
    }) {
        this.backgroundColor = data.backgroundColor;
        this.scoreText = data.scoreText;
        this.score = data.score;
    }

    create() {
        this.scoreText = this.add.text(16, 16, "score: 0", {
            fontSize: "32px",
            color: "#000000",
        });

        this.scoreText.setText("Score: " + this.score);
        this.cameras.main.setBackgroundColor(this.backgroundColor);
        const text = this.add.text(
            this.cameras.main.width / 2,
            50,
            "Settings",
            {
                fontSize: "32px",
                color: "#000000",
            }
        );
        text.setOrigin(0.5, 0.5);

        this.backButton = this.add.text(
            this.cameras.main.width / 2,
            500,
            "Back",
            {
                fontSize: "24px",
                color: "#ffffff",
                backgroundColor: "#000000",
            }
        );
        this.backButton.setOrigin(0.5);

        this.backButton.setInteractive();
        this.backButton.on("pointerdown", () => {
            const storedBackgroundColor =
                this.backgroundColors[this.currentColorIndex];
            this.scene.stop("SettingScene").launch("MainScene", {
                backgroundColor: storedBackgroundColor,
            });
        });

        const changeColorButton = this.add.text(
            this.cameras.main.width / 2,
            150,
            "Change Background Color",
            {
                fontSize: "24px",
                color: "#ffffff",
                backgroundColor: "#000000",
            }
        );

        changeColorButton.setOrigin(0.5);
        changeColorButton.setInteractive();
        changeColorButton.on("pointerdown", this.changeBackgroundColor, this);
    }
    private changeBackgroundColor() {
        this.currentColorIndex =
            (this.currentColorIndex + 1) % this.backgroundColors.length;
        const newColor = this.backgroundColors[this.currentColorIndex];
        this.cameras.main.setBackgroundColor(newColor);
        this.scene.manager
            .getScene("MainScene")
            .data.set("backgroundColor", newColor);
    }

    update() {}
}
