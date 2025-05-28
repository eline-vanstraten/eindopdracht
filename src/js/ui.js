import { Actor, Vector, Label, Font, Color, FontUnit } from "excalibur"

export class UI extends Actor {

    scoreCounter
    frameCounter
    scoreLabel
    

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


}