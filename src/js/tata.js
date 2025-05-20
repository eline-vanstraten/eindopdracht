import { Actor, Vector, Keys } from "excalibur"
import { Resources } from './resources.js'

export class Tata extends Actor {
    constructor() {
        super({ width: Resources.Tata.width, height: Resources.Tata.height })

        let x = Math.random() * -500
        let y = Math.random() * 450

        console.log("I am Tata")
        this.graphics.use(Resources.Tata.toSprite())
        this.pos = new Vector(200,200)   // positie
        // this.vel = new Vector(20,0)   

        // let sc = Math.random() * 2 + 0.2
        this.scale = new Vector(0.1, 0.1)

        // this.pos = new Vector(x, y)
        // this.baseSpeed = 10
        // this.vel = new Vector(200, 0)

    }

    onPreUpdate(engine) {
   let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = true       // flip de sprite
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = false      // flip de sprite
        }
        this.vel = new Vector(xspeed, yspeed)
}
}