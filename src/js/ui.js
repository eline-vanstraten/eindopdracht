import { Actor, Vector, Label, Font, Color, FontUnit } from "excalibur"

export class UI extends Actor {

    scoreCounter
    frameCounter
    scoreLabel
    livesLabel
    

    constructor() {
        super()

        this.scoreCounter = 0
        this.frameCounter = 0

        this.scoreLabel = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 80),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.addChild(this.scoreLabel)


         this.livesLabel = new Label({
            text: 'Lives: 3',
            pos: new Vector(600, 60),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.addChild(this.livesLabel)


    }

    onPostUpdate() {
        this.frameCounter++
        if (this.frameCounter > 120) {
            console.log("2 seconden verstreken")
            this.frameCounter = 0
            this.scoreCounter++
            this.scoreLabel.text = `Score: ${this.scoreCounter}`
            
        }
    }

    showLives(lives){
        this.livesLabel.text = `Lives: ${lives}`

    }


}